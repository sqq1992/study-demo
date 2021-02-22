

// extends
type Diff2<T, U> = T extends U ? never : T;     // 找出T的差集
type Filter2<T, U> = T extends U ? T : never;   // 找出交集


type diff21 = Diff2<"a" | "b" | "c" | "d", "a" | "c" | "f">;
type filter21 = Filter2<"a" | "b" | "c" | "d", "a" | "c" | "f">;


// infer
type Func<T> = T extends () => infer R ? R : boolean;
type ParamType<T> = T extends (param: infer P) => any ? P : T;

