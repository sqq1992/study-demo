
interface Person {
    readonly parent: string;    //只读属性
    name:string;
    age: number;
    sex?: string;       //可有可无属性
}

let person: Person = {
    parent:'jin',
    name: 'sun1992',
    age: 24,
};
