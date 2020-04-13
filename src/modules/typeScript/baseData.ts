
//todo typescript的原始类型


// 普通类型值
const isLoading: boolean = true;



//没有任何类型, 当一个函数没有返回值时, 返回类型是void
function warnUser():void {
    console.log('This is my warning message');
}
warnUser();


// 只有null和undefined可以赋给void
const testNull: void = null;
const testUndefined: void = undefined;


// any类型
let notSure: any = 4;
notSure = "maybe";


//数组
const list1: Array<number> = [4, 3, 2, 1];
const List2: number[] = [4, 3, 2, 1];


//元组
let x: [string, number] = ['33', 33];


//对象
enum Direction {
    center = 1,
}
let tempVal: object;
tempVal = Direction;
tempVal = {};

