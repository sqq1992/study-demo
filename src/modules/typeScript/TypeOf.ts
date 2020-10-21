

//类型运算主题

//1. 集合运算

type Type1 = "a" | "b";
type Type2 = "b" | "c";
type Type3 = Type1 & Type2;
type Type4 = Type1 | Type2;

//2. 索引签名
interface props {
    [key: string]: number;
}
const test1: props = {a: 2};

//3. 类型键入
type User = {
    userId: string
    friendList: {
        fristName: string
        lastName: string
    }[]
}
type userIdType = User['userId'];


//4. typeof value
let str1 = "fooooo";
type type1 = typeof str1;

//5 keyof
type User2 = {
    id: string;
    name: string;
};

type UserKeys = keyof User2;
