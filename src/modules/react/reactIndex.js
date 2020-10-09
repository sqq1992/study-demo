
import * as MiniReact from './miniReact'

const element = {
    type: "h1",
    props: {
        title: "foo",
        children: "Hello",
    },
}

//1
const container = document.getElementById("root2");

//2
const node = document.createElement(element.type);
node['title'] = element.props.title;

//3
const text = document.createTextNode("");
text["nodeValue"] = element.props.children;


//result
node.appendChild(text);
container.appendChild(node)