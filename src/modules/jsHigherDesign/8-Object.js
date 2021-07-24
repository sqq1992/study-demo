
// Object.values(), Object.entries()
{

    const o = {
        name: "sun",
        age: 24
    };
    console.log('values', Object.values(o));
    console.log('entries', Object.entries(o));


}


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


//class
{

    class Vehicle{
        constructor() {
            this.hasEngine = true;
        }
        static identity(){
            console.log('Vehicle');
        }
    }

    class Bus extends Vehicle{
        constructor() {

            super();
            console.log(this instanceof Vehicle);
            console.log(this);
        }
        static identity(){
            super.identity();
        }
    }


    //todo test
    // new Bus();
    // Bus.identity();

}

//抽象基类
{

    //抽象基类
    class Vehicle{
        constructor() {
            console.log(new.target);


            if(new.target===Vehicle){
                throw new Error('Vehicle cannot be installed');
            }

            if(!this.foo){
                throw new Error('foo');
            }

        }
    }

    //派生类
    class Bus extends Vehicle {
        foo(){}
    }

    class Van extends Vehicle {

    }

    //todo test
    // new Bus();
    // new Van();
    // new Vehicle();

}

// 继承内置类型
{

    class SuperArray extends Array{
        shuffle(){
            for(let i=this.length-1;i>0;i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [this[i], this[j]] = [this[j], this[i]];
            }
        }
    }


    // let a = new SuperArray(1, 2, 3, 4, 5);
    // a.shuffle();
    // console.log(a);

}

//类混入
{

    class Vehicle{}

    let FirstMin = (SuperClass) => {
        return class extends SuperClass{
            first(){
                console.log('first')
            }
        }
    };

    let SecondMin = (SuperClass) => {
        return class extends SuperClass{
            second(){
                console.log('second')
            }
        }
    };

    function Mix(BaseClass,...Mixins) {
        return Mixins.reduce((prev, next) => {
            return next(prev)
        }, BaseClass);
    }


    class Bus extends Mix(Vehicle, FirstMin, SecondMin) {

    }

    //todo test
    let a = new Bus();
    a.first();
    a.second();


}


