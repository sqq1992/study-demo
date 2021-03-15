

//箭头函数
{

    let test1 = () => {
        let arr = Array.prototype.slice.call(arguments);
        console.log('arg', arr);
    };
    // test1(1, 2, 3);
    // new test1()
    // test1.prototype
}

// 尾调用优化
{


   function fib(n) {
        if(n<2){
            return n;
        }
       return fib(n - 1) + fib(n - 2);
   }

    // let date1 = +new Date();
    // fib(40);
    // console.log('time1', +new Date() - date1);

}

{
    "use strict"

    function fib(n) {
        return fibImpl(0, 1, n);
    }


    function fibImpl(a,b,n) {
        if(n===0){
            return a
        }
        return fibImpl(b,a+b,n-1)
    }

    let date1 = +new Date();
    fib(800);
    console.log('time1', +new Date() - date1);
}