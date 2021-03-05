
//双指针



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


    console.log('threeSumClosest', threeSumClosest([1,2,4,8,16,32,64,128], 82));
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

    console.log('sortColors', sortColors([1, 2, 0]));


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


    console.log('findRadius',findRadius([1,2,3,4],[1,4]))
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


    console.log('lengthOfLongestSubstring', lengthOfLongestSubstring("pwwkew"));

}