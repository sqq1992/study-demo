

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

// instanceOf
{

    function myInstanceOf(instanceOfObj,constructorFun) {
        let resultPrototype = constructorFun.prototype;
        let proto = instanceOfObj.__proto__;

        while (proto){
            if(proto===resultPrototype){
                return true;
            }
            proto = proto.__proto__;
        }

        return false;
    }

}