


{
    //自定义1、var s1 = "get-element-by-id"; 给定这样一个连字符串，
    // 写一个function转换为驼峰命名法形式的字符串 getElementById

    var firstQuestion = function (str) {
        return str.replace(/\-(\w)/g, function (a, b, c) {
            return b.toLocaleUpperCase();
        });
    };
    console.log('firstQuestion', firstQuestion('get-element-by-id'));


    //自定义2、判断字符串是否包含数字


    //自定义3、判断电话号码


    //自定义6、JS实现千位分隔符
}


//459
{
    var repeatedSubstringPattern = function(s) {
        let reg = /^(\w+)\1+$/;
        return reg.test(s);
    };
}
