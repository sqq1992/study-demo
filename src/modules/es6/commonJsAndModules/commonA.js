/**
 * 运行时加载
 * common.js输出的是值的拷贝, 如果你想要在 CommonJS 中动态获取模块中的值，那么就需要借助于函数延时执行的特性
 * @type {{foo: number}}
 *  CommonJS 模块中 require 引入模块的位置不同会对输出结果产生影响，并且会生成值的拷贝
    CommonJS 模块重复引入的模块并不会重复执行，再次获取模块只会获得之前获取到的模块的拷贝
 */

//todo 1
// var b = require('./commonB');
// console.log(b.foo);
// setTimeout(() => {
//     console.log(b.foo);
//     console.log(require('./commonB').foo);
// }, 1000);


//todo 2.模块循环依赖
console.log('a starting');
exports.done = false;
const b = require('./commonB');
console.log(module.paths)
console.log('in a, b.done =', b.done);
exports.done = true;
console.log('a done');




