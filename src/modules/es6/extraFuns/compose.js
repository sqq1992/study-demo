
/**
 *  组合模式
 **/

{

    var compose = function (...fns) {
        return fns.reduce((a,b)=>{
            return (...args)=>{
                return a(b(...args));
            }
        })
    };

    function fn1(a) {
        console.log('fn1: ', a);
        return a+1
    }

    function fn2(a) {
        console.log('fn2: ', a);
        return a+1
    }

    function fn3(a) {
        console.log('fn3: ', a);
        return a+1
    }


    console.log('compose', compose(fn1, fn2, fn3)(1));

}