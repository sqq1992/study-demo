
//1 类
class Animal {
    name:string;        //默认为public
    private age:number;     //内部使用
    protected sex:string;   //只有子类可以读
    readonly profession:string; //只读

    static myBoss: string = "tiancai";  //静态属性
    constructor(name:string) {
        this.name = name;
        this.age = 24;
        this.sex = "man";
        this.profession = "engineer";
    }
    run(){
        return `${this.name} is my`;
    }
}

const snake = new Animal('sun1992');
// console.log('snake', snake.run());
// console.log('static',Animal.myBoss);

class Dog extends Animal{
    bark(){
        return `${this.name} is barking ${this.sex}`;
    }
}



//2 接口
interface Cart {
    switchRadio();
}
interface Battery {
    checkBattery();
}
class CellPhone implements Cart{
    switchRadio(){

    }
}
class BigPhone implements Cart, Battery{
    switchRadio(){

    }
    checkBattery(){

    }
}
