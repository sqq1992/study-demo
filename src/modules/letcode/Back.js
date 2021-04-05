
// 回溯


//46
{

    var permute = function(nums) {


        let res = [];
        let len = nums.length;

        let tempFunc = (arr) => {

            if(arr.length===len) {
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
        tempFunc([]);
        return res;
    };

    // var permute = function(nums) {
    //
    //
    //     let res = [];
    //     let temp = [];
    //
    //
    //     let tempFunc = (temp) => {
    //
    //         if(temp.length===nums.length) {
    //             res.push(temp.slice());
    //             return;
    //         }
    //
    //         for (let i=0,j=nums.length;i<j;i++) {
    //
    //             if(temp.includes(nums[i])){
    //                 continue;
    //             }
    //             temp.push(nums[i]);
    //             tempFunc(temp);
    //             temp.pop();
    //         }
    //     };
    //     tempFunc(temp);
    //     return res;
    // };

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


        let tempFunc = () => {


        };

    };
}