
/**
 *  组合模式
 **/

//1
{

    var compose = function (...fns) {

        return fns.reduce((prev,next)=>{
            return function (...args) {
                return prev(next(...args));
            }
        })


    };

    var compose2 = function (...fns) {

        let start = fns.length - 1;

        return function () {
            let index = start;
            let result;
            while (index>=0){
                result = fns[index--].apply(this, arguments);
            }
            return result;
        };
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


    //todo 1
    console.log('compose', compose(fn1, fn2, fn3)(1));

    //todo 2
    // let com2 = compose2(fn1, fn2, fn3)("sun");

}

//2
{



}