

//原型链继承
{

    function SuperType() {
        this.name = "sun";
        this.color = ["first","second"]
    }
    SuperType.prototype.getName = function () {
        return this.name;
    };


    function SubType() {
        this.age = 28;
    }
    SubType.prototype = new SuperType();
    SubType.prototype.getAge = function () {
        return this.age;
    };


    //todo test
    // let instance1 = new SubType();
    // instance1.color.push("third");
    // console.log('color-instance1', instance1.color);
    //
    // let instance2 = new SubType();
    // console.log('color-instance2', instance2.color);


}

//借用构造函数继承
{
    function SuperType(name) {
        this.name = name;
        this.color = ["first","second"]
    }
    function SubType(name) {
        SuperType.call(this, name);
    }

    //todo test
    // let instance1 = new SubType();
    // instance1.color.push("third");
    // console.log('color-instance1', instance1.color);
    //
    // let instance2 = new SubType();
    // console.log('color-instance2', instance2.color);
}

//组合继承
{
    function SuperType(name) {
        this.name = name;
        this.color = ["first","second"]
    }
    SuperType.prototype.getName = function () {
        return this.name;
    };

    function SubType(name) {
        SuperType.call(this, name);
    }
    SubType.prototype = new SuperType();

    //todo test
    // let instance1 = new SubType();
    // instance1.color.push("third");
    // console.log('color-instance1', instance1.color);
    //
    // let instance2 = new SubType();
    // console.log('color-instance2', instance2.color);

}

//原型式继承
{

    function object(o) {
        function f() {
        }
        f.prototype = o;
        return new f();
    }

    var person = {
        name: 'sun',
        color: ['first','second']
    }

    //todo test
    // let person1 = object(person);
    // person1.color.push("third");
    // console.log('color-person1', person1.color);
    //
    //
    // let person2 = object(person);
    // console.log('color-person2', person2.color);
    //
    // let person3 = Object.create(person);
    // console.log('color-person3', person3.color);

}


//new
{

    function myNew() {
        let obj = {};
        let fn = Array.prototype.shift.call(arguments);
        obj.__proto__ = fn.prototype;

        let resp = fn.apply(obj, arguments);
        return resp ? resp : obj;
    }

    //todo test1
    // function SuberTYpe(name) {
    //     this.name = name;
    // }
    //
    // let instance1 = myNew(SuberTYpe, 'sun1');
    // console.log('instance1', instance1);
    // console.log('instance1-2', instance1 instanceof SuberTYpe);
    //


}

// instanceOf
{

    function myInstanceOf(instanceOfObj,constructorFun) {
        let proto = constructorFun.prototype;
        let __proto = instanceOfObj.__proto__;

        while (__proto){
            if(__proto===proto){
                return true;
            }
            __proto = __proto.__proto__;
        }

        return true;
    }

}

// Object.is和===的区别
{

    function is(x, y) {

        if (x === y) {
            return x !== 0 || y !== 0 || 1 / x === 1 / y;
        } else {
            return x !== x && y !== y;
        }

    }

}

