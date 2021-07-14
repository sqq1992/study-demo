
//柯里化函数
{


    function currying(fn){
        let slice = Array.prototype.slice;
        let _args = slice.call(arguments,1);
        return function(){
            var _inargs = slice.call(arguments);
            return fn.apply(null,_args.concat(_inargs))
        }
    }


    //test 1
    // function sumFn(a, b, c) {
    //     a = a || 0;
    //     b = b || 0;
    //     c = c || 0;
    //     return a + b + c;
    // }
    //
    // var sum = currying(sumFn, 10);
    // console.log(sum(2));

    //todo test2
    // function square(i) {
    //     return i * i;
    // }
    //
    // function dubble(i) {
    //     return i *= 2;
    // }
    //
    // function map(handeler, list) {
    //     return list.map(handeler);
    // }
    // var mapSQ = currying(map, square);
    // console.log(mapSQ([1, 2, 3, 4, 5]))
    //
    // var mapDB = currying(map, dubble);
    // console.log(mapDB([1, 2, 3, 4, 5]));


}


{
    function currying(fn) {
        let args = [];
        return function cb() {
            if(arguments.length===0){
                return fn.apply(this, args);
            }
            Array.prototype.push.apply(args, arguments);
            return cb
        };
    }


    // //todo test1
    // let add = function () {
    //     let args = Array.prototype.slice.call(arguments);
    //     return args.reduce((prev,next)=>{
    //         return prev + next;
    //     },0)
    // }
    //
    // let sum = currying(add);
    // console.log(sum(1)(2)(3)())

}


{

    function curring(targetFunc) {
        let argsLen = targetFunc.length;
        return function func(...rest) {
            return rest.length < argsLen ? func.bind(null, ...rest) : targetFunc.apply(null, rest);
        }
    }

    function add(a,b,c,d) {
        return a + b + c + d;
    }

    // console.log('add', curring(add)(1, 2));

}


{


    var curring = function (fn) {

        let args = [].slice.call(arguments, 1);
        return function () {
            let newArgs = args.concat([].slice.call(arguments));
            return fn.apply(this, newArgs);
        }
    }

    function add(a, b) {
        return a + b
    }


    //todo 1
    let add1 = curring(add, 2);
    console.log('add1', add1(3));

}

{

    let sub_curring = function (fn) {
        let args = [].slice.call(arguments, 1);
        return function () {
            let newArgs = args.concat([].slice.apply(arguments));
            return fn.apply(this, newArgs);
        }
    };

    let curring = function (fn,len) {

        let fnLen = len || fn.length;
        let slice = Array.prototype.slice;

        return function() {

            if(arguments.length>=fnLen){
                return fn.apply(this, arguments);
            }else {
                let combine = [fn].concat(slice.call(arguments));
                return curring(sub_curring.apply(this, combine), fnLen - arguments);
            }
        }

    };

    //todo test
    // var fn = curring(function (a,b,c) {
    //     return [a, b, c];
    // })
    // console.log('fn', fn("a", "b", "c"));
    // console.log('fn1', fn("a", "b")("c"));


}


//
{

    function currying(fn,args) {

        let fnLen = fn.length;
        args = args || [];
        return function () {

            let _args = args.slice(0);
            _args.push(...[].slice.call(arguments));

            if(_args.length>=fnLen){
                return fn.apply(this, _args);
            }else {
                return currying.call(this, fn, _args);
            }

        };

    }
    var fn = currying(function (a,b,c) {
        return [a, b, c];
    })
    console.log('fn', fn("a","b","c"));
    console.log('fn1', fn("a","b")("c"));
    console.log('fn2', fn("a")("b")("c"));



}