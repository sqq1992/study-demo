/**
 *  模板方法
 **/

let Father = function () {

};
Father.prototype = {
    first: function () {
        console.log('father-first')
    },
    second: function () {
        throw new Error('子类必须重写second')
    },
    third: function () {
        throw new Error('子类必须重写third')
    },
    fourth: function () {
        throw new Error('子类必须重写fourth')
    },
    init: function () {
        this.first();
        this.second();
        this.third();
        this.fourth();
    }
};


//1
let Child1 = function () {
};
Child1.prototype = new Father();
Child1.prototype.second = function () {
    console.log('Child1-second')
};
Child1.prototype.third = function () {
    console.log('Child1-third')
};
Child1.prototype.fourth = function () {
    console.log('Child1-fourth')
};

let a1 = new Child1();
a1.init();

