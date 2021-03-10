
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


    //todo test1
    let add = function () {
        let args = Array.prototype.slice.call(arguments);
        return args.reduce((prev,next)=>{
            return prev + next;
        },0)
    }

    let sum = currying(add);
    console.log(sum(1)(2)(3)())

}