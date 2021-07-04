/**
 *  正则表达式位置匹配攻略
 */

//1.匹配开头和结尾
{
    //单行
    let str = "hello".replace(/^|$/g,'#')

    //多行
    let str2 = "I\\nlove\\njavascript".replace(/^|$/gm,'#')
}

//2 匹配\b和\B
{
    let str = "[JS] Lesson_01.mp4";

    let str2 = str.replace(/\b/g,'#')
    let str3 = str.replace(/\B/g,'#')

}

//3 匹配 ?=和?!
{

    let str = "hello";
    let str2 = str.replace(/(?=l)/g,'#')
    let str3 = str.replace(/(?!l)/g,'#')

}

//4 数字的千位分隔符表示法
{

    let str = "1234567890";

    let str2 = str.replace(/(?=\d{3}$)/g,',')
    let str3 = str.replace(/(?!^)(?=(\d{3})+$)/g,',')

    let str4 = "12345678 123456789";
    let str5 = str4.replace(/(?!\b)(?=(\d{3})+\b)/g,',')

}

//5 1888 转化为$ 1888.00
{
    let num = 1888;
    let num1 = num.toFixed(2).replace(/(?=(\d{3})+\b)/g, ',').replace(/^/, '$');

}

//6 密码
{
    let pass = /^[a-z0-9A-Z]{6,12}$/

}


