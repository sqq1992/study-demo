/**
 * 静态编译
 * ES6 模块中就不再是生成输出对象的拷贝，而是动态关联模块中的值
 *
 *  import 命令会被 JavaScript 引擎静态分析，优先于模块内的其他内容执行。
    export 命令会有变量声明提前的效果。
 */

//从第一条来看，在文件中的任何位置引入 import 模块都会被提前到文件顶部。

//todo 1
// console.log('a.js')
// import { foo } from './es6B';
// console.log(foo);
// setTimeout(() => {
//     console.log(foo);
//     import('./es6B').then(({ foo }) => {
//         console.log(foo);
//     });
// }, 1000);


//todo 2
// import { foo } from './es6B';
// console.log('a.js');
// export const bar = 1;
// export const bar2 = () => {
//     console.log('bar2');
// }
// export function bar3() {
//     console.log('bar3');
// }


//todo 3.模块循环依赖
// console.log('a starting')
// import {foo} from './es6B';
// console.log('in b, foo:', foo);
// export const bar = 2;
// console.log('a done');


//todo 4.动态的import()
const str = './es6B';
const flag = true;
if(flag) {
    import('./es6B').then(({foo}) => {
        console.log(foo);
    })
}
import(str).then(({foo}) => {
    console.log(foo);
})

