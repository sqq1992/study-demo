

function createData(deep, breadth) {
    var data = {};
    var temp = data;

    for (var i = 0; i < deep; i++) {
        temp = temp['data'] = {};
        for (var j = 0; j < breadth; j++) {
            temp[j] = j;
        }
    }

    return data;
}

{


    function deepCopy(obj) {

        if(typeof obj!=="object"){
            return obj;
        }

        let target = Array.isArray(obj) ? [] : {};
        for(let i in obj){
            if(Object.prototype.hasOwnProperty.call(obj,i)){

                if(typeof obj[i]==="object"){
                    target[i] = deepCopy(obj[i]);
                }else {
                    target[i] = obj[i];
                }

            }

        }


        return target;

    }




    function deepCopy2(source, map = new WeakMap()) {

        let isObject = function (obj) {
            return typeof obj === "object" && obj !== null;
        };

        if(!isObject(source)){
            return source;
        }

        if(map.has(source)){
            return map.get(source);
        }

        let target = Array.isArray(source) ? [] : {};
        map.set(source, target);


        for(let i in source){

            if(isObject(source)){
                target[i] = deepCopy2(source[i], map);
            }else {
                target[i] = source[i];
            }

        }


        return target;
    }




    function deepCopy3(source) {
        let isObject = function (obj) {
            return typeof obj === "object" && obj !== null;
        };

        if(!isObject(source)){
            return source;
        }


        let root = {};
        let map = new WeakMap();
        let loopList = [
            {
                parent:root,
                key:undefined,
                data: source
            }
        ];

        while (loopList.length){

            let node = loopList.pop();
            let {parent, key, data} = node;

            let res = parent;
            if(key!==undefined){
                res = parent[key] = {};
            }

            if(map.has(data)){
                continue;
            }
            map.set(data, parent);

            for(let i in data){

                if(typeof data[i]==="object"){

                    loopList.push({
                        parent: res,
                        key:i,
                        data: data[i]
                    })

                }else {
                    res[i] = data[i];
                }

            }


        }


        return root;
    }

    // let a = createData(6000,2);

    let a = {b: 1};
    // a.b = a;

    console.log('deepCopy', deepCopy3(a));

}
