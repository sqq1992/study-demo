
//1
{

    function randomArr(arr,index,min,max) {
        let num = Math.max(min, Math.ceil(Math.random() * max));
        if (arr[arr.length - 1] === undefined) {
            if(!arr.includes(num)){
                arr[index++] = num;
            }
            return randomArr(arr, index, min, max);
        }

        return arr;
    }

}

//2
{
    function flattenDeep(arr) {

        let stack = [...arr];
        let result = [];

        while (stack.length){
            let tempVal = stack.pop();

            if(Array.isArray(tempVal)){
                stack.push(...tempVal);
            }else {
                result.push(tempVal);
            }
        }

        return result.reverse();
    }

}


{


    let arr = [1, 2, 3];
    let temp = arr.reduce((p,x)=>{
        return p.then(()=>{
            return new Promise((resolve)=>{
                setTimeout(() => {
                    resolve(console.log(x))
                }, 1000);
            })
        })
    },Promise.resolve())

}


//222
{

    var countNodes = function(root) {

        if(!root){
            return 0;
        }
        let leftNum = countNodes(root.left);
        let rightNum = countNodes(root.right);

        return leftNum + rightNum + 1;
    };


    var invertTree = function(root) {

        if(!root){
            return root;
        }

        let leftNode = root.left;
        let rightNode = root.right;
        invertTree(leftNode);
        invertTree(rightNode);
        root.left = rightNode;
        root.right = leftNode;

        return root;
    };

    var connect = function(root) {
        if(!root){
            return root;
        }

        let tempFunc = (left,right) => {
            if(left===null || right===null){
                return
            }

            left.next = right;
            tempFunc(left.left, left.right);
            tempFunc(right.left, right.right);
            tempFunc(left.right, right.left);
        };
        tempFunc(root.left, root.right);

        return root;
    };

    var flatten = function(root) {

        if(!root){
            return root;
        }
        flatten(root.left);
        flatten(root.right);

        let leftNode = root.left;
        let rightNode = root.right;
        root.left = null;
        root.right = leftNode;


        let tempRight = root;
        while (tempRight.right){
            tempRight = tempRight.right;
        }
        tempRight.right = rightNode;

    };

    var constructMaximumBinaryTree = function(nums) {

        if(!nums.length){
            return null;
        }

        let maxNum = Math.max(...nums);
        let index = nums.indexOf(maxNum);
        let root = new TreeNode(maxNum);
        let leftNode = constructMaximumBinaryTree(nums.slice(0, index));
        let rightNode = constructMaximumBinaryTree(nums.slice(index+1));
        root.left = leftNode;
        root.right = rightNode;

        return root;
    };

    var buildTree = function(preorder, inorder) {
        if(!preorder.length || !inorder.length){
            return null;
        }

        let head = preorder[0];
        let pos = inorder.indexOf(head);


        let preorderLeft = preorder.slice(1, pos + 1);
        let preorderRight = preorder.slice(pos + 1);
        let inorderLeft = inorder.slice(0, pos);
        let inorderRight = inorder.slice(pos + 1);
        let root = new TreeNode(head);
        let leftNode = buildTree(preorderLeft, inorderLeft);
        let rightNode = buildTree(preorderRight, inorderRight);
        root.left = leftNode;
        root.right = rightNode

        return root;
    };


    var buildTree = function(inorder, postorder) {

        if(!inorder.length || !postorder.length){
            return null;
        }

        let head = postorder.pop();
        let pos = inorder.indexOf(head);

        let inorderLeft = inorder.slice(0, pos);
        let inorderRight = inorder.slice(pos + 1);
        let postorderLeft = postorder.slice(0, pos);
        let postorderRight = postorder.slice(pos);
        let root = new TreeNode(head);
        let leftNode = buildTree(inorderLeft, postorderLeft);
        let rightNode = buildTree(inorderRight, postorderRight);
        root.left = leftNode;
        root.right = rightNode

        return root
    };


    var findDuplicateSubtrees = function(root) {

        let result = [];
        let record = {};

        let tempFunc = (root) => {
            if(!root){
                return "#";
            }

            let left = tempFunc(root.left);
            let right = tempFunc(root.right);

            let val = left + ',' + root.val + "," + right;

            if(!record[val]){
                record[val] = 1;
            }else {
                record[val]++;
            }
            if(record[val]===2){
                result.push(root);
            }

            return val;
        };
        tempFunc(root);

        return result;
    };


    var maxSumBST = function(root) {

        let maxNum = 0;
        let tempFunc = (root) => {

            if(!root) {
                return [1, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, 0]
            }

            let leftRes = tempFunc(root.left);
            let rightRes = tempFunc(root.right);

            let res = [];
            if(leftRes[0]===1 && rightRes[0]===1 && root.val>leftRes[2] && root.val<rightRes[1]){

                res[0] = 1;

                res[1] = Math.min(root.val, rightRes[1]);

                res[2] = Math.max(root.val, leftRes[2]);

                res[3] = leftRes[3] + rightRes[3] + root.val;

                maxNum = Math.max(maxNum, res[3]);
            }else {
                res[0] = 0;
            }


            return res;
        };
        tempFunc(root);
        return maxNum;

    };


    var kthSmallest = function(root, k) {

        let index = 0;
        let result;
        let tempFunc = (root) => {
            if(!root){
                return;
            }
            tempFunc(root.left);

            if(k===++index){
                result = root.val;
            }

            tempFunc(root.right);

        };

        tempFunc(root);
        return result;
    };


    var convertBST = function(root) {

        let sum = 0;
        let tempFunc = (root) => {
            if(!root){
                return 0;
            }

            tempFunc(root.right);

            sum += root.val;
            root.val = sum;

            tempFunc(root.left);

        };
        tempFunc(root);
        return root
    };

    var searchBST = function(root, val) {

        if(!root){
            return root;
        }

        while (root){

            if(root.val===val){
                return root;
            }else if(root.val>val){
                root = root.left;
            }else if(root.val<val){
                root = root.right;
            }
        }

        return null;
    };

    var isValidBST = function(root) {

        let tempFunc = (root,max,min) => {
            if(!root){
                return true;
            }

            let leftFlag = tempFunc(root.left, root.val, min);
            let rightFlag = tempFunc(root.right, max, root.val);

            let maxFlag = max !== null ? root.val < max : true;
            let minFlag = min !== null ? root.val > min : true;

            return leftFlag && rightFlag && maxFlag && minFlag;
        };

        return tempFunc(root, null, null);
    };


    var insertIntoBST = function(root, val) {
        if(!root){
            return root;
        }

        let currentNode = root;
        let newTreeNode = new TreeNode(val);
        while (true){

            if(val < currentNode.val){
                if(currentNode.left){
                    currentNode = currentNode.left;
                }else {
                    currentNode.left = newTreeNode;
                    break;
                }
            }else {
                if(currentNode.right){
                    currentNode = currentNode.right;
                }else {
                    currentNode.right = newTreeNode;
                    break;
                }
            }
        }


        return root;
    };

    var deleteNode = function(root, key) {
        if(!root){
            return root;
        }

        let findMin = (node) => {
            if(!node) return node;
            while (node && node.left){
                node = node.left;
            }

            return node;
        };

        let tempFunc = (root,key) => {

            if(!root){
                return root;
            }

            if(key === root.val){

                if(!root.left && !root.right){
                    return null;
                }

                if(root.left && !root.right){
                    return root.left;
                }

                if(!root.left && root.right){
                    return root.right;
                }

                let minNode = findMin(root.right);
                root.val = minNode.val;
                root.right = tempFunc(root.right, minNode.val);
                return root
            }else if(key > root.val){
                root.right = tempFunc(root.right, key);
                return root;
            }else {
                root.left = tempFunc(root.left, key);
                return root;
            }

        };


        return tempFunc(root, key);
    };


    let get = (preObj,key,defaultVal) => {

        let keys = key.replace(/\[(\d*)\]/g,'.$1').split('.');

        let result = preObj;
        for (let detailKey of keys){

            result = Object(result)[detailKey];
            if(result===undefined){
                return defaultVal;
            }
        }

        return result;
    };


    let merge = (source,other) => {

        let isObject = (value) => {
            let type = typeof value;
            return value !== null && (type === "object" || type === "function");
        };

        if(!isObject(source) || !isObject(other)){
            return other !== undefined ? source : other;
        }

        return Object.keys({
            ...source,
            ...other
        }).reduce((acc, key) => {
            acc[key] = merge(source[key],other[key])
            return acc;
        }, Array.isArray(source) ? [] : {});
    };

    var numTrees = function(n) {

        let memo = {};
        let tempFunc = (low,high) => {

            if(low>=high){
                return 1;
            }

            let key = low + high;
            if(memo[key]!==undefined) {
                return memo[key];
            }



            let res = 0;
            for (let i=low;i<=high;i++){

                let left = tempFunc(low, i - 1);
                let right = tempFunc(i + 1, high);

                res += left * right;
            }

            memo[key] = res;
            return res;
        };

        return tempFunc(1, n);
    };
    // console.log('numTrees', numTrees(3));

    var generateTrees = function(n) {

        let memo = {};
        let tempFunc = (low,high) => {

            let key = low + high;
            if(memo[key]!==undefined) {
                return memo[key];
            }

            if(low>=high){
                return [null];
            }

            let res = [];
            for (let i=low;i<=high;i++) {

                let lefts = tempFunc(low, i - 1);
                let rights = tempFunc(i + 1, high);

                for (let left of lefts){
                    for (let right of rights){

                        let node = new TreeNode(i);
                        node.left = left;
                        node.right = right;
                        res.push(node);

                    }
                }
            }

            memo[key] = res;
            return res;
        };

        return tempFunc(1, n);
    };

    function leftBound(arr,target) {
        let left = 0;
        let right = arr.length;

        while (left<right){
            let mid = left + Math.floor((right - left) / 2);
            if(arr[mid]===target){
                right = mid;
            }else if(arr[mid]>target){
                right = mid;
            }else if(arr[mid]<target){
                left = mid + 1;
            }
        }

        return left;
    }

    function rightBound(arr,target) {
        let left = 0;
        let right = arr.length;

        while (left<right){
            let mid = left + Math.floor((right - left) / 2);
            if(arr[mid]===target){
                left = mid + 1;
            }else if(arr[mid]>target){
                right = mid;
            }else if(arr[mid]<target){
                left = mid + 1;
            }
        }

        return left-1;

    }

    var detectCycle = function(head) {
        if(!head){
            return head;
        }

        let slow = head;
        let fast = head;

        while (fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
            if(slow===fast) break;
        }

        if(fast===null || fast.next===null){
            return null;
        }


        slow = head;
        while (slow!==fast){
            slow = slow.next;
            fast = fast.next;
        }
        return slow;
    };

    var middleNode = function(head) {

        if(!head){
            return head;
        }
        let slow = head;
        let fast = head;

        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }

        return slow;
    };

    var removeNthFromEnd = function(head, n) {

        let index = 0;
        let prev = new ListNode(0);
        prev.next = head;

        let tempFunc = (root,prev) => {
            if(!root){
                return root;
            }

            let next = tempFunc(root.next, root);
            if(n===++index) {
                prev.next = next;
            }

            return root;
        };
        tempFunc(head, prev);
        return prev.next;
    };

    var reverseString = function(s) {

        let start = 0;
        let end = s.length - 1;

        while (start<end){
            let temp = s[start];
            s[start] = s[end];
            s[end] = temp;
            start++;
            end--;
        }

        return s
    };

    var lengthOfLongestSubstring = function(s) {

        let left = 0;
        let right = 0;
        let len = s.length;
        let record = new Map();
        let maxLen = 0;
        while (right<len){

            let str = s[right];

            if(record.has(str)){
                let prevIndex = record.get(str);
                left = prevIndex < left ? left : prevIndex + 1;
            }

            maxLen = Math.max(maxLen, right - left + 1);
            record.set(str, right);
            right++;
        }

        return maxLen;
    };

    var findAnagrams = function(s, p) {

        let left = 0;
        let right = 0;
        let len = s.length;
        let pLen = p.length;
        let sRecord = new Map();
        let pRecord = new Map();
        let res = [];


        for (let str of p){
            pRecord.set(str, (pRecord.get(str) || 0) + 1);
        }

        let isEqual = function (sRecord,pRecord) {
            for (let [key,val] of pRecord){
                if(sRecord.get(key)!==val){
                    return false;
                }
            }
            return true;
        };

        while (right<len){

            let str = s[right];
            if(right-left+1>pLen) {
                sRecord.set(s[left], sRecord.get(s[left]) - 1);
                left++;
            }
            sRecord.set(str, (sRecord.get(str) || 0) + 1);

            if((right-left+1)===pLen && isEqual(sRecord,pRecord)){
                res.push(left);
            }

            right++;
        }

        return res;
    };

    var minWindow = function(s, t) {

        let left = 0;
        let right = 0;
        let len = s.length;
        let sRecord = new Map();
        let tRecord = new Map();
        let result = '';

        for (let str of t){
            tRecord.set(str, (tRecord.get(str) || 0) + 1);
        }

        let isEqual = (sRecord,tRecord) => {
            for (let [key,val] of tRecord){
                if((sRecord.get(key) || 0)<val){
                    return false;
                }
            }
            return true;
        };

        while (right<len){

            let str = s[right];
            sRecord.set(str, (sRecord.get(str) || 0) + 1);

            while (isEqual(sRecord,tRecord)){
                let tempResult = s.substring(left, right + 1);
                result = result === "" ? tempResult : result.length <= tempResult.length ? result : tempResult;
                sRecord.set(s[left], sRecord.get(s[left] - 1));
                left++;
            }


            right++;
        }

        return result;
    };

    // console.log('minWindow', minWindow("ADOBECODEBANC", "ABC"));


}