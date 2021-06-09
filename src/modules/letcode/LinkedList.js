
function Node(val) {
    this.val = val;
    this.next = null;
}

function ListNode(val) {
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

// var testList1 = new LList(1);
// testList1.insert(2, 1);
// testList1.insert(1, 2);
// testList1.insert(1, 1);
// console.log('11', testList1.head);


//92
{

    var reverseBetween = function(head, left, right) {

        let successor = null;
        let reverseN = function (head, n) {
            if(n===1){
                successor = head.next;
                return head;
            }
            let last = reverseN(head.next, n - 1);
            head.next.next = head;
            head.next = successor;

            return last;
        };

        if(left===1){
            return reverseN(head, right);
        }

        head.next = reverseBetween(head.next, left - 1, right - 1)
        return head;
    };

    // var reverseBetween = function(head, left, right) {
    //
    //     let tempFunc = (tempHead) => {
    //         let tempPre = null;
    //         let tempCur = tempHead;
    //
    //         while (tempCur!==null) {
    //             let tempNext = tempCur.next;
    //             tempCur.next = tempPre;
    //             tempPre = tempCur;
    //             tempCur = tempNext;
    //         }
    //     };
    //
    //     let tempNode = new ListNode(-1);
    //     tempNode.next = head;
    //
    //     let pre = tempNode;
    //     for(let i=0;i<left-1;i++) {
    //         pre = pre.next;
    //     }
    //
    //     let rightNode = pre;
    //     for(let i=0;i<right-left+1;i++) {
    //         rightNode = rightNode.next;
    //     }
    //
    //
    //     let leftNode = pre.next;
    //     let curr = rightNode.next;
    //
    //
    //     pre.next = null;
    //     rightNode.next = null;
    //
    //
    //     tempFunc(leftNode)
    //
    //
    //     pre.next = rightNode;
    //     leftNode.next = curr;
    //     return tempNode.next;
    // };
    //
    //
    //
    //
    // var reverseBetween2 = function(head, left, right) {
    //
    //     let dummyNode = new ListNode(-1);
    //     dummyNode.next = head;
    //
    //
    //     let preNode = dummyNode;
    //     for (let i=0;i<left-1;i++) {
    //         preNode = preNode.next;
    //     }
    //
    //     let curNode = preNode.next;
    //     for (let i=0;i<right-left;i++) {
    //         let next = curNode.next;
    //         curNode.next = next.next;
    //         next.next = preNode.next;
    //         preNode.next = next;
    //     }
    //
    //
    //     return dummyNode.next;
    //
    // };


    // var reverseBetween2 = function(head, left, right) {
    //
    //     let dummyNode = new ListNode(-1);
    //     dummyNode.next = head;
    //
    //     let pre = dummyNode;
    //     for (let i=0;i<left-1;i++) {
    //         pre = pre.next;
    //     }
    //
    //     let cur = pre.next;
    //     for (let i=0;i<right-left;i++) {
    //         let next = cur.next;
    //         cur.next = next.next;
    //         next.next = pre.next;
    //         pre.next = next;
    //     }
    //
    //     return dummyNode.next;
    // };


    //todo test
    let reverse1 = new NodeList([1, 2, 3, 4, 5, 6, 7, 8]);
    console.log('list1', reverse1);
    // console.log('list1-reverse', reverseBetween2(reverse1, 1, 5));

}


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

       if(!head) return null;
        let left = head;
        let right = head.next;

        while (right!==null){

            if(left.val!==right.val){
                left.next = right;
                left = left.next;
            }

            right = right.next;
        }

        left.next = null;
        return head;
    };

}


//206
{

    var reverseList = function(head) {

        let prev = null;
        let cur = head;
        while (cur!==null){
            let next = cur.next;

            cur.next = prev;
            prev = cur;
            cur = next;
        }

        return prev
    };


    //todo test
    // let list1 = new NodeList([1, 2, 3, 4, 5]);
    // console.log('list1', list1);
    // console.log('list1-reverse', reverseList(list1));

}

//206-2
{

    var reverseList = function(head) {
        if(head===null || head.next===null){
            return head;
        }
        let last = reverseList(head.next);
        head.next.next = head;
        head.next = null;

        return last;
    };

    var reverseList = function(head,n) {

        let successor = null;

        let tempFunc = (head,n) => {
            if(n===1){
                successor = head.next;
                return head;
            }

            let last = tempFunc(head.next, n - 1);
            head.next.next = head;
            head.next = successor;
            return last;
        };


        return tempFunc(head, n);
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

        let fast = head;
        let slow = head;

        while (fast!==null && fast.next!==null){

            fast = fast.next.next;
            slow = slow.next;

            if(fast===slow) return true;
        }

        return false;
    };

    // var hasCycle = function(head) {
    //
    //     if(!head){
    //         return false;
    //     }
    //
    //     let fast = head.next;
    //     let slow = head;
    //
    //     while (fast!==slow){
    //
    //         if(fast===null || fast.next===null){
    //             return false;
    //         }
    //
    //
    //         fast = fast.next.next;
    //         slow = slow.next;
    //     }
    //
    //
    //     return true;
    // };

}

//142
{

    var detectCycle = function(head) {

        let fast = head;
        let slow = head;

        while (fast !== null && fast.next !== null) {
            fast = fast.next.next;
            slow = slow.next;
            if (fast === slow) break;
        }
        if (fast == null || fast.next == null) {
            return null;
        }

        slow = head;
        while (slow !== fast) {
            fast = fast.next;
            slow = slow.next;
        }
        return slow;

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

        let fast = head;
        let slow = head;

        while (fast!==null && fast.next!==null){
            fast = fast.next.next;
            slow = slow.next;
        }

        return slow;
    };


}

//19
{


    var removeNthFromEnd = function (head, n) {

        let fast = head;
        let slow = head;
        while (n-->0){
            fast = fast.next;
        }

        while (fast!==null){
            fast = fast.next;
            slow = slow.next;
        }
        return slow;
    };

    // console.log('removeNthFromEnd', removeNthFromEnd(test3,1));
}

//222
{
    var countNodes = function(root) {

        if(!root){
            return 0;
        }

        let leftCounts = countNodes(root.left);
        let rightCounts = countNodes(root.right);

        return leftCounts + rightCounts + 1;
    };
}

//234
{

    var isPalindrome = function(head) {

        let left = head;
        let tempFunc = (right) => {
            if(right===null) return true;
            let res = tempFunc(right.next);


            res = res && (right.val === left.val);
            left = left.next;
            return res;
        };

        return tempFunc(head);
    };

}

//25
{

    var reverseKGroup = function(head, k) {

        let first = head;
        let last = head;
        for (let i=0;i<k;i++) {

            if(last===null) return head;
            last = last.next;
        }

        let reverseArea = function (first, last) {

            let pre = null;
            let cur = first;

            while (cur!==last){
                let next = cur.next;

                cur.next = pre;
                pre = cur;
                cur = next;
            }

            return pre;
        };


        let reverseHead = reverseArea(first, last);
        first.next = reverseKGroup(last, k);

        return reverseHead
    };

}