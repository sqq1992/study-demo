
/**
 *  类型判断
 **/


//1
{

    const classType = {};
    "Boolean Number String Function Array Date RegExp Object Error".split(" ").map((elem)=>{
        classType[`[object ${elem}]`] = elem.toLowerCase();
    })
    const toString = Object.prototype.toString;

    function type(value) {
        return classType[toString.call(value)] || 'object';
    }

}


//2 纯粹的对象"，就是该对象是通过 "{}" 或 "new Object" 创建的，该对象含有零个或者多个键值对
{



    function isPlainObject() {

    }

}