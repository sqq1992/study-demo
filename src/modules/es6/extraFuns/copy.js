
/**
 *  拷贝
 **/

//1.前拷贝
{

    function shallowCopy(target) {

        if(typeof target!=="object") return target;

        let newObj = Array.isArray(target) ? [] : {};

        for (let i in target){
            if(target.hasOwnProperty(i)){
                newObj[i] = target[i];
            }
        }

        return newObj;
    }

    //todo
    var arr = ['old', 1, true, ['old1', 'old2'], {old: 1}]
    var arr2 = shallowCopy(arr);
    // console.log('arr2', arr2);

}

//2
{

    function deepCopy(target, weakMap = new WeakMap()) {

        let isObject = function (obj) {
            return obj && typeof obj === "object";
        }

        if (!isObject(target)) return target;

        if(weakMap.has(target)){
            return weakMap.get(target);
        }


        let newObj = Array.isArray(target) ? [] : {};
        weakMap.set(target, newObj);
        for (let key in target) {

            if (isObject(target[key])) {
                newObj[key] = deepCopy(target[key], weakMap);
            } else {
                newObj[key] = target[key];
            }

        }

        return newObj;
    }

    //todo
    // let a = {a: 1, b: 2, c: 3};
    // a.a = a;
    // let a1 = deepCopy(a);
    // console.log('', a, a1);


}

//3
{

    function deepCopy3(target) {

        let isObject = function (obj) {
            return obj && typeof obj === "object";
        }

        if(!isObject(target)) return target;

        let root = Array.isArray(target) ? [] : {};
        let stack = [{
            parent:root,
            data: target,
            key: undefined
        }];
        let weakMap = new WeakMap();

        while (stack.length){
            let node = stack.pop();
            let parent = node.parent;
            let data = node.data;
            let key = node.key;

            if(weakMap.has(data)){
                parent[key] = weakMap.get(data);
                continue;
            }
            let res = parent;
            weakMap.set(data, res);
            for (let i in data){
                if(isObject(data[i])){
                    let tempRes = parent[i] = Array.isArray(data[i]) ? [] : {};
                    stack.push({
                        parent: tempRes,
                        data: data[i],
                        key:i
                    })
                }else {
                    res[i] = data[i];
                }
            }

        }

        return root;
    }


    //1
    // let a = {a: 1, b: 2, c: {d:4, e: 5}};
    // a.a = a;
    // let a1 = deepCopy3(a);
    // console.log('deepCopy3', a, a1);

}