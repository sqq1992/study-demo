

//1
interface Person {
    name:string,
    age:number
}

const person = {} as Person

person.name = "sun";


//2 字面量类型守卫
type Foo = {
    name:'sun1992',
    age: 24;
};


//3 类型推断-数组类型
class Animal {}

class Bee extends Animal{}

class Lion extends Animal{}

class Extra {}

const List1:Animal[] = [new Bee(), new Lion()];

//4 类型推断-
window.onmousedown = function (event) {
    console.log(event.aaa)
}