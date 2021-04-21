
//33
{

    var search = function(nums, target) {


        let left = 0;
        let right = nums.length - 1;
        let firstVal = nums[0];
        let lastVal = nums[right];

        while (left<=right) {
            let mid = left + Math.floor((right - left) / 2);
            let midVal = nums[mid];

            if(midVal===target){
                return mid;
            }

            if(firstVal<=midVal) {

                if(firstVal<=target && target<midVal){
                    right = mid - 1;
                }else {
                    left = mid + 1;
                }

            }else {

                if(midVal<target && target<=lastVal){
                    left = mid + 1;
                }else {
                    right = mid - 1;
                }


            }





        }


        return -1;
    };

    // console.log('search', search([4, 5, 6, 7, 0, 1, 2], 3));

}


//162
{
    var findPeakElement = function(nums) {

        if(nums.length===1){
            return 0;
        }

        let len = nums.length;
        let index = -1;
        let increasing = 0;
        for(let i=1;i<len;i++) {
            increasing = 0;

            while (nums[i]>nums[i-1]) {
                i++;
                increasing++;
            }

            if ((nums[i] < nums[i - 1] || i >= len) && increasing >= 0) {
                index = i - 1;
                break;
            }

            while (nums[i]===nums[i-1]){
                i++;
            }

        }

        return index;
    };

    // console.log('findPeakElement', findPeakElement([2, 1]));

}



//15
{
    var threeSum = function(nums) {

        let result = [];
        nums = nums.sort((a, b) => {
            return a - b
        });

        for(let i=0,j=nums.length;i<j;i++) {
            let first = nums[i];

            if(i>0 && nums[i]===nums[i-1]){
                continue;
            }


            let left = i + 1;
            let right = j - 1;

            while (left<right) {
                let leftVal = nums[left];
                let rightVal = nums[right];
                let sum = first + leftVal + rightVal;

                if(sum===0){
                    result.push([first, leftVal, rightVal]);
                }

                if(sum<=0){
                    while (nums[left]===leftVal){
                        left++;
                    }
                }

                if(sum>=0){
                    while (nums[right]===rightVal){
                        right--;
                    }
                }
            }

        }

        return result;
    };


}


//744
{

    var nextGreatestLetter = function(letters, target) {
        let max = letters.length;


        if(letters[max-1]<=target){
            return letters[0];
        }


        let start = 0;
        let end = max-1;

        while (start<end) {
            let mid = start + Math.floor((end - start) / 2);

            if(letters[mid]>target){
                end = mid;
            }else {
                start = mid + 1;
            }
        }

        return letters[end]

    };

    // console.log('nextGreatestLetter', nextGreatestLetter(["c", "f", "j"], 'j'));
}


//367
{

    var isPerfectSquare = function(num) {

        if(num===1){
            return true;
        }


        let start = 0;
        let end = num;

        while (start<end){
            let mid = start + Math.floor((end - start) / 2);
            let sum = mid * mid;


            if(sum===num){
                return true;
            }else if(sum>num){
                end = mid;
            }else {
                start = mid + 1;
            }
        }


        return false;
    };

    // console.log('isPerfectSquare', isPerfectSquare(9));
}

//857
{
    // let minEatingSpeed = function(piles, H) {
    //
    //     let sortedPiles = piles.sort((a, b) => {
    //         return a - b;
    //     });
    //     let sumPiles = piles.reduce((prev, next) => {
    //         return prev + next;
    //     }, 0);
    //     let minSpeed = Math.ceil(sumPiles / H);
    //     let maxSpeed = sortedPiles[sortedPiles.length - 1];
    //     let resultSpeed = maxSpeed;
    //
    //     while (minSpeed<=maxSpeed){
    //
    //         let tempMidSpeed = Math.floor((maxSpeed - minSpeed) / 2) + minSpeed;
    //         let needHours = piles.reduce((prev, next) => {
    //             return prev + Math.ceil(next / tempMidSpeed);
    //         }, 0);
    //
    //         if(needHours>H){
    //             minSpeed = tempMidSpeed + 1;
    //         }else {
    //             maxSpeed = tempMidSpeed - 1;
    //             resultSpeed = Math.min(resultSpeed, tempMidSpeed);
    //         }
    //
    //     }
    //
    //     return resultSpeed;
    // };

    // console.log('minEatingSpeed', minEatingSpeed([30,11,23,4,20], 5));

}

//275
{

    var hIndex = function(citations) {

        let len = citations.length;
        let left = 0;
        let right = len - 1;
        let staticRightIndex = len - 1;
        let maxLen = 0;

        while (left<=right) {
            let midIndex = left + Math.floor((right - left) / 2);
            let midVal = citations[midIndex];
            let rightSumIndex = staticRightIndex - midIndex + 1;


            if(midVal>=rightSumIndex) {
                maxLen = Math.max(maxLen, rightSumIndex);
                right--;
            }else {
                left++;
            }

        }


        return maxLen;

    };
















    // var hIndex = function(citations) {
    //     let staticIndex = citations.length - 1;
    //     if(citations.length===0 || citations[staticIndex]===0){
    //         return 0;
    //     }
    //
    //
    //     let maxLen = 1;
    //     let left = 0;
    //
    //     let right = citations.length - 1;
    //
    //     while (left<=right) {
    //         let middleIndex = Math.floor((right - left) / 2) + left;
    //         let middleValue = citations[middleIndex];
    //         let rightNums = staticIndex - middleIndex + 1;
    //
    //         if (middleValue >= rightNums) {
    //             maxLen = Math.max(maxLen, staticIndex - middleIndex + 1);
    //         }
    //
    //
    //         if(middleValue<=rightNums){
    //             left = middleIndex + 1;
    //         }else {
    //             right = middleIndex - 1;
    //         }
    //
    //
    //
    //     }
    //
    //     return maxLen;
    //
    //
    //
    // };

    // console.log('hIndex', hIndex([11,15]));

}


//34
{

    var searchRange = function(nums, target) {

        let start = 0;
        let len = nums.length;
        let end = nums.length - 1;
        let flag = false;
        let mid;

        while (start<=end) {

            mid = Math.floor((start + end) / 2);
            let midVal = nums[mid];

            if(midVal===target){
                flag = true;
                break;
            }else if(midVal<target){
                start = mid + 1;
            }else{
                end = mid - 1;
            }
        }

        if(!flag){
            return [-1, -1];
        }

        start = mid;
        end = mid;

        while ((start-1)>=0 && nums[start-1]===target){
            start--;
        }

        while ((end+1)<=len-1 && nums[end+1]===target){
            end++;
        }

        return [start, end];
    };

    // console.log('searchRange', searchRange([2, 2], 2));



    var findLeft1 = function (nums, target) {
        let left = 0;
        let right = nums.length;

        while (left<right) {
            let mid = left + Math.floor((right - left) / 2);

            if(nums[mid]===target){
                right = mid;
            }else if(nums[mid]>target){
                right = mid - 1;
            }else {
                left = mid + 1;
            }


        }

        return nums[left] === target ? left : -1;
    };

    var findLeft2 = function (nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while (left<=right) {
            let mid = left + Math.floor((right - left) / 2);
            if(nums[mid]===target){
                right = mid - 1;
            }else if(nums[mid]>target){
                right = mid - 1;
            }else {
                left = mid + 1;
            }
        }

        return nums[left] === target ? left : -1;
    };

    var findRight1 = function (nums, target) {
        let left = 0;
        let right = nums.length;

        while (left<right) {
            let mid = left + Math.floor((right - left) / 2);

            if(nums[mid]===target){
                left = mid + 1;
            }else if(nums[mid]>target){
                right = mid;
            }else {
                left = mid + 1;
            }


        }

        return left - 1;
    };

    // console.log('findLeft', findLeft1([0, 1, 2, 2, 2, 3, 4], 2));
    // console.log('findLeft2', findLeft2([0, 1, 2, 2, 2, 3, 4], 2));
    // console.log('findRight1', findRight1([0, 1, 2, 2, 2, 2,2, 3, 4], 2));


}


//875
{


    var minEatingSpeed = function(piles, H) {


        piles = piles.sort((a, b) => {
            return a - b
        });
        let sumPiles = piles.reduce((prev, next) => {
            return prev + next;
        }, 0);

        let min = Math.ceil(sumPiles / H);
        let max = piles[piles.length - 1];
        let minSpeed = max;

        while (min<=max){

            let tempMid = Math.floor((min + max) / 2);
            let tempHour = piles.reduce((prev, next) => {
                return prev + Math.ceil(next / tempMid);
            }, 0);


            if(tempHour>H){
                min = tempMid + 1;
            }else {
                max = tempMid - 1;
                minSpeed = Math.min(minSpeed, tempMid);
            }
        }


        return minSpeed;
    };

    console.log('minEatingSpeed', minEatingSpeed([3, 6, 7, 11], 8));
}


//378
{




}

//658
{




    var findClosestElements = function(arr, k, x) {

        let len = arr.length;
        let left = 0;
        let right = len-k;
        let res = [];

        while (left<right){
            let mid = left + Math.floor((right - left) / 2);

            if(x-arr[mid]>arr[mid+k]-x){
                left = mid + 1;
            }else {
                right = mid;
            }

        }

        for (let i=left,j=left+k;i<j;i++) {
            res.push(arr[i]);
        }

        return res;
    };











    // var findClosestElements = function(arr, k, x) {
    //     let len = arr.length;
    //     let min = arr[0];
    //     let max = arr[len - 1];
    //
    //     if(x<=min){
    //         return arr.slice(0, k);
    //     }else if(x>=max){
    //         return arr.slice(-k);
    //     }
    //
    //     let left = 0;
    //     let right = len - k;
    //     let res = [];
    //
    //     while (left<=right){
    //         let mid = Math.floor((left + right) / 2);
    //
    //         if(x-arr[mid]>arr[mid+k]-x){
    //             left = mid + 1;
    //         }else {
    //             right = mid - 1;
    //         }
    //
    //     }
    //
    //     for(let i=left;i<left+k;i++){
    //         res.push(arr[i]);
    //     }
    //
    //     return res;
    // };



}



