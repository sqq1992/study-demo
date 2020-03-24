


//986
{

    let intervalIntersection = function(A, B) {
        let aIndex = 0;
        let bIndex = 0;
        let result = [];

        while (aIndex<A.length && bIndex<B.length) {

            let left = Math.max(A[aIndex][0], B[bIndex][0]);
            let right = Math.min(A[aIndex][1], B[bIndex][1]);


            if(left<=right){
                result.push([left, right]);
            }


            if(A[aIndex][1]>=B[bIndex][1]){
                bIndex++;
            }else {
                aIndex++;
            }

        }


        return result;
    };

    console.log('intervalIntersection', intervalIntersection([[0, 2], [5, 10], [13, 23], [24, 25]], [[1, 5], [8, 12], [15, 24], [25, 26]]));

}

//713
{
    var numSubarrayProductLessThanK = function(nums, k) {
        let len = nums.length;

        nums = nums.sort((a, b) => {
            return a - b;
        });
        let left = 0;
        let right = 1;
        let result = 0;

        while (left<right && right<len) {

            let tempSum = nums.slice(left, right).reduce((prev, next) => {
                return prev * next;
            }, 1);

            if(tempSum<k){
                result++;
                right++;
            }else {
                left++;
            }
        }


        return result;
    };


    console.log('numSubarrayProductLessThanK', numSubarrayProductLessThanK([10, 5, 2, 6], 100));
}


//904
{

    var totalFruit = function(tree) {

        let record = new Map();
        let count = 0;
        let len = tree.length;
        let right = 0;
        let maxLen = 0;



        while (right<len) {
            let tempStr = tree[right];

            if(!record.has(tempStr) && record.size===2){
                let [x, y] = record.entries();

                if(x[1]>y[1]) {
                    record.delete(y[0]);
                    count = right - y[1];
                }else {
                    record.delete(x[0]);
                    count = right - x[1];
                }

            }else {
                count++;
            }

            maxLen = Math.max(maxLen, count);
            record.set(tempStr, right);
            right++;
        }


        return maxLen;

    };

    console.log('totalFruit', totalFruit([1, 0, 1, 4, 1, 4, 1, 2, 3]));

}


//1004
{

    var longestOnes = function(A, K) {
        let right = 0;
        let left = 0;
        let len = A.length;
        let count = 0;
        let maxLen = 0;


        while (right<len) {
            count += A[right] === 0;

            while (count>K) {
                count -= A[left++] === 0;
            }


            maxLen = Math.max(maxLen, right - left + 1);
            right++;
        }

        return maxLen;
    };


    console.log('longestOnes', longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
}




