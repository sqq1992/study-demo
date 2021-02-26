
//二分搜索法

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

    console.log('isPerfectSquare', isPerfectSquare(9));
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
