
// 回溯

//22
{

    var generateParenthesis = function(n) {



    };

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
        let len = s.length;

        let tempFunc = (arr) => {


            for (let i=0;i<len;i++) {



            }

        };




    };

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


    // var subsets = function(nums) {
    //
    //
    //     let tempFunc = (res,nums,index,temp) => {
    //         res.push(temp.slice());
    //
    //         for(let i=index;i<nums.length;i++) {
    //             temp.push(nums[i]);
    //             tempFunc(res, nums, i + 1, temp);
    //             temp.pop();
    //         }
    //
    //
    //     };
    //
    //     let res = [];
    //     let temp = [];
    //
    //
    //     tempFunc(res, nums, 0, temp);
    //     return res;
    // };

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