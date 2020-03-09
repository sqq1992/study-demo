let commonObj = require('./commonJs1');
import {counter, incCounter} from './commonJs1';

//commonjs
// console.log(commonObj.counter)    //3
// commonObj.incCounter()
// console.log(commonObj.counter)    //3

//modulesjs
console.log(counter)    //3
incCounter()
console.log(counter)    //4
