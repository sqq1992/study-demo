
//作用域

//1
{

    var b = 22;
    eval('var b=3');
    console.log('b',b);

}

//2
{

    var obj = {
        a:1,
        b:2,
        c:3
    }
    with (obj){
        a = 2;
        b = 3;
        c = 4;
    }
    console.log('obj',obj)

}

