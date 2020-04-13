

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
