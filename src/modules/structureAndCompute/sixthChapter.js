

//单向链表
function Node(element) {
    this.element = element;
    this.next = null;
}

function LList() {
    this.head = new Node('head');
}

LList.prototype = {
    find: function (item) {
        let current = this.head;
        while ( current.element!==item){
            current = current.next;
        }

        return current;
    },
    insert: function (newElement, item) {
        let newNode = new Node(newElement);
        let current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    },

    remove:function(item){
        let removeNode = this.find(item);
        let previousNode = this._findPrevious(item);
        previousNode.next = removeNode.next;

    },

    _findPrevious:function(item){
        let current = this.head;
        while (current.next!==null && current.next.element!==item){
            current = current.next;
        }

        return current;
    },

    show:function () {
        var current = this.head;

        while (current!==null){
            console.log(current.element + ' \n');
            current = current.next;
        }
    }
};



{

    // var testList = new LList();
    // testList.insert(1,'head');
    // testList.insert(2, 1);
    // testList.insert(3, 2);
    // testList.insert(4, 3);
    // testList.show();
    //
    // testList.remove(2);
    // testList.show();
}



//-----------------------------

//双向链表
function Node2(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
}
function LList2() {
    this.head = new Node2('head');
}
LList2.prototype = {
    find:function (item) {
        let current = this.head;
        while (current.element !== item) {
            current = current.next;
        }
        return current;
    },

    insert:function (newElement,item) {
        let newNode = new Node2(newElement);
        let current = this.find(item);
        newNode.next = current.next;
        newNode.previous = current;
        current.next = newNode;
    },

    remove: function (item) {
        var currentNode = this.find(item);
        if(currentNode!==null){
            currentNode.previous.next = currentNode.next;
            currentNode.next.previous = currentNode.previous;
            currentNode.next = null;
            currentNode.previous = null;
        }

    },

    findLast:function(){
        let current = this.head;
        while (current.next!==null){
            current = current.next;
        }
        return current;
    },


    show: function () {
        var current = this.head;
        while (current!==null){
            console.log(current.element + ' \n');
            current = current.next;
        }
    },

    showReverse: function () {
        let current = this.findLast();
        while (current!==null){
            console.log(current.element + ' \n');
            current = current.previous;
        }

    }

};


{

    var testList2 = new LList2();
    testList2.insert(1, 'head');
    testList2.insert(2, 1);
    testList2.insert(3, 2);
    testList2.insert(4, 3);
    testList2.showReverse();

    testList2.remove(2);
    testList2.showReverse();
}






