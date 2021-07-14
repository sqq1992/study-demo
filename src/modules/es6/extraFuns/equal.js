
/**
 *  判断2个数据是否相等
 **/



//1
{
    let toString = Object.prototype.toString;

    function isFunction(obj) {
        return toString.call(obj) === "[object Function]";
    }


    function equal(a,b,aStack,bStack) {

        // 证明+0与-0是不相同的
        if(a===b) return a !== 0 || 1 / a === 1 / b;

        // 证明null与其他数据事不相同
        if(a===null || b===null) return false;

        // 证明NaN和NaN是不相同的
        if(a!==a) return b !== b;

        // 证明a基本数据类型和b函数类型是不相同的
        let typeA = typeof a;
        if(typeA!=="object" && typeA!=="function" && typeof b!=="object") return false;



        let deepEqual = (a,b) => {
            let className = toString.call(a);
            if(className!==toString.call(b)) return false;

            switch (className) {
                case '[object RegExp]':
                case "[object String]":
                    return "" + a === "" + b;
                case "[object Number]":
                    if(+a!==+a) return +b !== +b;
                    return +a === 0 ? 1 / a === 1 / b : +a === +b;
                case '[object Date]':
                case '[object Boolean]':
                    return +a === +b;
                default:
                    break;
            }

            let areArrays = className === '[object Array]';


            //判断构造函数实例是否相同
            if(!areArrays){

                //过滤掉2个函数的情况
                if(typeof a!=="object" || typeof b!=="object") return false;

                let aCtor = a.constructor;
                let bCtor = b.constructor;
                if (aCtor === bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) && ('constructor' in a && 'constructor' in b)) {
                    return false;
                }

            }


            aStack = aStack || [];
            bStack = bStack || [];
            let stackLen = aStack.length;
            while (stackLen--){
                if(aStack[stackLen]===a){
                    return bStack[stackLen] === b;
                }
            }
            aStack.push(a);
            bStack.push(b);

            if(areArrays){  //判断数组相同

                let aLen = a.length;
                if(aLen!==b.length) return false;
                while (aLen--){
                    if(!equal(a[aLen],b[aLen],aStack,bStack)) return false;
                }
            }else {     //判断对象相同

                let keys = Object.keys(a);
                let length = keys.length;

                if(length !== Object.keys(b).length) return false;

                let key;
                while (length--){
                    key = keys[length];
                    if(!equal(a[key],b[key],aStack,bStack)) return false;
                }

            }


            aStack.pop();
            bStack.pop();
            return true;
        };


        return deepEqual(a, b);

    }

    //1
    // console.log('equal',equal('a', new String("a")));

    //2
    // function Person() {
    //     this.name = name;
    // }
    //
    // function Animal() {
    //     this.name = name
    // }
    //
    // var person = new Person('Kevin');
    // var animal = new Animal('Kevin');
    //
    // console.log('equal2', equal(person, animal)); // ???

    //3
    let a = {foo: {b: {foo: {c: {foo: null}}}}};
    let b = {foo: {b: {foo: {c: {foo: null}}}}};
    a.foo.b.foo.c.foo = a;
    b.foo.b.foo.c.foo = b;

    console.log('equal3', equal(a, b));

}