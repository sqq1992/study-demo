
//函数作用域和快作用域

//1
{

    undefined = true;
    (function (undefined){

        var a
        if(a===undefined){
            // console.log('uaaa');
        }

    })()

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
x
}
