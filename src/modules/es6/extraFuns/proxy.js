
/**
 *  代理
 **/

//前沿
{

    //1.1
    var obj11 = {}
    Object.defineProperty(obj11, "num", {
        value: 1,
        writable: true,
        enumerable: true,
        configurable: true
    });

    //1.2
    var obj12 = {}
    var value = 1;
    Object.defineProperty(obj12, "num", {
        get : function(){
            return value;
        },
        set : function(newValue){
            value = newValue;
        },
        enumerable : true,
        configurable : true
    });



}


//1
{

    function createArray(elements) {

        let handle = {
            get(target,key,receiver){
                let index = Number(key);
                if(index<0){
                    index = String(target.length+key)
                }
                console.log(target, key, receiver);
                return Reflect.get(target, index, receiver);
            }
        };

        let target = [...elements];
        return new Proxy(target, handle);
    }

    var arr = createArray([1, 2, 3, 4]);
    console.log('1',arr[-1])

}