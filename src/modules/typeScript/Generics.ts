

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