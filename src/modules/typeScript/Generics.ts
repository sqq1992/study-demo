

//1 基础泛型
function resturnItem<T>(para:T):T {
    return para;
}
console.log('resturnItem', resturnItem('1992'));

//1-1: 泛型类型
function test1<T>(arg:T[]):T[] {
    console.log(arg.length);
    return arg;
}


//2 多个类型参数
function swap<T, U>(arr: [T, U]): [U, T] {
    return [arr[1], arr[0]];
}
console.log('swap', swap(['sun', 24]));


//3 泛型变量
function getArrayLen<T>(arg:Array<T>) {
    console.log((arg as Array<any>).length);
    return arg;
}
console.log('getArrayLen', getArrayLen([1, 2, 3]));


//4 泛型接口
interface ReturnItem<T> {
    (para: T): T;
}
const returnItem2: ReturnItem<number> = para => para;
console.log('returnItem2', returnItem2(444));


//5 范行类
type stackParams = number | string;

class Stack<T extends stackParams> {
    private arr: T[] = [];
    public push(item:T){
        this.arr.push(item);
    }
    public pop(){
        this.arr.pop();
    }
}
const stack1 = new Stack<number>();


//6 泛型约束与索引类型
function getValue(obj: object, key: string) {
    return obj[key];
}

//6-1 obj中存在key的约束
function getValue2<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
getValue2({a:1},'a')

//6-2 obj中存在keys的约束
function getValue3<T extends object, K extends keyof T>(obj: T, key: K[]) {
    let result = {} as Record<K, any>
    key.forEach((elem)=>{
        result[elem] = obj[elem];
    })

    return result;
}
getValue3({a: 1, b: 2}, ['a']);


//测试列子 1  record
type testKeys1 = "pet" | "dog" | 'bird';
interface petInterface {
    name: string;
    age: number;
}
type testKeys1_1 = Record<testKeys1, petInterface>;

// todo case1  手动实现了 Partial 属性, 将属性值设置为可选
type manualPartial<T> = { [P in keyof T]?: T[P] };
type person1 = manualPartial<petInterface>;
let person1Instance: person1 = {
    name: '2'
};

// todo case2   T = {}
type LeetCode<T = {}> = {
    name:T
};
const testLeetCode: LeetCode<string> = {
    name:'32'
};

// todo case3 类型推导
let a = "lucifer"; // 我们没有给 a 声明类型， a 被推导为string
a.includes("1");

// a = 1;  无法推导为number

// todo case4 默认参数
type A<T = string> = Array<T>;
let aa: A = ['3'];


//todo typescript 工具类的实现
type sun1 = {
    name: string;
    age: number;
    sex?:Boolean
};

//1 Partial
type sunPartial<T> = { [P in keyof T]?: T[P] };
let testSun1:sunPartial<sun1> = {name: 'sun'}

//2 Required
type sunRequired<T> = { [P in keyof T]-?: T[P] };
// let testSun2:sunRequired<sun1> = {name: 'sun'}

//3