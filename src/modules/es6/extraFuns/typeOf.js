
/**
 *  类型判断
 **/


const classType = {};
"Boolean Number String Function Array Date RegExp Object Error".split(" ").map((elem)=>{
    classType[`[object ${elem}]`] = elem.toLowerCase();
})
const toString = Object.prototype.toString;

function type(value) {
    return classType[toString.call(value)] || 'object';
}


//2 纯粹的对象"，就是该对象是通过 "{}" 或 "new Object" 创建的，该对象含有零个或者多个键值对
{



    function isPlainObject(obj) {
        let proto, Ctor;
        let class2type = {};

        // 相当于 Object.prototype.toString
        let toString = class2type.toString;

        // 相当于 Object.prototype.hasOwnProperty
        let hasOwn = class2type.hasOwnProperty;

        // 排除掉明显不是obj的以及一些宿主对象如Window
        if(!obj || toString.call(obj)!=="[object Object]"){
            return false;
        }

        proto = Object.getPrototypeOf(obj);

        // 没有原型的对象是纯粹的，Object.create(null) 就在这里返回 true
        if(!proto){
            return true;
        }

        Ctor = hasOwn.call(proto, "constructor") && proto.constructor;

        return typeof Ctor ==="function" && hasOwn.toString.call(Ctor) === hasOwn.toString.call(Object)
    }

    // console.log('isPlainObject', isPlainObject({}));

}

//3 判断类数组
{

    function isWindow(obj) {
        return obj && obj === obj.window;
    }

    function isArrayLike(target) {

        let length = !!target && "length" in target && target.length;
        let typeRes = type(target);

        if(typeRes==="function" || isWindow(target)){
            return false;
        }

        return typeRes === "array" || length === 0 ||
            typeof length === "number" && length > 0 && (length - 1) in target;
    }

}