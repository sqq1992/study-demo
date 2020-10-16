
import * as MiniReact from './miniReact'


/** @jsx MiniReact.createElement */
const element = (
    <div id="foo">
        <a>bar</a>
        <b >我的</b>
    </div>
)
console.log('element', element);

const container = document.getElementById("root2");

MiniReact.render(element, container);


















// const element = MiniReact.createElement(
//     "div",
//     {id:"foo"},
//     MiniReact.createElement("a",null,"bar"),
//     MiniReact.createElement("b")
// )








// const element = {
//     type: "h1",
//     props: {
//         title: "foo",
//         children: "Hello",
//     },
// }
//
// //1
// const container = document.getElementById("root2");
//
// //2
// const node = document.createElement(element.type);
// node['title'] = element.props.title;
//
// //3
// const text = document.createTextNode("");
// text["nodeValue"] = element.props.children;
//
//
// //result
// node.appendChild(text);
// container.appendChild(node)