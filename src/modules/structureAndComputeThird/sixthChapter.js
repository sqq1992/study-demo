
//链表章节

//单向链表节点
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

//双向链表节点
class DoubleNode extends Node{
    constructor(element) {
        super(element);
        this.prev = null;
    }
}



class LinkedList {
    constructor() {
        this.count = 0;
        this.head = null;
    }

    //添加元素
    push(element){
        let tempNode = new Node(element);
        if(this.head===null){
            this.head = tempNode;
        }else {
            let current = this.head;

            while (current.next !== null) {
                current = current.next;
            }
            current.next = tempNode;

        }
        this.count++;
    }

    remove(element){
        let index = this.indexOf(element);
        return this.removeAt(index);
    }

    //移除指定索引元素
    removeAt(index){

        if(index>=0 && index<this.count) {
            let current = this.head;
            if(index===0){
                this.head = current.next;
            }else {
                let previous
                for(let i=0;i<index;i++) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }

    getElementAt(index) {

        if(index>=0 && index<this.count) {
            let current = this.head;
            for(let i=0;i<index;i++) {
                current = current.next;
            }
            return current;
        }


        return undefined;
    }

    insert(element, index) {

        if (index >= 0 && index <= this.count) {
            let tempNode = new Node(element);
            if (index === 0) {
                let current = this.head;
                tempNode.next = current;
                this.head = tempNode;
            } else {
                let previous = this.getElementAt(index - 1);
                tempNode.next = previous.next;
                previous.next = tempNode;
            }
            this.count++;
            return true;
        }

    }

    indexOf(element){
        let current = this.head;

        for(let i=0,j=this.count;i<j && current!==null;i++) {
            if(element===current.element){
                return i;
            }
            current = current.next;
        }

        return -1;
    }

    size(){
        return this.count;
    }

    isEmpty(){
        return this.size() === 0;
    }

    getHead(){
        return this.head;
    }

    toString(){
        if(this.head===null){
            return '';
        }

        let result = `${this.head.element}`;
        let current = this.head.next;
        for (let i=0,j=this.count;i<j && current!==null;i++) {
            result = `${result},${current.element}`;
            current = current.next;
        }

        return result;
    }

}

class DoubleLinkedList extends LinkedList{
    constructor() {
        super();
        this.tail = null;
    }

    insert(element, index) {
        if(index>=0 && index<=this.count) {
            let tempNode = new DoubleNode(element);

            if(index===0){

                if(this.head===null){
                    this.head = tempNode;
                    this.tail = tempNode;
                }else {
                    tempNode.next = this.head;
                    this.head.prev = tempNode;
                    this.head = tempNode;
                }

            }else if (index === this.count) {

                let previous = this.tail;
                previous.next = tempNode;
                tempNode.prev = previous;
                this.tail = tempNode;

            }else {

                let previous = this.getElementAt(index - 1);
                let current = previous.next;

                previous.next = tempNode;
                tempNode.prev = previous;
                tempNode.next = current;
                current.prev = tempNode;


            }
            this.count++;
            return true;
        }
        return false;
    }

}


//
{
    let demoLinkedList = new LinkedList();
    demoLinkedList.push(1)
    demoLinkedList.push(2)
    demoLinkedList.push(3)
    demoLinkedList.push(4)
    demoLinkedList.push(5)

    //todo
    console.log('demoLinkedList', demoLinkedList);
    console.log('demoLinkedList', demoLinkedList.toString());
    // console.log('removeAt', demoLinkedList.removeAt(2));
    console.log('getElementAt', demoLinkedList.getElementAt(2));
    console.log('indexOf', demoLinkedList.indexOf(3));

}

