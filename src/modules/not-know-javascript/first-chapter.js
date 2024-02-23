
//作用域

//1
{

    //1
    // var b = 22;
    // eval('var b=3');
    // console.log('b',b);

    //2
    // function foo(str,a){
    //     eval(str);
    //     console.log(a,b);
    // }
    // var b = 2;
    // foo('var b=35;', 1);


}

//2
{

    // var obj = {
    //     a:1,
    //     b:2,
    //     c:3
    // }
    // with (obj){
    //     a = 2;
    //     b = 3;
    //     c = 4;
    // }
    // console.log('obj',obj)

}



//函数作用域和快作用域

//1
{

    // undefined = true;
    // (function (undefined){
    //
    //     var a
    //     if(a===undefined){
    //         // console.log('uaaa');
    //     }
    //
    // })()

    // console.log('undefined',undefined);

}

//2
{

    try {
        undefined();
    }catch (err){

    }
    // console.log('err', err);


}

//3
{

    a = 2;
    var a;
    // console.log('a',a);
}
