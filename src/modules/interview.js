
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


    // let arr = [1, 2, 3];
    // let temp = arr.reduce((p,x)=>{
    //     return p.then(()=>{
    //         return new Promise((resolve)=>{
    //             setTimeout(() => {
    //                 resolve(console.log(x))
    //             }, 1000);
    //         })
    //     })
    // },Promise.resolve())

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

    var minDepth = function(root) {
        if(!root) return 0;

        let queue = [root];
        let depth = 0;

        while (queue.length){

            for (let i=0,j=queue.length;i<j;i++) {
                let node = queue.shift();
                if(!node.left && !node.right) return depth + 1;
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
            depth++;
        }

        return depth;
    };


    var canPartitionKSubsets = function(nums, k) {

        let sum = nums.reduce((prev,next)=>{
            return prev + next;
        },0)
        if(sum%k!==0) return false;

        let numsLen = nums.length;
        let target = sum / k;
        let bucket = new Array(k).fill(0);
        let bucketLen = bucket.length;

        let tempFunc = (index) => {

            if(index===numsLen){
                for (let i=0,j=bucket;i<j;i++) {
                    if(bucket[i]!==target){
                        return false;
                    }
                }
                return true;
            }

            for (let i=0;i<bucketLen;i++) {

                if(bucket[i]+nums[index]>target){
                    continue;
                }

                bucket[i] += nums[index];

                if(tempFunc(index+1)){
                    return true;
                }

                bucket[i] -= nums[index];

            }

            return false;
        };

        return tempFunc(0);
    };

    var subsets = function(nums) {

        let res = [];
        let tempFunc = (start,arr) => {

            res.push(arr.slice());

            for (let i=start,j=nums.length;i<j;i++) {

                if(arr.includes(nums[i])){
                    continue;
                }
                arr.push(nums[i]);
                tempFunc(i + 1, arr);
                arr.pop();

            }

        };
        tempFunc(0,[]);
        return res;
    };


    var combine = function(n, k) {
        let res = [];
        let tempFunc = (start,arr) => {

            if(arr.length===k){
                res.push(arr.slice());
                return;
            }

            for (let i=start;i<=n;i++) {

                arr.push(i);
                tempFunc(i + 1, arr);
                arr.pop();

            }

        };
        tempFunc(1,[]);
        return res;
    };

    var generateParenthesis = function(n) {
        let res = [];
        let tempFunc = (arr,left,right) => {

            if(right<left) return;

            if(left<0 || right<0){
                return;
            }

            if(left===0 && right===0){
                res.push(arr.join(''));
                return;
            }

            arr.push('(')
            tempFunc(arr, left - 1, right);
            arr.pop();

            arr.push(')');
            tempFunc(arr, left, right - 1);
            arr.pop();

        };

        tempFunc([],n,n);
        return res;
    };


    var fib = function(n) {

        let dp = new Array(n+1).fill(0);
        dp[1] = 1;

        for (let i=2;i<=n;i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }

        return dp[n];
    };


    var coinChange = function(coins, amount) {

        let dp = new Array(amount + 1).fill(amount + 1);
        dp[0] = 0;

        for (let i=1;i<=amount;i++) {
            for (let coin of coins){
                if(i-coin<0) continue;
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }


        return dp[amount] === amount + 1 ? -1 : dp[amount];
    };


    var minPathSum = function(grid) {

        let m = grid.length;
        let n = grid[0].length;
        let dp = new Array(m);
        for (let i=0;i<m;i++) {
            dp[i] = new Array(n).fill(0);
        }


        dp[0][0] = grid[0][0];
        for (let i=1;i<m;i++){
            dp[i][0] = dp[i - 1][0] + grid[i][0];
        }
        for (let i=1;i<n;i++){
            dp[0][i] = dp[0][i - 1] + grid[0][i];
        }

        for (let i=1;i<m;i++) {
            for (let j=1;j<n;j++) {
                dp[i][j] = Math.min(
                    dp[i - 1][j],
                    dp[i][j - 1]
                ) + grid[i][j];
            }
        }

        return dp[m-1][n-1]
    };

    var minFallingPathSum = function(matrix) {

        let m = matrix.length;
        let n = matrix[0].length;

        let dp = new Array(m);
        for (let i=0;i<m;i++) {
            dp[i] = new Array(n).fill(Number.MAX_SAFE_INTEGER);
        }

        for (let row=0;row<m;row++) {
            for (let col=0;col<n;col++) {
                let val = matrix[row][col];
                if(row===0){
                    dp[row][col] = Math.min(dp[row][col], val);
                }else {

                    if(col===0){
                        dp[row][col] = Math.min(
                            dp[row - 1][col],
                            dp[row - 1][col + 1],
                        ) + val;
                    }else if(col>0 && col<n-1){
                        dp[row][col] = Math.min(
                            dp[row - 1][col - 1],
                            dp[row - 1][col],
                            dp[row - 1][col + 1],
                        ) + val;
                    }else if(col===n-1){
                        dp[row][col] = Math.min(
                            dp[row - 1][col],
                            dp[row - 1][col - 1],
                        ) + val;
                    }
                }

            }
        }

        return dp[m-1][n-1]

    };


    function b() {
        return new Promise((resolve, reject) => {
            throw Error(10);
            setTimeout(resolve, 200)
        });
    }
    function c() {
        throw Error(10);
    }
    const a = () => {
        b().then(() => c());
    };

    //todo 1
    // a();

    //todo 2
    const m = async () => {
        try {
            await b();
        }catch (e) {
            console.log('e', e);
        }

        console.log('323');
        // c();
    };
    // m();


    var longestPalindromeSubseq = function(s) {

        let n = s.length;
        let dp = new Array(n);
        for (let i=0;i<n;i++){
            dp[i] = new Array(n).fill(0);
            dp[i][i] = 1;
        }

        for (let row=n-2;row>=0;row--){
            for (let col=row+1;col<n;col++){

                if(s[row]===s[col]){
                    dp[row][col] = dp[row + i][col - 1] + 2;
                }else {
                    dp[row][col] = Math.max(
                        dp[row+1][col],
                        dp[row][col-1],
                    )
                }

            }
        }

        return dp[0][n - 1];
    };


    Function.prototype.myBind = () => {
        let args = Array.prototype.slice.call(arguments);
        let context = args.shift();
        let self = this;

        let fBind = function () {
            return self.apply(this instanceof fBind ? this : context || window, args.concat(arguments));
        };
        fBind.prototype = Object.create(this.prototype);

        return fBind;
    };


    var maxSubArray = function(nums) {

        let len = nums.length;
        let dp = new Array(len).fill(Number.MIN_SAFE_INTEGER);
        dp[0] = nums[0];

        for (let i=1;i<len;i++){
            dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
        }


        return Math.max(...dp)
    };

    var minDistance = function(word1, word2) {

        let word1Len = word1.length;
        let word2Len = word2.length;
        let dp = new Array(word1Len + 1);
        for (let i=0;i<=word1Len;i++){
            dp[i] = new Array(word2Len + 1).fill(0);
        }
        for (let i=1;i<=word1Len;i++){
            dp[i][0] = i;
        }
        for (let i=1;i<=word2Len;i++){
            dp[0][i] = i;
        }

        for (let row=1;row<=word1Len;row++) {
            for (let col=1;col<=word2Len;col++) {

                if(word1[row-1]===word2[col-1]){
                    dp[row][col] = dp[row - 1][col - 1];
                }else {
                    dp[row][col] = Math.min(
                        dp[row][col - 1],
                        dp[row - 1][col],
                        dp[row - 1][col - 1]
                    ) + 1;
                }

            }
        }

        return dp[word1Len][word2Len]
    };

    // console.log('minDistance', minDistance("horse", "ros"));


    var maxEnvelopes = function(envelopes) {

        let len = envelopes.length;
        envelopes = envelopes.sort((function (a,b) {
            if(a[0]!==b[0]){
                return a[0] - b[0];
            }
            return a[1] - b[1];
        }))
        let dp = new Array(len).fill(1);

        for (let i=1;i<len;i++){

            let rightArr = envelopes[i];
            for (let m = 0; m < i; m++) {
                let leftArr = envelopes[m];

                if(rightArr[0]>leftArr[0] && rightArr[1]>leftArr[1]){
                    dp[i] = Math.max(
                        dp[i],
                        dp[m]+1
                    );
                }
            }
        }


        return Math.max(...dp)
    };

    var removeCoveredIntervals = function(intervals) {

        let fullLen = intervals.length;
        intervals = intervals.sort(function (a,b) {
            if(a[0]===b[0]){
                return a[1] - b[1];
            }
            return a[0] - b[0];
        })

        let combineLen = 0;
        let left = intervals[0][0];
        let right = intervals[0][1];
        for (let i=1;i<fullLen;i++) {
            let nowIntervals = intervals[i];
            if (left <= nowIntervals[0] && right >= nowIntervals[1]) {
                combineLen++;
            }

            if(right>=nowIntervals[0] && right<=nowIntervals[1]){
                right = nowIntervals[1];
            }

            if(right<nowIntervals[0]){
                left = nowIntervals[0];
                right = nowIntervals[1];
            }

        }

        return fullLen - combineLen;
    };


    var merge2 = function(intervals) {

        let res = [];
        intervals = intervals.sort(function (a,b) {
            if(a[0]===b[0]){
                return a[1] - b[1];
            }
            return a[0] - b[0];
        })

    };

    var eraseOverlapIntervals = function(intervals) {
        if(intervals.length<2){
            return 0;
        }


        let noMergeLen = (intervals) => {
            intervals = intervals.sort(function (a,b) {
                return a[1] - b[1];
            })

            let len = 1;
            let end = intervals[0][1];

            for (let i=1,j=intervals.length;i<j;i++) {
                let interval = intervals[i];

                if(interval[0]>=end){
                    len++;
                    end = interval[1];
                }

            }

            return len;
        };


        return intervals.length - noMergeLen(intervals);
    };

    var findMinArrowShots = function(points) {
        if(points.length<2){
            return 1;
        }
        let len = 1;
        points = points.sort(function (a,b) {
            return a[1] - b[1];
        })
        let end = points[0][1];
        for (let i=1,j=points.length;i<j;i++) {
            let point = points[i];

            if(point[0]>end){
                len++;
                end = point[1];
            }

        }

        return len
    };

    var canJump = function(nums) {
        let n = nums.length;
        let farthest = 0;
        for (let i=0;i<n-1;i++) {
            farthest = Math.max(farthest, i+nums[i]);
            if(farthest<=i) return false;
        }

        return farthest >= n - 1;
    };


    var jump = function(nums) {
        let n = nums.length;
        let jumps = 0;
        let farthest = 0;
        let end = 0;
        for (let i=0;i<n-1;i++) {
            farthest = Math.max(farthest, nums[i] + i);
            if(end===i){
                jumps++;
                end = farthest;
            }
        }
        return jumps;

    };

    var canPartition = function(nums) {

        let sum = nums.reduce((prev, next) => {
            return prev + next;
        }, 0);
        if(sum%2!==0) return false;
        let n = nums.length;
        sum = sum / 2;
        let dp = new Array(n + 1);
        for (let i=0;i<=n;i++){
            dp[i] = new Array(sum + 1).fill(false);
            dp[i][0] = true;
        }

        for (let i=1;i<=n;i++) {
            for (let j=1;j<=sum;j++) {

                if(j-nums[i-1]<0) {
                    dp[i][j] = dp[i - 1][j];
                }else {
                    dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
                }

            }
        }



        return dp[n][sum]
    };

    var merge2 = function(intervals) {

        intervals = intervals.sort(function (a,b) {
            return a[0] - b[0];
        })
        let res = [intervals[0]];
        for (let i=1,j=intervals.length;i<j;i++) {
            let cur = intervals[i];
            let last = res[res.length - 1];

            if(cur[0]<=last[1]){
                last[1] = Math.max(cur[1], last[1]);
            }else {
                res.push(cur);
            }
        }

        return res;
    };


    var intervalIntersection = function(firstList, secondList) {

        let res = [];
        let firstIndex = 0;
        let secondIndex = 0;

        while (firstIndex<firstList.length && secondIndex<secondList.length) {
            let firstArr = firstList[firstIndex];
            let secondArr = secondList[secondIndex];

            if(firstArr[0]<=secondArr[1] && firstArr[1]>=secondArr[0]){
                res.push([Math.max(firstArr[0],secondArr[0]),Math.min(firstArr[1],secondArr[1])])
            }

            if(firstArr[1]<=secondArr[1]){
                firstIndex++;
            }else {
                secondIndex++
            }

        }

        return res;
    };


    var threeSum = function(nums) {

        nums = nums.sort(function (a,b) {
            return a-b;
        })
        let nsums = (nums,n,start,target) => {
            let size = nums.length;
            let res = [];
            if(n<2 || size<n) return res;

            if(n===2){
                let left = start;
                let right = size - 1;
                while (left<right){
                    let leftVal = nums[left];
                    let rightVal = nums[right];
                    let sumVal = leftVal + rightVal;

                    if(sumVal<target){
                        while (left<right && nums[left]===leftVal) left++;
                    }else if(sumVal>target){
                        while (left<right && nums[right]===rightVal) right--;
                    }else {
                        res.push([leftVal, rightVal]);
                        while (left<right && nums[left]===leftVal) left++;
                        while (left<right && nums[right]===rightVal) right--;
                    }

                }

            }else {
                for (let i=start;i<size;i++) {
                    let tempArr = nsums(nums, n - 1, i + 1, target - nums[i]);

                    res = res.concat(tempArr.map((elem)=>{
                        return elem.concat(nums[i])
                    }))

                    while (i<size-1 && nums[i]===nums[i+1]) i++;
                }
            }


            return res;
        };

        return nsums(nums,3,0,0)
    };

    // console.log('threeSum', threeSum([-1, 0, 1, 2, -1, -4]));


    var generate = function (list) {

        let record = {};
        let result = [];

        for (let obj of list) {

            record[obj.id] = !record[obj.id] ? obj : {...obj, ...record[obj.id]};
            const treeDom = record[obj.id];

            if(obj.parentId!==undefined){

                if(!record[obj.parentId]){
                    record[obj.parentId] = {};
                }

                if(!record[obj.parentId].children){
                    record[obj.parentId].children = [];
                }

                record[obj.parentId].children.push(treeDom);
            }else {
                result.push(treeDom);
            }

        }

        return result;
    };

    // console.log('generate', generate([
    //     {id: '001', name: '节点1'},
    //     {id: '0011', parentId: '001', name: '节点1-1'},
    //     {id: '00111', parentId: '0011', name: '节点1-1-1'},
    //     {id: '002', name: '节点2'},
    // ]));


    function debounce(fn,delay) {
        let timer = null;
        return function () {
            let args = arguments;
            if(timer) return;
            timer = setTimeout(() => {
                fn.apply(this, args);
                timer = null;
            }, delay);
        };
    }

    function throttle(fn,delay) {
        let timer = null;
        return function () {
            let args = arguments;
            clearTimeout(timer);
            timer = setTimeout(() => {
                fn.apply(this, args);
            }, delay);
        };
    }

    Function.prototype.MyCall = function (context = window, args) {
        let func = this;
        let fn = Symbol.for('fn');
        context[fn] = func;

        let res = context[fn](...args);
        delete context[fn]
        return res;
    };

    Function.prototype.MyApply = function (context=window,args=[]) {
        let func = this;
        let fn = Symbol.for('fn');
        context[fn] = func;

        let res = context[fn](args);
        delete context[fn];
        return res;
    }

    var nextGreaterElement = function(nums1, nums2) {

        let stack = [];
        let record = new Map();
        for (let i=0,j=nums2.length;i<j;i++) {
            let nums2Val = nums2[i];

            while (stack.length && stack[stack.length-1]<nums2Val){
                let tempVal = stack.pop();
                record.set(tempVal, nums2Val);
            }

            stack.push(nums2Val);
        }

        return nums1.map((elem)=>{
            if(record.has(elem)){
                return record.get(elem);
            }
            return -1;
        })
    };

    var dailyTemperatures = function(temperatures) {

        let len = temperatures.length;
        let stack = [];
        let result = Array.from(temperatures).fill(0);
        for (let i=0;i<len;i++) {
            let temperature = temperatures[i];

            while (stack.length && temperatures[stack[stack.length-1]]<temperature){
                let previousIndex = stack.pop();
                result[previousIndex] = i - previousIndex;
            }

            stack.push(i);
        }

        return result
    };

    console.log('dailyTemperatures',dailyTemperatures([73,74,75,71,69,72,76,73]))


    var nextGreaterElements = function(nums) {

        let len = nums.length;
        let stack = [];
        let result = Array.from(nums).fill(-1);

        for (let i=0,j=len*2;i<j;i++) {
            let index = i % len;
            let num = nums[index];

            while (stack.length && nums[stack[stack.length-1]]<num) {
                result[stack.pop()] = num;
            }

            stack.push(index);
        }

        return result;
    };




}