

{

    function Person(name) {
        this.name = name
    }
    Person.prototype.sayName = function () {
        console.log('name', this.name);
    };

    //todo test1
    // let person1 = new Person('sun');
    // let person2 = new Person('sun2');
    // console.log('11', person1.sayName === person2.sayName);


}


//盗用构造函数
{


    function SuperType() {
        this.colors = ['red', 'blue', 'green'];
    }


    function SubType() {
        SuperType.call(this);
    }


    //test1
    // let instance1 = new SubType();
    // instance1.colors.push('black');
    // console.log(instance1.colors);
    //
    // let instance2 = new SubType();
    // console.log(instance2.colors);

}

//组合继承
{

    function SuperType(name) {
        this.colors = ['red', 'blue', 'green'];
        this.name = name;
    }
    SuperType.prototype.sayName = function () {
        return this.name;
    };


    function SubType(name) {
        SuperType.call(this, name);
    }
    SubType.prototype = new SuperType();


    //todo test1
    // let instance1 = new SubType('sun1');
    // instance1.sayName();

}

//原型试继承
{

    function object(o) {
        function F() {
        }
        F.prototype = o;
        return new F();
    }


    //todo test1
    // let Person = {
    //     name:'sun',
    //     color: ['red', 'blue', 'green']
    // };
    //
    // let person1 = object(Person);
    // person1.color.push('yellow');
    // person1.name = "sun1";
    // person1.aa = "sun2";
    //
    // let person2 = object(Person);
    // console.log('person2', person2.color);
    // console.log('person2', person2.name);
    // console.log('person2', person2.aa);

}

//寄生试继承
{

    function object(o) {
        function F() {
        }
        F.prototype = o;
        return new F();
    }

    function CreateAnotherObj(origin) {
        let clone = object(origin);
        clone.sayHi = function () {
            console.log('HI')
        };
        return clone;
    }


}

// 寄生试组合继承
{

    function object(o) {
        function F() {
        }
        F.prototype = o;
        return new F();
    }

    function inheritPrototype(subType,superType) {
        let prototype = object(superType.prototype);
        prototype.constructor = superType;
        subType.prototype = prototype;
    }


}