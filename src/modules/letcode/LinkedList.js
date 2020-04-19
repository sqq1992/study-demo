
function Node(val) {
    this.val = val;
    this.next = null;
}


class NodeList {
    constructor(arr) {
        let head = new Node(arr.shift());

        let next = head;
        arr.forEach((elem)=>{
            next.next = new Node(elem);
            next = next.next;
        })

        return head;
    }
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


//148
{
    var sortList = function(head) {

        let swap = function (nowObj, previousObj) {
            let tempVal = previousObj.val;
            previousObj.val = nowObj.val;
            nowObj.val = tempVal;
        };

        let partion = function (begin) {

            let val = begin.val;
            let p = begin;
            let q = begin.next;

            while (q!==null){

                if(q.val<val){
                    p = p.next;
                    swap(q, p);
                }

                q = q.next;
            }
            swap(p, begin);
            return p;
        };

        let tempSort = function (begin, end = null) {

            if (begin !== end) {
                let part = partion(begin);
                tempSort(begin, part);
                tempSort(part.next, end);
            }

        };

        tempSort(head);

        return head;
    };
}


//141
{
    var hasCycle = function(head) {

        if(!head){
            return false;
        }

        let fast = head.next;
        let slow = head;

        while (fast!==slow){

            if(fast===null || fast.next===null){
                return false;
            }


            fast = fast.next.next;
            slow = slow.next;
        }


        return true;
    };

}


//142
{

    var detectCycle = function(head) {

        //1
        // let record = new Map();
        // let tempNode = head;
        //
        // while (tempNode!==null){
        //
        //     if(record.get(tempNode)){
        //
        //         return tempNode;
        //
        //     }else {
        //         record.set(tempNode, true);
        //     }
        //
        //     tempNode = tempNode.next;
        // }
        //
        // return null;


        //2
        // let slow = head;
        // let fast = head.next;
        //
        // while (slow!==fast){
        //
        //
        //     if(fast===null || fast.next===null){
        //         return null;
        //     }else if(slow===fast){
        //         return slow;
        //     }
        //
        //     slow = slow.next;
        //     fast = fast.next;
        //
        //
        // }
        //
        //
        // return null
    };


}



//86
{

    var partition = function(head, x) {

        let before_head = new ListNode(0);
        let beforeHead = before_head;
        let after_head = new ListNode(0);
        let afterHead = after_head;


        while (head!==null){

            if(head.val<x){
                beforeHead.next = head;
                beforeHead = beforeHead.next;
            }else {
                afterHead.next = head;
                afterHead = afterHead.next;
            }

            head = head.next;
        }

        afterHead.next = null;
        beforeHead.next = after_head.next;
        before_head = before_head.next;

        return before_head;
    };



}


//1019
{

    var nextLargerNodes = function(head) {

        //1
        // let q = head;
        // let result = [];
        // while (q!==null){
        //     let tempNext = q.next;
        //     let tempVal = 0;
        //     while (tempNext !== null){
        //         if(tempNext.val>q.val){
        //             tempVal = tempNext.val;
        //             break;
        //         }
        //         tempNext = tempNext.next;
        //     }
        //     result.push(tempVal);
        //     q = q.next;
        // }
        //
        // return result;

        //-------------------------->
        //2
        let stack = [];
        let count = 0;
        let res = [];


        while (head!==null){

            while (stack.length && stack[stack.length-1].val<head.val){
                let tempObj = stack.pop();
                res[tempObj.key] = head.val;
            }
            stack.push({
                key: count,
                val: head.val
            });
            count++;
            head = head.next;
        }

        for(let i=0,j=stack.length;i<j;i++) {
            res[stack[i].key] = 0;
        }
        return res;

    };

    let test2 = new NodeList([2, 1, 5]);
    console.log('nextLargerNodes', nextLargerNodes(test2));

}

//876
{

    var middleNode = function(head) {

        // 1
        // let arr = [];
        // while (head!==null){
        //     arr.push(head);
        //     head = head.next;
        // }
        // let len = arr.length;
        //
        // return arr[Math.floor(len / 2)];


        //2
        let slow = head;
        let fast = head;

        while (fast && fast.next!==null){

            slow = slow.next;
            fast = fast.next.next;

        }


        return slow;
    };




}

