
//todo 1
// let foo = 1;
// setTimeout(() => {
//     foo = 2;
// }, 500);
//
// module.exports = {
//     foo: foo,
// };


//todo 2.模块循环依赖
console.log('b starting');
exports.done = false;
const a = require('./commonA');
console.log('in b, a.done =', a.done);
exports.done = true;
console.log('b done');

