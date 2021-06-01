
//双指针

//5
{

    var longestPalindrome = function(s) {

        let res = '';
        let tempFunc = (s, l, r) => {

            while (l>=0 && r<s.length && s[l]===s[r]){
                l--;
                r++;
            }

            return s.slice(l + 1, r);
        };

        for (let i=0,j=s.length;i<j;i++) {

            let res1 = tempFunc(s, i, i);
            let res2 = tempFunc(s, i, i + 1);


            res = res.length > res1.length ? res : res1;
            res = res.length > res2.length ? res : res2;

        }


        return res
    };










    // var longestPalindrome = function(s) {
    //
    //     let res = '';
    //     let tempFunc = (str,left,right) => {
    //
    //
    //         while (left>=0 && right<str.length && str[left]===str[right]) {
    //
    //             left--;
    //             right++
    //         }
    //
    //         return str.substr(left + 1, right - left - 1);
    //     };
    //
    //
    //     for (let i=0,j=s.length;i<j;i++) {
    //
    //         let res1 = tempFunc(s, i, i);
    //         let res2 = tempFunc(s, i, i + 1);
    //
    //         res = res.length > res1.length ? res : res1;
    //         res = res.length > res2.length ? res : res2;
    //
    //     }
    //
    //     return res;
    // };

    console.log('longestPalindrome', longestPalindrome("babad"));

}

//647
{

    var countSubstrings = function(s) {

        let count = 0;
        let tempFunc = (str, left, right) => {

            let tempCount = 0;

            while (left>=0 && right<str.length && str[left]===str[right]){
                tempCount++;
                left--;
                right++;
            }

            return tempCount;
        };

        for (let i=0,j=s.length;i<j;i++) {

            let count1 = tempFunc(s, i, i);
            let count2 = tempFunc(s, i, i + 1);
            count = count + count1 + count2;
        }


        return count;
    };

}


// 88
{


    var merge = function(nums1, m, nums2, n) {
        let nums1Index = m-1;
        let nums2Index = n - 1;
        let len = m + n;

        while (nums1Index>=0 && nums2Index>=0) {
            len--;
            nums1[len] = Math.max(nums1[nums1Index], nums2[nums2Index]);
            if(nums1[nums1Index]>nums2[nums2Index]){
                nums1Index--;
            }else {
                nums2Index--;
            }
        }

        while (nums2Index>=0){
            nums1[nums2Index] = nums2[nums2Index];
            nums2Index--;
        }

        return nums1;
    };

    // console.log('merge', merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));


}


//167
{

    var twoSum = function(numbers, target) {

        let start = 0;
        let end = numbers.length - 1;

        while (start<end) {

            let sum = numbers[start] + numbers[end];
            if(sum===target){
                return [start + 1, end + 1];
            }else if(sum>target){
                end--;
            }else {
                start++;
            }
        }


        return [-1, -1];
    };

}


//977
{
    var sortedSquares = function(A) {
        let start = 0;
        let end = A.length - 1;
        let result = [];

        while (start<=end) {
            let leftVal = A[start] ** 2;
            let rightVal = A[end] ** 2;

            if(leftVal<=rightVal) {
                result.push(rightVal);
                end--;
            }else {
                result.push(leftVal);
                start++;
            }
        }

        return result.reverse();
    };

    // console.log('sortedSquares', sortedSquares([-4, -1, 0, 3, 10]));
}

//344
{

    var reverseString = function(s) {
        let left = 0;
        let right = s.length - 1;

        while (left<right) {
            let tempStr = s[right];
            s[right] = s[left];
            s[left] = tempStr;

            left++;
            right--;
        }

        return s;
    };
}


//16
{
    var threeSumClosest = function(nums, target) {

        let sortNums = nums.sort((a, b) => {
            return a - b;
        });
        let result = nums[0] + nums[1] + nums[2];

        for(let i=0,j=sortNums.length;i<j;i++) {

            if(i>0 && sortNums[i]===sortNums[i-1]){
                continue;
            }

            let currentVal = sortNums[i];
            let left = i + 1;
            let right = sortNums.length - 1;

            while (left<right) {
                let leftVal = sortNums[left];
                let rightVal = sortNums[right];
                let sumVal = currentVal + leftVal + rightVal;
                let tempResult = Math.abs(target - result);

                if (Math.abs(target - sumVal) < tempResult) {
                    result = sumVal;
                }

                if(sumVal > target) {
                    while (sortNums[right]===rightVal) {
                        right--;
                    }
                }else {
                    while (sortNums[left]===leftVal) {
                        left++;
                    }
                }

            }



        }


        return result;
    };


    // console.log('threeSumClosest', threeSumClosest([1,2,4,8,16,32,64,128], 82));
}


//75
{


    var sortColors = function(nums) {

        let left = 0;
        let right = nums.length - 1;
        let currentIndex = 0;

        while (currentIndex <= right) {
            let cur = nums[currentIndex];

            if (cur === 0) {
                nums[currentIndex] = nums[left];
                nums[left++] = cur;
                currentIndex++;
            } else if (cur === 2) {
                nums[currentIndex] = nums[right];
                nums[right--] = cur;
            }else {
                currentIndex++;
            }


        }

        return nums;
    };

    // console.log('sortColors', sortColors([1, 2, 0]));


}

//852
{

    var peakIndexInMountainArray = function(arr) {

        let i = 0;

        while (arr[i]>arr[i+1]){
            i++;
        }

        return i;
    };

}

//475
{

    var findRadius = function(houses, heaters) {

        let arr = [];
        heaters.forEach((elem)=>{

            houses.forEach((smallElem,smallIndex)=>{

                let distance = Math.abs(elem - smallElem);
                if(arr[smallIndex]===undefined){
                    arr.push(distance);
                }else {
                    arr[smallIndex] = Math.min(arr[smallIndex], distance);
                }

            })

        })
        return Math.max.apply(null, arr);
    };


    // console.log('findRadius',findRadius([1,2,3,4],[1,4]))
}



//881
{
    var numRescueBoats = function(people, limit) {
        people = people.sort((a, b) => {
            return a - b;
        });


        let left = 0;
        let right = people.length - 1;
        let current = 0;

        while (left<=right) {

            let sum = people[left] + people[right];

            if(sum>=limit){
                current++;
                right--;
            }else {
                left++;
                right--;
                current++;
            }


        }

        return current;
    };

}

//11
{

    var maxArea = function(height) {

        let start = 0;
        let end = height.length - 1;
        let maxLen = 0;
        while (start<end){

            maxLen = Math.max(maxLen, Math.min(height[start], height[end]) * (end - start));

            if(height[start]<height[end]){
                start++;
            }else {
                end--;
            }
        }

        return maxLen;
    };



}

//medium----------------------------------

//567
{
    var checkInclusion = function(s1, s2) {


        let start = 0;
        let s1Len = s1.length;
        let len = s2.length;
        let end = 0;
        let s1Record = new Map();
        let s2Record = new Map();
        for(let i=0,j=s1.length;i<j;i++) {
            s1Record.set(s1[i], (s1Record.get(s1[i]) || 0) + 1);
        }

        let isEqual = function (s1RecordObj,s2RecordObj) {

            for(let [key,value] of s1RecordObj){
                if(s2RecordObj.get(key)!==value){
                    return false;
                }
            }

            return true;
        };


        while (end<len) {

            if (end - start + 1 > s1Len) {
                s2Record.set(s2[start], s2Record.get(s2[start]) - 1);
                start++;
            }

            s2Record.set(s2[end], (s2Record.get(s2[end]) || 0) + 1);


            if(end-start+1===s1Len && isEqual(s1Record,s2Record)){
                return true;
            }

            end++;
        }


        return false;
    };
}

//3
{
    var lengthOfLongestSubstring = function(s) {

        let start = 0;
        let end = 0;
        let len = s.length;
        let record = new Map();
        let maxLen = 0;

        while (end<len) {

            if(record.has(s[end])){
                let prevIndex = record.get(s[end]);
                start = prevIndex < start ? start : prevIndex + 1;
            }

            maxLen = Math.max(end - start + 1, maxLen);
            record.set(s[end], end);
            end++;
        }


        return maxLen;
    };


    // console.log('lengthOfLongestSubstring', lengthOfLongestSubstring("pwwkew"));

}

/**
 *  n sum target类型的题目
 */
//15, 18
{

    var threeSum = function(nums) {


        nums = nums.sort((a, b) => {
            return a - b
        });


        let nSumTarget = (nums, n, start, target) => {
            let size = nums.length;
            let res = [];

            if (n < 2 || size < n) return res;

            if (n === 2) {
                let left = start;
                let right = size - 1;

                while (left<right){
                    let leftVal = nums[left];
                    let rightVal = nums[right];
                    let tempSum = leftVal + rightVal;

                    if(tempSum<target){
                        while (left<right && nums[left]===leftVal) left++;
                    }else if(tempSum>target){
                        while (left<right && nums[right]===rightVal) right--;
                    }else {
                        res.push([leftVal, rightVal]);
                        while (left<right && nums[left]===leftVal) left++;
                        while (left<right && nums[right]===rightVal) right--;
                    }
                }
            }else {
                for (let i=start;i<size;i++) {

                    let tempResArr = nSumTarget(nums, n - 1, i + 1, target - nums[i]);
                    if(tempResArr.length){
                        res = res.concat(tempResArr.map((elem) => {
                            return elem.concat(nums[i])
                        }))
                    }

                    while (i<size-1 && nums[i]===nums[i+1]) i++;
                }

            }


            return res;
        };

        return nSumTarget(nums, 3, 0, 0);
    };


    var fourSum = function(nums, target) {

        nums = nums.sort((a, b) => {
            return a - b
        });

        let nSumTarget = (nums, n, start, target) => {
            let size = nums.length;
            let res = [];

            if (n < 2 || size < n) return res;

            if (n === 2) {
                let left = start;
                let right = size - 1;

                while (left<right){
                    let leftVal = nums[left];
                    let rightVal = nums[right];
                    let tempSum = leftVal + rightVal;

                    if(tempSum<target){
                        while (left<right && nums[left]===leftVal) left++;
                    }else if(tempSum>target){
                        while (left<right && nums[right]===rightVal) right--;
                    }else {
                        res.push([leftVal, rightVal]);
                        while (left<right && nums[left]===leftVal) left++;
                        while (left<right && nums[right]===rightVal) right--;
                    }
                }
            }else {
                for (let i=start;i<size;i++) {

                    let tempResArr = nSumTarget(nums, n - 1, i + 1, target - nums[i]);
                    if(tempResArr.length){
                        res = res.concat(tempResArr.map((elem) => {
                            return elem.concat(nums[i])
                        }))
                    }

                    while (i<size-1 && nums[i]===nums[i+1]) i++;
                }

            }

            return res;
        };

        return nSumTarget(nums, 4, 0, target);
    };

    console.log('threeSum',threeSum([-1,0,1,2,-1,-4]))



}




//392
{

    var isSubsequence = function(s, t) {

        let sIndex = 0;
        let sLen = s.length;
        let tIndex = 0;
        let tLen = t.length;

        while (sIndex<sLen && tIndex<tLen){

            if(s[sIndex]===t[tIndex]){
                sIndex++;
            }
            tIndex++;
        }

        return sIndex === sLen;
    };

}