


//496
{

    var nextGreaterElement = function(nums1, nums2) {

        let stack = [];
        let record = new Map();
        for(let i=0,j=nums2.length;i<j;i++) {
            while(stack.length>=1 && stack[stack.length-1]<nums2[i]){
                let tempKey = stack.pop();
                record.set(tempKey, nums2[i]);
            }
            stack.push(nums2[i]);
        }

        return nums1.map((elem)=>{
            if(record.has(elem)){
                return record.get(elem);
            }
            return -1
        })

    };

    // console.log('nextGreaterElement',nextGreaterElement([1,3,5,2,4],[6,5,4,3,2,1,7]))

}

//503
{

    var nextGreaterElements = function(nums) {
        let stack = [];
        let len = nums.length;
        let res = Array.from(nums).fill(-1);

        for(let i=0,j=len*2;i<j;i++) {
            let index = i % len;
            let str = nums[index];

            while(stack.length && nums[stack[stack.length-1]]<str) {
                res[stack.pop()] = nums[index];
            }

            stack.push(index);
        }


        return res;
    };


    console.log('nextGreaterElements',nextGreaterElements([1,2,1]))
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

    console.log('calPoints', calPoints(["5","-2","4","C","D","9","+","+"]));
}


//739
{

    var dailyTemperatures = function(T) {
        let stack = [];
        let result = Array.from(T).fill(0);

        for(let i=0,j=T.length;i<j;i++) {
            let tempNum = T[i];

            while (stack.length && T[stack[stack.length-1]]<tempNum){
                let tempIndex = stack.pop();
                result[tempIndex] = i - tempIndex;
            }


            stack.push(i);
        }


        return result;
    };


















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
    console.log('dailyTemperatures', dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

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
