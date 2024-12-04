
//重新构造做变换

//1 数组类型的重新构造

//1.1 Push
type tuple = [1, 2, 3];
type push<Arr extends unknown[], Ele> = [...Arr, Ele];
type unshift<Arr extends unknown[],Ele> = [Ele, ...Arr];
type pushResult1 = push<[1, 2, 3], 4>;
type pushResult2 = unshift<[1, 2, 3], 0>;

type Zip<One extends unknown[], Second extends unknown[]> = One extends [infer OneFirst, infer OneSecond]
    ? Second extends [infer SecondOne, infer SecondSecond]
        ? [[OneFirst, SecondOne], [OneSecond, SecondSecond]]
        : []
    : [];
type Zip2<One extends unknown[],Second extends unknown[]> = One extends [infer OneFirst, ...infer OneRest]
    ? Second extends [infer SecondOne, ...infer SecondRest]
        ?[[OneFirst,SecondOne],...Zip2<OneRest,SecondRest>]
        :[]
    :[];
type zip1 = Zip<[1, 2], ['a', 'b']>;
type zip2 = Zip2<[1, 2, 3, 4, 5], ['a', 'b', 'c', 'd', 'e']>;

//2 字符串类型的重新构造
//2.1 CapitalizeStr
type CapitalizeStr<Str extends string> = Str extends `${infer first}${infer rest}`
    ?`${Uppercase<first>}${rest}`
    :string
type capitalizeStr1 = CapitalizeStr<'sun'>;

//2.2 CamelCase
type CamelCase<Str extends string> = Str extends `${infer left}_${infer right}${infer rest}`
    ?`${left}${Uppercase<right>}${CamelCase<rest>}`
    :Str

type camelCase1 = CamelCase<'dong_dong_dong'>;

//2.3 DropSubStr
type DropSubStr<Str extends string, SubStr extends string> = Str extends `${infer left}${SubStr}${infer Rest}`
    ? DropSubStr<`${left}${Rest}`, SubStr>
    : Str;
type dropSubStr1 = DropSubStr<'dong---','-'>

//3 函数类型的重新构造
//3.1 AppendArgument

