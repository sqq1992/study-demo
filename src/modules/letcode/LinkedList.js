
function Node(val) {
    this.val = val;
    this.next = null;
}

function LList(val) {
    this.head = new Node(val);
}
LList.prototype = {
    insert:function (newElement,item) {
        let newNode = new Node(newElement);
        let current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    },
    find:function (item) {
        let current = this.head;
        let resultNode;
        while (current){
            if(current.val===item){
                resultNode = current;
            }
            current = current.next;
        }
        return resultNode;
    }
};

var testList1 = new LList(1);
testList1.insert(2, 1);
testList1.insert(1, 2);
testList1.insert(1, 1);
console.log('11', testList1.head);

//237
{


    var deleteNode = function(node) {

        node.val = node.next.val;
        node.next = node.next.next;


    };


}


//83
{
    var deleteDuplicates = function(head) {

        if(head == null) {
            return head
        }
        let headItem = head
        while(headItem.next != null) {
            if(headItem.val == headItem.next.val) {
                headItem.next = headItem.next.next
            } else {
                headItem = headItem.next
            }
        }
        return head
    };

}


//206
{

    var reverseList = function(head) {

        let prev = null;
        let curr = head;
        while (curr!==null){
            let tempNext = curr.next;
            curr.next = prev;
            prev = curr;
            curr = tempNext;
        }

        return prev;
    };

}
