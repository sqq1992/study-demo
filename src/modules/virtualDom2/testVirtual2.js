
import Element from './element'
import diff from './diff'
import patch from './patch'


//sun test
let s2_1_1 = new Element('div', {class: 'sun2_1_1'}, ['c','d'], 'sun2-1-1');
let s2_1 = new Element('div', {class: 'sun2_1'}, ['a','b', s2_1_1], 'sun2-1');
let s1_1 = new Element('div', {class: 'sun1_1'}, [], 'sun1-1');
let s1 = new Element('div', {class: 'sun1', id: ''}, ['1', '2', '3', s2_1, 4, 5, 6], 'sun1');
let s2 = new Element('div', {class: 'sun2'}, ['1', '3', '2', s2_1], 'sun1');
let s1Render = s1.render();
let pathchs = diff(s1, s2);
console.log('pathchs', pathchs);
patch(s1Render, pathchs);



// let test6 = new Element('div', { class: 'my-div' }, ['test6'], 'test6')
// let test7 = new Element('div', { class: 'my-div' }, [test6, 'test7'], 'test7')
// let test77 = new Element('div', { class: 'my-div' }, ['test77'], 'test7')
// let test8 = new Element('div', { class: 'my-div' }, ['test8'], 'test8')
//
// let test3 = new Element(
//   'div',
//   { class: 'my-div' },
//   [test6, test7, 'test3'],
//   'test3'
// )
// let test33 = new Element(
//   'div',
//   { class: 'my-div' },
//   [test77, 'text33', test8],
//   'test3'
// )
//
// let test4 = new Element('div', { class: 'my-div' }, ['test4'])
// let test5 = new Element('ul', { class: 'my-div' }, ['test5'])
//
// let test1 = new Element('div', { class: 'my-div' }, [test4])
//
// let test2 = new Element('div', { id: '11' }, [test5, test4])
//
// let root = test1.render()
//
// let pathchs = diff(test1, test2)
// console.log(pathchs)
//
// setTimeout(() => {
//   console.log('开始更新')
//   patch(root, pathchs)
//   console.log('结束更新')
// }, 1000)
