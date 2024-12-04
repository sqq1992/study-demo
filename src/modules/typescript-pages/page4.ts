
//typescript类型系统支持哪些类型和哪些类型运算

//条件：extends ? :
type isTwo<T> = T extends 2 ? true : false;
type res = isTwo<1>;
type res2 = isTwo<2>;

//infer
type First<Tuple extends unknown[]> = Tuple extends [infer T, ...infer R] ? R : never;
type first = First<[1,2,3]>

//联合
type Union = 1 | 2 | 3;

//交叉
type ObjType = {a: number } & {c: boolean};
let a: ObjType = {a: 1, c: true};

//映射类型
type MapType<T> = {
    [Key in keyof T]: T[Key]
}
type res3 = MapType<{ a: 1, b: 2 }>;
let a2:res3 = {
    a:1,
    b: 2,
}
