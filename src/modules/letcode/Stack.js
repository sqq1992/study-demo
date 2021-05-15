


//496
{

    var nextGreaterElement = function(nums1, nums2) {

        let record = new Map();
        let stack = [];


        for (let i=0,j=nums2.length;i<j;i++) {
            let tempVal = nums2[i];

            while (stack.length>0 && nums2[stack[stack.length-1]]<tempVal) {
                let tempIndex = stack.pop();
                record.set(nums2[tempIndex], tempVal);
            }

            stack.push(i);
        }

        return nums1.map((elem)=>{

            if(record.has(elem)){
                return record.get(elem);
            }else {
                return -1;
            }

        })



    };



    //
    // var nextGreaterElement = function(nums1, nums2) {
    //
    //     let stack = [];
    //     let record = new Map();
    //     for(let i=0,j=nums2.length;i<j;i++) {
    //         while(stack.length>=1 && stack[stack.length-1]<nums2[i]){
    //             let tempKey = stack.pop();
    //             record.set(tempKey, nums2[i]);
    //         }
    //         stack.push(nums2[i]);
    //     }
    //
    //     return nums1.map((elem)=>{
    //         if(record.has(elem)){
    //             return record.get(elem);
    //         }
    //         return -1
    //     })
    //
    // };

    // console.log('nextGreaterElement',nextGreaterElement([1,3,5,2,4],[6,5,4,3,2,1,7]))

}

//503
{

    var nextGreaterElements = function(nums) {

        let stack = [];
        let len = nums.length;
        let result = Array.from(nums).fill(-1);

        for (let i=0,j=len*2;i<j;i++) {
            let index = i % len;
            let val = nums[index];

            while (stack.length>0 && nums[stack[stack.length-1]]<val) {
                let tempIndex = stack.pop();
                result[tempIndex] = val;
            }

            stack.push(index);
        }

        return result;
    };



    // var nextGreaterElements = function(nums) {
    //     let stack = [];
    //     let len = nums.length;
    //     let res = Array.from(nums).fill(-1);
    //
    //     for(let i=0,j=len*2;i<j;i++) {
    //         let index = i % len;
    //         let str = nums[index];
    //
    //         while(stack.length && nums[stack[stack.length-1]]<str) {
    //             res[stack.pop()] = nums[index];
    //         }
    //
    //         stack.push(index);
    //     }
    //
    //
    //     return res;
    // };


    // console.log('nextGreaterElements',nextGreaterElements([1,2,1]))
}


//20
{

    var isValid = function (s) {

        let stack = [];
        let map = {
            "(": ")",
            "{": "}",
            "[": "]",
        };
        for (let i = 0, j = s.length; i < j; i++) {
            let tempStr = s[i];


            if(tempStr in map){
                stack.push(tempStr);
            }else {
                let popStr = stack.pop();
                if(map[popStr]!==tempStr) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    };

}

//71
{

    var simplifyPath = function(path) {

        let pathArr = path.split('/');
        let stack = [];


        for (let val of pathArr){

            if(val==="" || val==="."){
                continue;
            }

            if(val===".."){
                stack.length && stack.pop();
            }else {
                stack.push(val);
            }

        }


        return '/' + stack.join('/');
    };

}

//682
{
    var calPoints = function(ops) {
        let tempResult = [];

        for(let i=0,j=ops.length;i<j;i++) {
            let tempStr = ops[i];

            if(tempStr==="+"){
                let tempSumVal = tempResult.slice(-2).reduce((prev, next) => {
                    return prev + next;
                }, 0);
                tempResult.push(tempSumVal);
            }else if(tempStr==="D"){
                tempResult.push(tempResult[tempResult.length - 1] * 2);
            }else if(tempStr==="C"){
                tempResult.pop();
            }else {
                tempResult.push(Number(tempStr));
            }


        }

        return tempResult.reduce((prev, next) => {
            return prev + next;
        }, 0);
    };

    // console.log('calPoints', calPoints(["5","-2","4","C","D","9","+","+"]));
}


//739
{


    var dailyTemperatures = function(T) {


        let stack = [];
        let result = Array.from(T).fill(0);

        for(let i=0,j=T.length;i<j;i++) {
            let tempVal = T[i];

            while (stack.length>0 && T[stack[stack.length-1]]<tempVal) {
                let tempIndex = stack.pop();
                result[tempIndex] = i - tempIndex;
            }
            stack.push(i);
        }


        return result;

    };

    // var dailyTemperatures = function(T) {
    //     let stack = [];
    //     let result = Array.from(T).fill(0);
    //
    //     for(let i=0,j=T.length;i<j;i++) {
    //         let tempNum = T[i];
    //
    //         while (stack.length && T[stack[stack.length-1]]<tempNum){
    //             let tempIndex = stack.pop();
    //             result[tempIndex] = i - tempIndex;
    //         }
    //
    //
    //         stack.push(i);
    //     }
    //
    //
    //     return result;
    // };

    var dailyTemperatures = function(T) {

        let stack = [];
        let len = T.length;
        let result = [...new Array(len)].map((elem) => {
            return 0
        });

        for(let i=0;i<len;i++) {

            while (stack.length && T[i]>T[stack[stack.length-1]]){
                let pre = stack.pop();
                result[pre] = i - pre;
            }
            stack.push(i);
        }

        return result;

    };
    // console.log('dailyTemperatures', dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

}


//844
{

    var backspaceCompare = function(S, T) {

        var temFunc = function (str) {
            var result = [];
            for(let i=0,j=str.length;i<j;i++) {
                if(str[i]==="#"){
                    result.pop();
                }else {
                    result.push(str[i]);
                }
            }

            return result.join('');
        };


        return temFunc(S) === temFunc(T);
    };
}


//1047
{

    var removeDuplicates = function(S) {
        let stack = [];

        for(let i=0,j=S.length;i<j;i++) {
            let tempStr = S[i];
            if(!stack.length && stack[stack.length-1]===tempStr){
                stack.pop();
            }else {
                stack.push(tempStr);
            }
        }

        return stack.join('');
    };



}

//321
{

    var maxNumber = function(nums1, nums2, k) {


        let getMaxArr = function (arr, remain) {

            let stack = [];
            let k = arr.length - remain;
            for (let i=0,j=arr.length;i<j;i++) {
                while (stack.length && k>0 && stack[stack.length-1]<arr[i]){
                    stack.pop();
                    k--;
                }
                stack.push(arr[i]);
            }

            for (;k>0;k--){
                stack.pop();
            }

            return stack;
        };

        let res = "0";
        for (let i=0;i<=k;i++) {
            let maxNums1 = getMaxArr(nums1, i);
            let maxNums2 = getMaxArr(nums2, k-i);

            if(maxNums1.length+maxNums2.length===k) {
                let cur = [];
                while (maxNums1.length && maxNums2.length) {
                    cur.push(maxNums1[0] >= maxNums2[0] && maxNums1 > maxNums1 ? maxNums1.shift() : maxNums2.shift());
                }
                cur = [...cur, ...maxNums1, ...maxNums2];
                res = cur > res ? cur : res;
            }


        }

        return res;
    };


    var maxNumber2 = function(nums1, nums2, k) {

        var getLargestKdigits = function (num, remian) {  // 402.题逻辑
            const stack = [];
            let k = num.length - remian;
            for (let i = 0; i < num.length; i++) {
                while (k > 0 && stack.length && num[i] > stack[stack.length - 1]) {
                    stack.pop();
                    k--;
                }
                stack.push(num[i]);
            }
            return stack.slice(0, remian);
        };

        let res = "0";
        for (let i = 0; i <= k; i++) {
            const max1 = getLargestKdigits(nums1, i);
            const max2 = getLargestKdigits(nums2, k - i);
            if (max1.length + max2.length === k) {
                let cur = [];
                while (max1.length && max2.length) {
                    cur.push(
                        max1[0] >= max2[0] && max1 > max2 ? max1.shift() : max2.shift()
                    );
                }
                cur = [...cur, ...max1, ...max2];
                res = cur > res ? cur : res;
            }
        }
        return res;
    };

    // console.log('maxNumber', maxNumber([3,4,6,5], [9,1,2,5,8,3], 5));
    // console.log('maxNumber', maxNumber2([3,4,6,5], [9,1,2,5,8,3], 5));

}


//1081
{

    var smallestSubsequence = function(s) {

        let stack = [];


        for (let i=0,j=s.length;i<j;i++) {
            let str = s[i];

            if(stack.includes(str)) continue;
            while (stack.length && stack[stack.length-1]>str && s.indexOf(stack[stack.length-1],i+1)>-1){
                stack.pop();
            }

            stack.push(str);
        }


        return stack.join('')
    };

}