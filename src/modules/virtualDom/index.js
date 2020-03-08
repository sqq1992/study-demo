import {Element as el} from './element';

let test1 = {tag: 'div', props: {id: 'sun1'}, children: ['age']};
let test2 = {tag: 'h1', props: {id: 'sun2'}, children: ['sun', test1]};


let el1 = new el(test2);
document.body.appendChild(el1.render());