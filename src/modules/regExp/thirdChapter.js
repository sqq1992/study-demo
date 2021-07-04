/**
 *  正则表达式括号的作用
 **/

//1
{

    var reg = /(ab)+/g
    var str = "ababa abbb ababab";


}


//2
{
    var reg = /(1)(2)(#)\3+/
    var str = "12######";
}


//3 字符串 trim 方法模拟
{
    var reg = /^\s+|\s+$/g;
}

//4 将每个单词的首字母转换为大写
{

    function f1(str) {
        let reg = /(?:^|\s)\w/g
        return str.replace(reg,function (word) {
            return word.toUpperCase();
        })
    }
}

//5 驼峰化
{
    function f1(str) {
        let reg = /[-_\s]+(.)?/g
        return str.replace(reg,function (match,c1) {
            return c1 ? c1.toUpperCase() : '';
        })
    }
}


//6 将HTML特殊字符转换成等值的实体
{

    function f1(str) {
        let escapeChars = {
            '<' : 'lt',
            '>' : 'gt',
            '"' : 'quot',
            '&' : 'amp',
            '\'' : '#39'
        };
        let reg = new RegExp(`[${Object.keys(escapeChars).join('')}]`,'g')
        return str.replace(reg,function (match) {
            return '&' + escapeChars[match] + ';';
        })
    }

}

//7 匹配成对标签
{
    let reg = /<([^>]+)>[\d\D]*<\/\1>/

}

//test
{



}