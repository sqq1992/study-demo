

//左边界

{

    let leftBound = function (array,target) {


        let left = 0;
        let right = array.length;

        while (left<right) {
            let mid = left + Math.floor((right - left) / 2);
            let midVal = array[mid];


            if(midVal===target){
                right = mid;
            }else if(midVal>target){
                right = mid;
            }else if (midVal<target){
                left = mid + 1;
            }


        }

        return left;
    };


    let leftBound2 = function (nums, target) {


        let left = 0;
        let right = nums.length - 1;
        while (left<=right) {
            let mid = left + Math.floor((right - left) / 2);
            let midVal = nums[mid];

            if(midVal===target) {
                right = mid-1;
            }else if(midVal>target){
                right = mid-1;
            }else if(midVal<target) {
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
            }else if(midVal<target){
                left = mid + 1;
            }else if(midVal>target){
                right = mid;
            }

        }

        return left - 1;
    };



    console.log('leftBound', leftBound([1,2,2,2,3,4], 1));
    console.log('leftBound2', leftBound2([1,2,3,4], 2));
    console.log('rightBound', rightBound([1, 2, 2, 2, 3, 4], 2));

}