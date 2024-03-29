
// 回溯 (DFS算法)

//22
{


    var generateParenthesis = function(n) {

        let res = [];

        let tempFunc = (left,right,track) => {

            if(right<left) return;

            if(left<0 || right<0) return;

            if(left===0 && right===0){
                res.push(track.join(''));
                return;
            }

            track.push('(');
            tempFunc(left - 1, right, track);
            track.pop();


            track.push(')');
            tempFunc(left , right-1, track);
            track.pop();
        };
        tempFunc(n, n, []);

        return res;
    };











    var generateParenthesis = function(n) {

        let res = [];
        let tempFunc = (left,right,str) => {

            if(right>left){
                return;
            }

            if(right===n && left===n){
                res.push(str);
                return;
            }


            if(left<n){
                tempFunc(left + 1, right, str + '(');
            }

            if(left>right){
                tempFunc(left, right + 1, str + ')');
            }


        };
        tempFunc(0, 0, '');
        return res;
    };

    // console.log('generateParenthesis', generateParenthesis(3));

}

//698
{

    var canPartitionKSubsets = function(nums, k) {

        let sum = nums.reduce((prev, next) => {
            return prev + next;
        }, 0);

        if(sum % k !==0) return false;

        let target = sum / k;
        let bucket = new Array(k).fill(0);


        let tempFunc = (index) => {

            if(index===nums.length){
                for (let i=0,j=bucket.length;i<j;i++) {
                    if(bucket[i]!==target){
                        return false;
                    }
                }
                return true;
            }


            for (let i=0,j=bucket.length;i<j;i++) {

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

    // console.log('canPartitionKSubsets', canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4));

}

//93
{

    var restoreIpAddresses = function(s) {
        let res = [];
        let sumLen = s.length;

        let tempFunc = (arr, str) => {

            if(arr.length===4){
                if(arr.join('').length===sumLen){
                    res.push(arr.join('.'));
                }
                return;
            }


            let len = str.length >= 3 ? 3 : str.length;
            for (let i = 0; i < len; i++) {
                let endIndex = i + 1;
                let tempStr = str.slice(0, endIndex);

                if(Number(tempStr)>255 || (tempStr[0]==="0" && tempStr.length>=2)){
                    continue;
                }

                arr.push(tempStr);
                tempFunc(arr, str.slice(endIndex));
                arr.pop();

            }

        };
        tempFunc([], s);
        return res;
    };

    // console.log('restoreIpAddresses', restoreIpAddresses('25525511135'));
}


//46
{

    var permute = function(nums) {

        let res = [];
        let len = nums.length;

        let tempFunc = (arr) => {

            if(arr.length===len){
                res.push(arr.slice());
                return;
            }


            for (let i=0;i<len;i++) {

                if(arr.includes(nums[i])){
                    continue;
                }
                arr.push(nums[i]);
                tempFunc(arr);
                arr.pop();
            }
        };

        tempFunc([])
        return res;
    };

    // console.log('permute', permute([1, 2, 3]));

}


//78
{


    var subsets = function(nums) {

        let res = [];
        let len = nums.length;

        let tempFunc = (start,arr) => {
            res.push(arr.slice());

            for (let i=start;i<len;i++) {
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

    // console.log('subsets',subsets([1,2,3]))

}


//39
{

    var combinationSum = function(candidates, target) {

        let res = [];
        let temp = [];
        candidates = candidates.sort((a,b)=>{
            return a - b;
        })


        let tempFunc = (target, index, temp) => {

            if(target<0){
                return;
            }

            if(target===0){
                res.push(temp.slice());
                return;
            }


            for (let i = index, j = candidates.length; i < j; i++) {

                if(target<0){
                    break;
                }

                temp.push(candidates[i]);
                tempFunc(target - candidates[i], i, temp);
                temp.pop();

            }


        };


        tempFunc(target, 0, temp);
        return res;
    };

    // console.log('combinationSum', combinationSum([2, 3, 6, 7], 7));


}


//77
{

    var combine = function(n, k) {

        let res = [];

        let tempFunc = (start,arr) => {

            if(arr.length===k){
                res.push(arr.slice());
                return;
            }

            for (let i=start;i<=n;i++) {

                if(arr.includes(i)){
                    continue;
                }
                arr.push(i);
                tempFunc(i + 1, arr);
                arr.pop();

            }


        };
        tempFunc(1, []);
        return res;
    };

}




//188
{

    var maxProfit = function(k, prices) {



    };

}


//51
{

    var solveNQueens = function(n) {

        let res = [];
        let board = new Array(n);
        for (let i=0;i<n;i++) {
            board[i] = new Array(n);
            board[i].fill('.');
        }

        let isValid = (row, col) => {

            for (let i=0;i<n;i++) {
                for (let j=0;j<n;j++) {
                    if(board[i][j]==="Q" && (j===col || i+j===row+col || i-j===row-col)){
                        return false;
                    }
                }
            }

            return true;
        };

        let tempFunc = (row) => {

            if(row===n){
                res.push(board.map((elem)=>{
                    return elem.join('');
                }))
                return;
            }

            for (let col=0;col<n;col++) {

                if(!isValid(row,col)) continue;

                board[row][col] = "Q"
                tempFunc(row + 1);
                board[row][col] = "."
            }


        };


        tempFunc(0);
        return res;
    };
    // console.log('solveNQueens',solveNQueens(4))
}

//494
{

    var findTargetSumWays = function(nums, target) {

        let result = 0;
        let len = nums.length;

        let tempFunc = (sum, index) => {


            if(index===len){

                if(sum===target){
                    result++;
                }

                return;
            }

            tempFunc(sum - nums[index], index + 1);

            tempFunc(sum + nums[index], index + 1);


        };
        tempFunc(0, 0);

        return result;
    };

}