

//1.实现get方法
{

    let get = function (targetObj, keys, defaultValue) {

        let formatKeys = keys.replace(/\[(\d*)\]/g, '.$1').split('.');

        let currentVal = targetObj;
        for (let key of formatKeys){
            currentVal = Object(currentVal)[key];
            if(currentVal[key]===undefined){
                return defaultValue;
            }
        }

        return currentVal;
    };

    //1
    // console.log('get', get({a: 1}, 'a.b[2][1]', 3));

}