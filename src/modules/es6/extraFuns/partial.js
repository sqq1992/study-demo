
/**
 *  偏函数: 局部应用则是固定一个函数的一个或者多个参数，也就是将一个 n 元函数转换成一个 n - x 元函数。
 **/

//1
{

    function add(a,b) {
        return a + b;
    }

    // let add1 = add.bind(null, 1);
    // console.log('add1', add1(2));
}

//2
{

    function partial(fn) {
        let args = [].slice.call(arguments, 1);
        return function () {
            let newArgs = args.concat([].slice.call(arguments));
            return fn.apply(this, newArgs);
        };
    }

}