
export function getTargetValue(target, value) {
    /*
      仅绑定 isCallable && !isBoundedFunction && !isConstructable 的函数对象，如 window.console、window.atob 这类。目前没有完美的检测方式，这里通过 prototype 中是否还有可枚举的拓展方法的方式来判断
      @warning 这里不要随意替换成别的判断方式，因为可能触发一些 edge case（比如在 lodash.isFunction 在 iframe 上下文中可能由于调用了 top window 对象触发的安全异常）
     */
    // const boundValue = Function.prototype.bind.call(value, target);
    //
    // // some callable function has custom fields, we need to copy the enumerable props to boundValue. such as moment function.
    // // use for..in rather than Object.keys.forEach for performance reason
    // // eslint-disable-next-line guard-for-in,no-restricted-syntax
    // for (const key in value) {
    //     boundValue[key] = value[key];
    // }
    //
    // // copy prototype if bound function not have but target one have
    // // as prototype is non-enumerable mostly, we need to copy it from target function manually
    // if (value.hasOwnProperty('prototype') && !boundValue.hasOwnProperty('prototype')) {
    //     // we should not use assignment operator to set boundValue prototype like `boundValue.prototype = value.prototype`
    //     // as the assignment will also look up prototype chain while it hasn't own prototype property,
    //     // when the lookup succeed, the assignment will throw an TypeError like `Cannot assign to read only property 'prototype' of function` if its descriptor configured with writable false or just have a getter accessor
    //     // see https://github.com/umijs/qiankun/issues/1121
    //     Object.defineProperty(boundValue, 'prototype', { value: value.prototype, enumerable: false, writable: true });
    // }
    //
    // return boundValue;

    return value;
}

function isPropConfigurable(target, prop) {
    const descriptor = Object.getOwnPropertyDescriptor(target, prop);
    return descriptor ? descriptor.configurable : true;
}

function setWindowProp(prop, value, toDelete) {
    if (value === undefined && toDelete) {
        delete (window)[prop];
    } else if (isPropConfigurable(window, prop) && typeof prop !== 'symbol') {
        Object.defineProperty(window, prop, { writable: true, configurable: true });
        (window)[prop] = value;
    }
}

class SandBox {

    /** 沙箱期间新增的全局变量 */
    addedPropsMapInSandbox = new Map();

    /** 沙箱期间更新的全局变量 */
    modifiedPropsOriginalValueMapInSandbox = new Map();

    /** 持续记录更新的(新增和修改的)全局变量的 map，用于在任意时刻做 snapshot */
    currentUpdatedPropsValueMap = new Map();


    sandboxRunning = true;
    latestSetProp = null;

    active() {
        if (!this.sandboxRunning) {
            this.currentUpdatedPropsValueMap.forEach((v, p) => setWindowProp(p, v));
        }

        this.sandboxRunning = true;
    }

    inactive() {
        if (process.env.NODE_ENV === 'development') {
            console.info(`[qiankun:sandbox] ${this.name} modified global properties restore...`, [
                ...this.addedPropsMapInSandbox.keys(),
                ...this.modifiedPropsOriginalValueMapInSandbox.keys(),
            ]);
        }

        // renderSandboxSnapshot = snapshot(currentUpdatedPropsValueMapForSnapshot);
        // restore global props to initial snapshot
        this.modifiedPropsOriginalValueMapInSandbox.forEach((v, p) => setWindowProp(p, v));
        this.addedPropsMapInSandbox.forEach((_, p) => setWindowProp(p, undefined, true));

        this.sandboxRunning = false;
    }

    constructor(name) {
        this.name = name;
        const { addedPropsMapInSandbox, modifiedPropsOriginalValueMapInSandbox, currentUpdatedPropsValueMap } = this;

        const rawWindow = window;
        const fakeWindow = Object.create(null);

        const proxy = new Proxy(fakeWindow, {
            set: (_, p, value) => {
                if (this.sandboxRunning) {
                    if (!rawWindow.hasOwnProperty(p)) {
                        addedPropsMapInSandbox.set(p, value);
                    } else if (!modifiedPropsOriginalValueMapInSandbox.has(p)) {
                        // 如果当前 window 对象存在该属性，且 record map 中未记录过，则记录该属性初始值
                        const originalValue = (rawWindow)[p];
                        modifiedPropsOriginalValueMapInSandbox.set(p, originalValue);
                    }

                    currentUpdatedPropsValueMap.set(p, value);
                    // 必须重新设置 window 对象保证下次 get 时能拿到已更新的数据
                    // eslint-disable-next-line no-param-reassign
                    (rawWindow)[p] = value;

                    this.latestSetProp = p;

                    return true;
                }



                // 在 strict-mode 下，Proxy 的 handler.set 返回 false 会抛出 TypeError，在沙箱卸载的情况下应该忽略错误
                return true;
            },

            get(_, p) {
                // avoid who using window.window or window.self to escape the sandbox environment to touch the really window
                // or use window.top to check if an iframe context
                if (p === 'top' || p === 'parent' || p === 'window' || p === 'self') {
                    return proxy;
                }

                const value = (rawWindow)[p];
                return getTargetValue(rawWindow, value);
            },

            // trap in operator
            // see https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/constants.js#L12
            has(_, p) {
                return p in rawWindow;
            },

            getOwnPropertyDescriptor(_, p) {
                const descriptor = Object.getOwnPropertyDescriptor(rawWindow, p);
                // A property cannot be reported as non-configurable, if it does not exists as an own property of the target object
                if (descriptor && !descriptor.configurable) {
                    descriptor.configurable = true;
                }
                return descriptor;
            },
        });

        this.proxy = proxy;
    }
}


//todo test
{

    let a = new SandBox("sun");



    window.aa = 456;

    (function (window) {

        window.aa = 123;
        console.log('inner', window);
        let bb = window.aa


    })(a.proxy);

    a.inactive();
    console.log('outer', window.aa);


}