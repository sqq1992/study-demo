/**
 *  滑动窗口
 */

//438
{

    var findAnagrams = function(s, p) {

        let left = 0;
        let right = 0;
        let sLen = s.length;
        let pLen = p.length;
        let sRecordMap = new Map();
        let pRecordMap = new Map();
        let res = [];


        for (let str of p){
            pRecordMap.set(str, (pRecordMap.get(str) || 0) + 1);
        }

        let isEqual = function (pRecordMap,sRecordMap) {
            for (let [key,value] of pRecordMap){
                if(sRecordMap.get(key)!==value){
                    return false;
                }
            }
            return true;
        };

        while (right<sLen){

            if(right-left+1>pLen){
                sRecordMap.set(s[left], sRecordMap.get(s[left]) - 1);
                left++;
            }

            sRecordMap.set(s[right], (sRecordMap.get(s[right]) || 0) + 1);

            if ((right - left + 1 === pLen) && isEqual(pRecordMap, sRecordMap)) {
                res.push(left);
            }

            right++;
        }

        return res;
    };

    // console.log('findAnagrams', findAnagrams("cbaebabacd", "abc"));
}

//567
{

    var checkInclusion = function(s1, s2) {

        let left = 0;
        let right = 0;
        let s1Len = s1.length;
        let s2Len = s2.length;
        let s1RecordMap = new Map();
        let s2RecordMap = new Map();

        for (let str of s1){
            s1RecordMap.set(str, (s1RecordMap.get(str) || 0) + 1);
        }

        let isEqual = function (s1Record,s2Record) {
            for (let [key,value] of s1Record){
                if(s2Record.get(key)!==value){
                    return false;
                }
            }
            return true;
        };

        while (right<s2Len){

            if(right-left+1>s1Len){
                s2RecordMap.set(s2[left], s2RecordMap.get(s2[left]) - 1);
                left++;
            }

            s2RecordMap.set(s2[right],(s2RecordMap.get(s2[right]) || 0) + 1)
            if ((right - left + 1 === s1Len) && isEqual(s1RecordMap, s2RecordMap)) {
                return true;
            }

            right++;
        }

        return false;
    };

    // console.log('checkInclusion', checkInclusion("adc", "dcda"));

}

//76
{
    var minWindow = function(s, t) {

        let left = 0;
        let right = 0;
        let len = s.length;
        let minLen = s.length+1;
        let start = s.length;
        let map = {};
        let missingType = 0;
        for (let str of t){
            if(!map[str]){
                map[str] = 1;
                missingType++;
            }else {
                map[str]++;
            }
        }

        while (right<len) {

            let rightStr = s[right];
            if(map[rightStr]!==undefined) map[rightStr]--;
            if(map[rightStr]===0) missingType--;

            while (missingType===0){

                if(right-left+1<minLen) {
                    minLen = right - left + 1;
                    start = left;
                }

                let leftStr = s[left];
                if(map[leftStr]!==undefined) map[leftStr]++;
                if(map[leftStr]>0) missingType++;
                left++;
            }

            right++;
        }


        if(start===len) return '';
        return s.substring(start, start + minLen);
    };

    // console.log('minWindow', minWindow("a", "a"));
}


//3
{

    var lengthOfLongestSubstring = function(s) {

        let left = 0;
        let right = 0;
        let len = s.length;
        let maxLen = 0;
        let record = new Map();

        while (right<len){
            let str = s[right];

            if(record.has(str)){
                let prevIndex = record.get(str);
                left = prevIndex < left ? left : prevIndex + 1;
            }

            maxLen = Math.max(maxLen, right - left + 1);
            record.set(str, right);
            right++;
        }

        return maxLen;
    };

    // console.log('lengthOfLongestSubstring', lengthOfLongestSubstring("abcabcbb"));

}

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

    // console.log('intervalIntersection', intervalIntersection([[0, 2], [5, 10], [13, 23], [24, 25]], [[1, 5], [8, 12], [15, 24], [25, 26]]));

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


    // console.log('numSubarrayProductLessThanK', numSubarrayProductLessThanK([10, 5, 2, 6], 100));
}


//904
{

    var totalFruit = function(tree) {

        let len = tree.length;
        let end = 0;
        let record = new Map();
        let count = 0;
        let maxLen = 0;

        while (end<len) {

            let tempStr = tree[end];

            if(!record.has(tempStr) && record.size===2){
                let [x, y] = record.entries();

                if(x[1]>y[1]){
                    record.delete(y[0]);
                    count = end - y[1];
                }else {
                    record.delete(x[0]);
                    count = end - x[1];
                }
            }else {
                count++;
            }

            record.set(tempStr, end);
            end++;
            maxLen = Math.max(maxLen, count);
        }

        return maxLen;
    };

    // console.log('totalFruit', totalFruit([1, 0, 1, 4, 1, 4, 1, 2, 3]));

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


    // console.log('longestOnes', longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
}


//845
{
    var longestMountain = function(arr) {

        let len = arr.length;
        let index = 1;
        let maxLen = 0;
        let increasing = 0;
        let decreasing = 0;
        while (index<len) {
            increasing = 0;
            decreasing = 0;

            while (index<len && arr[index]>arr[index-1]){
                index++;
                increasing++;
            }
            while (index<len && arr[index]<arr[index-1]){
                index++;
                decreasing++;
            }

            if(increasing>0 && decreasing>0){
                maxLen = Math.max(maxLen, increasing + decreasing + 1);
            }

            while (index<len && arr[index]===arr[index-1]){
                index++;
            }

        }

        return maxLen;
    };

    // console.log('longestMountain', longestMountain([0,2,0,2,1,2,3,4,4,1]));



    // var longestMountain = function(A) {
    //     let len = A.length;
    //     let base = 0;
    //     let end = 0;
    //     let result = 0;
    //
    //     while (base<len) {
    //         end = base;
    //
    //
    //         if(end+1<len && A[end]<A[end+1]) {
    //
    //             while (end+1<len && A[end]<A[end+1]){
    //                 end++;
    //             }
    //
    //             if(end+1<len && A[end]>A[end+1]){
    //
    //                 while (end+1<len && A[end]>A[end+1]){
    //                     end++;
    //                 }
    //                 result = Math.max(result, end - base + 1);
    //             }
    //
    //         }
    //
    //         base = Math.max(end, base + 1);
    //
    //     }
    //
    //     return result;
    //
    // };
}

//42
{
    var trap = function(height) {

        let len = height.length;
        if(len<=2){
            return 0;
        }

        let res = 0;


        let leftMax = new Array(len);
        let rightMax = new Array(len);

        leftMax[0] = height[0];
        rightMax[len - 1] = height[len - 1];


        for (let i = 1; i < len; i++) {
            leftMax[i] = Math.max(height[i], leftMax[i - 1]);
        }

        for (let i=len-2;i>=0;i--) {
            rightMax[i] = Math.max(height[i], rightMax[i + 1]);
        }

        for (let i=1;i<len;i++) {
            res += Math.min(leftMax[i], rightMax[i]) - height[i];
        }

        return res;
    };

    // console.log('trap', trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
}