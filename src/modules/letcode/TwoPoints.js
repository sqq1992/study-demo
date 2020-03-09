

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

