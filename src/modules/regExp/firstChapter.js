

//1.匹配 16 进制颜色值
//#fff
{

    let reg1 = /#([a-z0-9A-Z]{6} | [a-z0-9A-Z]{3})/g

}

//2.匹配时间 23:00 7:9
{
    let reg2 = /^(0?[0-9]|[1][0-9]|[2][0-3]):(0?[0-9]|[1-5][0-9])$/
}

//3 匹配日期  yyyy-mm-dd
{
    let reg2 = /^[0-9]{4}\-([0][0-9]|[1][0-2])\-(0[1-9]|[12][0-9]|3[01])$/
}

//4 匹配id  <div id="container" class="main"></div>
{
    let reg2 = /id="[^"]*"/
}


//第二章
{

    //匹配开头和结尾
    var str1 = "hell0".replace(/^|$/g,'#')
    // console.log('str1',str1)

    var str2 = "I\nlove\njavascript".replace(/^|$/gm,'#')
    // console.log('str2',str2)

    //单词边界
    var str3 = "[JS] Lesson_01.mp4".replace(/\b/g,'#')
    // console.log('str3',str3)

    var str4 = "[JS] Lesson_01.mp4".replace(/\B/g,'#')
    // console.log('str4',str4)

    //跟随字符
    var str5 = "hell0".replace(/(?=l)/g, '#');
    // console.log('str5',str5)

    var str6 = "hell0".replace(/(?!l)/g,'#')
    // console.log('str6',str6)


    //案例 数字弄出逗号
    var str6 = "123456789".replace(/(?!^)(?=(\d{3})+$)/g,',')
    // console.log('str6',str6)

    var str7 = "123456789 987654321".replace(/\B(?=(\d{3})+\b)/g,',')
    // console.log('str7',str7)

    //货币格式化
    var str8 = "1888.00".replace(/\B(?=(\d{3})+\b)/,',').replace(/^/, "$$ ");
    // console.log('str8',str8)

    //密码正则
    var str9 = /^(?=.*[0-9])$/

}


//第三章
{

    //分组
    var str1 = "2017-03-27".replace(/(\d{4})-(\d{2})-(\d{2})/,'$2/$3/$1');
    // console.log('str1', str1);

    //正则内反向引用
    var reg2 = /\d{4}(-|\/|\.)\d{2}\1\d{2}/;
    // console.log('11', reg2.test("2017-03.27"));

    //分次组后面的量词
    var str3 = "12345".match(/(\d)+/);
    // console.log('str3',str3)  // 分组匹配捕获到最后一个，是5

    //分次组后面的量词 针对正则
    var reg4 = /(\d)+ \1/;
    // console.log('str4', reg4.test("12345 1"));
    // console.log('str4', reg4.test("12345 5"));

    //非捕获括号
    var str5 = "ababa abbb ababab";
    // console.log('str5',str5.match(/(ab)+/));
    // console.log('str5',str5.match(/(?:ab)+/));

    //trim 模拟
    var str6 = "  foobar   ";
    // console.log('str6',str6)
    // console.log('str6',str6.replace(/^\s+|\s+$/g,''))
    // console.log('str6',str6.replace(/^\s*(.*?)\s*$/g,'$1'))

    //将每个单词的首字母转化为大写
    var str7 = "my name is sun";
    // console.log('str7',str7.replace(/(?:^|\s)\w/g,function (w){
    //     return w.toUpperCase();
    // }))

    //拖峰化
    var str8 = "-moz-transform";
    // console.log('str8', str8.replace(/[-_\s]+(.)?/g, function (match, w) {
    //     return w ? w.toUpperCase() : '';
    // }));

    //拖峰化的逆过程
    var str9 = "MozTransform";
    // console.log('str9', str9.replace(/([A-Z])/g, '-$1').toLowerCase())

    //html转义
    var escapeHtml = (str)=>{
        const regConfig = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;"
        };
        var regExp = new RegExp('[' + Object.keys(regConfig).join('') + "]", 'g');

        return str.replace(regExp,function (match){
            return regConfig[match]
        })

    }
    // console.log('str10', escapeHtml('<div>Blah blah blah</div>'));

    //html反转义
    var unescapeHtml = (str)=>{
        const regConfig = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'",
            "&#x2F;": "/"
        };

        return str.replace(/(\&[^;]+;)/g,function (match,key){
            if(key in regConfig){
                return regConfig[key]
            }
            return match
        })

    }
    // console.log('str11', unescapeHtml('&lt;div&gt;Blah blah blah&lt;/div&gt;'));

    //匹配成对标签
    var reg12 = /<([^>]+)>[\d\D]*<\/\1>/
    // console.log('reg12-1', reg12.test("<title id='sss'>regular expression</title>"));
    // console.log('reg12-2', reg12.test("<title>wrong!</p>"));



}


//5 正则表达式的拆分
{



}

//6 正则表达式的构建
{

    //浮点数
    var reg = /^[+-]?(\d+)(\.\d+)?$/


}

//7 正则表达式编程
{

    //search
    var regex = /\d/;
    console.log('str1', 'abc12'.search(regex));

    //test
    var regex2 = /\d/;
    console.log('str2', regex2.test('abc12'));

    //match
    var regex3 = /\d/;
    console.log('str3', 'abc12'.match(regex3));

    //exec
    var regex4 = /\d/;
    console.log('str4', regex4.exec('abc12'));


    //提取
    var regex5 = /^(\d{4})\D(\d{2})\D(\d{2})$/;
    console.log('str5',"2017-06-26".match(regex5));
    console.log('str5_2',regex5.exec("2017-06-26"));
    regex5.test("2017-06-26");
    console.log( RegExp.$1, RegExp.$2, RegExp.$3 );

    // match 返回结果的格式问题
    var regex6_1 = /\b(\d+)\b/;
    var regex6_2 = /\b(\d+)\b/g;
    console.log('str6_1',"2017.06.27".match(regex6_1))
    console.log('str6_2',"2017.06.27".match(regex6_2))

    // exec 比 match 更强大
    var regex7 = /\b(\d+)\b/;
    var str7 = "2017.06.27";
    // console.log( regex7.exec(str7) );
    // console.log( regex7.lastIndex);
    // console.log( regex7.exec(str7) );
    // console.log( regex7.lastIndex);
    // console.log( regex7.exec(str7) );
    // console.log( regex7.lastIndex);
    // console.log( regex7.exec(str7) );
    // console.log( regex7.lastIndex);

    // replace
    var regex8 = /(\d+),(\d+),(\d)/;
    console.log('str8', '2,3,5'.replace(regex8, '$3=$1+$2'));

    var str9 = "2,3,5".replace(/(\d+)/g, '$&$&$&');
    console.log('str9', str9);



}
