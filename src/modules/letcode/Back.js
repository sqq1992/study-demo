
// 回溯


//46
{

    var permute = function(nums) {


        let res = [];
        let temp = [];


        let tempFunc = (temp) => {

            if(temp.length===nums.length) {
                res.push(temp.slice());
                return;
            }

            for (let i=0,j=nums.length;i<j;i++) {

                if(temp.includes(nums[i])){
                    continue;
                }
                temp.push(nums[i]);
                tempFunc(temp);
                temp.pop();
            }
        };
        tempFunc(temp);
        return res;
    };

    // console.log('permute', permute([1, 2, 3]));

}


//78
{

    var subsets = function(nums) {


        let tempFunc = (res,nums,index,temp) => {
            res.push(temp.slice());

            for(let i=index;i<nums.length;i++) {
                temp.push(nums[i]);
                tempFunc(res, nums, i + 1, temp);
                temp.pop();
            }


        };

        let res = [];
        let temp = [];


        tempFunc(res, nums, 0, temp);
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

