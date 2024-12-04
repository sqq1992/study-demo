
// 模式匹配做提取

//数组类型
type arr = [1, 2, 3];

//infer
type Case<T> = T extends infer U ? U : string;
type number2 = Case<42>;

//数组类型
type GetFirst<Arr extends unknown[]> = Arr extends [infer First, ...unknown[]] ? First : never;
type GetLast<Arr extends unknown[]> = Arr extends [...unknown[], infer Last] ? Last : never;
type arr1 = GetFirst<[1, 2, 3]>;
type arr2 = GetLast<[1, 2, 3]>;

type popArr<Arr extends unknown[]> = Arr extends [] ? [] : Arr extends [...infer Rest, unknown] ? Rest : never;
type arr3 = popArr<[1, 2, 3]>;

//字符串
type StarsWithResult<Str extends string, preFix extends string> = Str extends `${preFix}${string}` ? true : false;
type startWith1 = StarsWithResult<'sun Qiang and Qiang','xu'>

type ReplaceStr<
    Str extends string,
    From extends string,
    To extends string
> = Str extends `${infer Prefix}${From}${infer Suffix}`
    ? `${Prefix}${To}${Suffix}` : Str;
type replaceStr1 = ReplaceStr<'sun is ?','?','tiancai'>

type TrimStrRight<Str extends string> = Str extends `${infer Rest}${' '}` ? TrimStrRight<Rest> : Str;
type trimStrRight1 = TrimStrRight<'sun    '>;
type TrimStrLeft<Str extends string> = Str extends `${' '}${infer Rest}` ? TrimStrLeft<Rest> : Str;
type trimStrLeft1 = TrimStrLeft<'   sun'>;
type TrimStr<Str extends string> = TrimStrRight<TrimStrLeft<Str>>;
type trimStr1 = TrimStr<'  sss   '>;

//函数
type GetParameters<Func extends Function> = Func extends (...args: infer Args) => unknown ? Args : never;
type param1 = GetParameters<(name: string, age: number) => string>;

type GetReturnType<Func extends Function> = Func extends (...args: any[]) => infer ReturnType ? ReturnType : never;
type returnType1 = GetReturnType<() => 'dog'>;

//类
class Dong{
    name:string
    constructor() {
        this.name = 'dong';
    }
    hello(this:Dong){
        return 'hell I am' + this.name;
    }
}

const dong = new Dong();
dong.hello.call({x: 1});
const dong2 = new Dong();
dong2.hello();

type GetThisParameterType<T> = T extends (this: infer ThisType, ...args: any[]) => any ? ThisType : unknown;
type GetThisParameterTypeRes = GetThisParameterType<typeof dong.hello>;


//构造器
interface Person{
    name: string;
}
interface PersonConstructor{
    new(name: string): Person;
}

type GetInstanceType<ConstructorType extends new (...args: any) => any> = ConstructorType extends new (...args: any) => infer InstanceType ? InstanceType : any;
type getConstructorType = GetInstanceType<PersonConstructor>;
type GetInstanceParamsType<ConstructorType extends new (...args: any) => any> = ConstructorType extends new (...args: infer Params) => any ? Params : any;
type getConstructorParamsType = GetInstanceParamsType<PersonConstructor>;

//索引类型
type GetRefProps<Props> = 'ref' extends keyof Props
    ? Props extends { ref?: infer Value | unknown }
        ? Value
        : never
    : never;
