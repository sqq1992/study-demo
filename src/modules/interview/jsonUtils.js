
//1. 实现Json.stringify
{

    let jsonStringify = function (data) {
        let dataType = typeof data;

        if(dataType!=="object"){
            let result = data;
            if(Number.isNaN(data) || data===Infinity) {
                result = "null";
            }else if(dataType==="function" || dataType==="undefined"){
                return undefined
            }else if(dataType==="string"){
                result = '"' + data + '"';
            }
            return String(result);
        }else if(dataType==="object"){

            if(data===null){
                return "null";
            }else if(data instanceof Array){
                let result = [];
                data.forEach((elem,index)=>{
                    if(typeof elem==="function" || typeof elem==="undefined"){
                        result[index] = "null";
                    }else {
                        result[index] = jsonStringify(elem);
                    }
                })
                console.log('result', result);
                result = "[" + result + "]";
                return result;
            }else {

                let result = [];
                Object.keys(data).forEach((item, index) => {
                    if (typeof item !== 'symbol') {
                        //key 如果是symbol对象，忽略
                        if (data[item] !== undefined && typeof data[item] !== 'function'
                            && typeof data[item] !== 'symbol') {
                            //键值如果是 undefined、函数、symbol 为属性值，忽略
                            result.push('"' + item + '"' + ":" + jsonStringify(data[item]));
                        }
                    }
                });

                console.log('11', result);
                return ("{" + result + "}")
            }

        }

    };

    // console.log('jsonStringify', jsonStringify({a:1, b: 2}));

}


//2
{



}