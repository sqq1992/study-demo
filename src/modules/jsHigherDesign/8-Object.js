
// Object.values(), Object.entries()
{

    const o = {
        name: "sun",
        age: 24
    };
    // console.log('values', Object.values(o));
    // console.log('entries', Object.entries(o));

}

//继承
{

    //1 借助call
    // function Parent1(){
    //     this.name = 'parent1';
    //     this.say = function () {
    //         console.log('name', this.name);
    //     };
    // }
    // function Child1(){
    //     Parent1.call(this);
    //     this.type = 'child1'
    // }
    // let child1 = new Child1()

    //2 借助原型链
    // function Parent2() {
    //     this.name = 'parent2';
    //     this.play = [1, 2, 3]
    // }
    // function Child2() {
    //     this.type = 'child2';
    // }
    // Child2.prototype = new Parent2();
    //
    // var s1 = new Child2();
    // var s2 = new Child2();
    // s1.play.push(4);
    // console.log(s1.play, s2.play);


    //3 组合继承的优化
    function Parent5 () {
        this.name = 'parent5';
        this.play = [1, 2, 3];
    }
    function Child5() {
        Parent5.call(this);
        this.type = 'child5';
    }
    Child5.prototype = Object.create(Parent5.prototype);
    Child5.prototype.constructor = Child5;

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


//迭代器与生成器方法
{

    class Person{
        constructor() {
            this.nicknames = ["sun", "sun1", "sun2"];
        }

        *[Symbol.iterator](){
            yield* this.nicknames.entries();
        }
    }

    //
    // let p = new Person();
    // for (let [idx,nickname] of p){
    //     console.log('nickname', nickname);
    // }


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
            for (let i=this.length-1;i>0;i--){
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
    // let a = new Bus();
    // a.first();
    // a.second();


}


