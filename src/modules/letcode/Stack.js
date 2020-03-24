

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
