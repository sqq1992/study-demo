
let nextUnitOfWork = null
let wipRoot = null

function createTextElement(text) {
    return{
        type:"TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children: [],
        },
    }
}

function createDom(fiber) {
    const dom = fiber.type === "TEXT_ELEMENT" ? document.createTextNode("") : document.createElement(fiber.type);

    const isProperty = (key) => key !== "children";

    Object.keys(fiber.props)
        .filter(isProperty)
        .forEach((key)=>{
            dom[key] = fiber.props[key];
        })


    return dom
}

function commitRoot() {
    commitWork(wipRoot.child)
    wipRoot = null
}

function commitWork(fiber) {
    if (!fiber) {
        return
    }
    const domParent = fiber.parent.dom
    domParent.appendChild(fiber.dom)
    commitWork(fiber.child)
    commitWork(fiber.sibling)
}


function workLoop(deadline) {
    let shouldYield = false
    while (nextUnitOfWork && !shouldYield) {
        nextUnitOfWork = performUnitOfWork(
            nextUnitOfWork
        )
        shouldYield = deadline.timeRemaining() < 1
    }


    //todo 直到没有下一个子任务, 将整个fiber插入到dom节点中去
    if (!nextUnitOfWork && wipRoot) {
        commitRoot()
    }

    requestIdleCallback(workLoop)
}

function performUnitOfWork(fiber) {

    //构建dom节点
    if(!fiber.dom){
        fiber.dom = createDom(fiber);
    }

    // //将节点插入到父元素中去
    // if(fiber.parent){
    //     fiber.parent.dom.appendChild(fiber.dom)
    // }


    //todo 为子元素创建fiber
    let elements = fiber.props.children;
    let previousFiber = null;

    for(let i=0,j=elements.length;i<j;i++) {
        let currentElement = elements[i];

        let newFiber = {
            type:currentElement.type,
            props: currentElement.props,
            parent:fiber,
            dom: null
        };

        if(i===0){
            fiber.child = newFiber;
        }else {
            previousFiber.sibling = newFiber;
        }

        previousFiber = newFiber;
    }


    //todo 返回下一个子任务
    if(fiber.child){
        return fiber.child;
    }

    let nextFiber = fiber;
    while (nextFiber){
        if (nextFiber.sibling) {
            return nextFiber.sibling
        }
        nextFiber = nextFiber.parent
    }

}

export function createElement(type,props,...children) {
    return{
        type,
        props:{
            ...props,
            children:children.map((child)=>{
                return typeof child === "object"
                    ? child
                    : createTextElement(child)
            })
        }
    }
}

export function render(element, container) {

    wipRoot = {
        dom: container,
        props: {
            children: [element],
        },
    }

    nextUnitOfWork = wipRoot

    requestIdleCallback(workLoop)
}

