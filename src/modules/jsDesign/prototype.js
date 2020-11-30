/**
 *  原型模式
 **/

//手动构建一个new function

function person(name) {
    this.name = name;
}
person.prototype.show = function () {
    console.log('show', this.name);
};

var objectFactor = function () {
    let obj = new Object();
    let constructor = [].shift.apply(arguments);
    obj.__proto__ = constructor.prototype;
    let ret = constructor.apply(obj, arguments);

    return typeof ret === "object" ? ret : obj;
};


//todo
let a1 = objectFactor(person, 'sun1992');
a1.show();


