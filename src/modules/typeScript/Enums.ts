
//枚举默认是从0开始的
enum Direction {
    Up,
    Down,
    Left,
    Right
}

//正向枚举
console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);

//反向枚举
console.log(Direction[0]);
console.log(Direction[1]);
console.log(Direction[2]);
console.log(Direction[3]);

//常量枚举
const enum constDirection {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}
console.log('constDirection', constDirection.Up);


//枚举成员类型
enum direction3 {
    Up,
    Down,
    Left,
    Right
}
console.log('equal', 0 === direction3.Up);
type c = 0;
declare let b: c;
b = direction3.Up;


//联合枚举类型
enum direction4 {
    Up,
    Down,
    Left,
    Right
}
declare let a1: direction4; //只能归到direction4中
enum Animal {
    Dog,
    Cat
}
a1 = direction4.Down;


//枚举合并
enum direction5 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}
enum direction5 {
    Center = 1,
}
console.log('direction5', direction5);
