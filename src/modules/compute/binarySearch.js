

//左边界

{

    let leftBound = function (nums,target) {
        let left = 0;
        let right = nums.length;

        while (left<right) {

            let mid = left + Math.floor((right - left) / 2);
            let midVal = nums[mid];

            if(midVal===target){
                right = mid;
            }else if(midVal>target){
                right = mid;
            }else if(midVal<target){
                left = mid + 1;
            }

        }


        if(left===nums.length) return -1;

        return nums[left] === target ? left : -1;
    };


    let leftBound2 = function (nums,target) {


        let left = 0;
        let right = nums.length-1;

        while (left<=right) {

            let mid = left + Math.floor((right - left) / 2);

            if(nums[mid]===target){
                right = mid - 1;
            }else if(nums[mid]>target){
                right = mid-1;
            }else if(nums[mid]<target){
                left = mid + 1;
            }

        }

        if(left>=nums.length || nums[left]!==target){
            return -1;
        }

        return left;
    };


    let rightBound = function (nums,target) {
        let left = 0;
        let right = nums.length;

        while (left<right) {

            let mid = left + Math.floor((right - left) / 2);
            let midVal = nums[mid];

            if(midVal===target){
                left = mid + 1;
            }else if(midVal>target){
                right = mid;
            }else if(midVal<target){
                left = mid + 1;
            }

        }

        return nums[left - 1] === target ? left - 1 : -1;

    };


    let rightBound2 = function (nums,target) {
        let left = 0;
        let right = nums.length-1;

        while (left<=right) {

            let mid = left + Math.floor((right - left) / 2);
            let midVal = nums[mid];

            if(midVal===target){
                left = mid + 1;
            }else if(midVal>target){
                left = mid + 1;
            }else if(midVal<target){
                right = mid - 1;
            }
        }

        return nums[left - 1] === target ? left - 1 : -1;
    };




    // console.log('leftBound', leftBound([1,2,2,2,3,4], 2));
    // console.log('leftBound2', leftBound2([1,2,3,4], 5));
    console.log('rightBound', rightBound([1, 2, 2, 2, 3, 4], 2));

}