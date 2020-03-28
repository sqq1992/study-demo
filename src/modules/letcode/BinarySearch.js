

//857
{
    let minEatingSpeed = function(piles, H) {

        let sortedPiles = piles.sort((a, b) => {
            return a - b;
        });
        let sumPiles = piles.reduce((prev, next) => {
            return prev + next;
        }, 0);
        let minSpeed = Math.ceil(sumPiles / H);
        let maxSpeed = sortedPiles[sortedPiles.length - 1];
        let resultSpeed = maxSpeed;

        while (minSpeed<=maxSpeed){

            let tempMidSpeed = Math.floor((maxSpeed - minSpeed) / 2) + minSpeed;
            let needHours = piles.reduce((prev, next) => {
                return prev + Math.ceil(next / tempMidSpeed);
            }, 0);

            if(needHours>H){
                minSpeed = tempMidSpeed + 1;
            }else {
                maxSpeed = tempMidSpeed - 1;
                resultSpeed = Math.min(resultSpeed, tempMidSpeed);
            }

        }

        return resultSpeed;
    };

    // console.log('minEatingSpeed', minEatingSpeed([30,11,23,4,20], 5));

}

//275
{
    var hIndex = function(citations) {
        let staticIndex = citations.length - 1;
        if(citations.length===0 || citations[staticIndex]===0){
            return 0;
        }


        let maxLen = 1;
        let left = 0;

        let right = citations.length - 1;

        while (left<=right) {
            let middleIndex = Math.floor((right - left) / 2) + left;
            let middleValue = citations[middleIndex];
            let rightNums = staticIndex - middleIndex + 1;

            if (middleValue >= rightNums) {
                maxLen = Math.max(maxLen, staticIndex - middleIndex + 1);
            }


            if(middleValue<=rightNums){
                left = middleIndex + 1;
            }else {
                right = middleIndex - 1;
            }



        }

        return maxLen;



    };

    // console.log('hIndex', hIndex([11,15]));

}


//34
{

    var searchRange = function(nums, target) {

        let left = 0;
        let len = nums.length;
        let right = nums.length - 1;
        let flag = false;
        let middleIndex;
        let start = 0;
        let end = 0;


        while (left<=right) {
            middleIndex = Math.floor((right - left) / 2) + left;
            let middleVal = nums[middleIndex];

            if(middleVal===target){
                flag = true;
                break;
            }else if(middleVal>target){
                right = middleIndex - 1;
            }else {
                left = middleIndex+1;
            }
        }


        if(!flag){
            return [-1, -1];
        }

        start = middleIndex;
        end = middleIndex;


        while (start-1>=0 && nums[start-1]===target){
            start--;
        }

        while (end+1<=len-1 && nums[end+1]===target){
            end++;
        }

        return [start, end];
    };

    console.log('searchRange', searchRange([5, 7, 7, 8, 8, 10], 8));


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


//378
{


    var kthSmallest = function(matrix, k) {
        let nums = matrix.reduce((prev, next) => {
            return prev.concat(next)
        }, []).sort((a, b) => {
            return a - b;
        });
        let formatNums = [...new Set(nums)];
        let left = 0;
        let right = formatNums.length - 1;


        return nums[k - 1];
    };

    var testArr = [
        [1, 5, 9],
        [10, 11, 13],
        [12, 13, 15]
    ];

    console.log('kthSmallest', kthSmallest(testArr, 8));

}
