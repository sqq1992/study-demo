/**
 * typescript 最佳实践
 */


//1 只能支持函数签名加函数实现的方式重载

function add(a:number,b:number):number;
function add(a:string,b:string):string;
function add(a:any,b:any){
    if(typeof a === 'string'){
        return a + b + '!'
    }else{
        return a + b
    }
}

//2 避免使用装箱类型(String, Number, Boolean, Symbol, BigInt)
// const a = new String('ss');
// const b: string = a; // String无法赋值给string
// const c:String = '123' // string可以赋值给String


//3 多余属性检查(Excess Property Checking)的局限

// interface Point {
//     x: number;
//     y: number;
// }
// const point : Point = {
//     x:1,
//     y:2,
//     z:3 // 报错，多余的属性
// }


interface Point {
    x: number;
    y: number;
}
const tmp = {
    x:1,
    y:2,
    z:3,
    a:4
}
const point:Point= tmp; // 不报错


//4 尽可能对整个函数表达式进行类型标注
type Binary = (a: number, b: number) => number

const add2: Binary = (a, b) => a + b;
const delete2: Binary = (a, b) => a + b;


