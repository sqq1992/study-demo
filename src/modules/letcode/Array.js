

//26
{

    var removeDuplicates = function(nums) {
        let len = nums.length;
        if(len===0) return 0;

        let left = 0;
        let right = 1;

        while (right<len){

            if(nums[right]!==nums[left]){
                left++;
                nums[left] = nums[right];
            }

            right++;
        }

        return left + 1;
    };

}


//17
{

    var letterCombinations = function(digits) {
        let map = {
            2: "abc",
            3: "def",
            4: "ghi",
            5: "jkl",
            6: "mno",
            7: "pqrs",
            8: "tuv",
            9: "wxyz",
        };
        let arrs = digits.split("").map((elem) => {
            return map[elem].split("")
        });
        let result = [];
        let tempResult = [];

        for(let i=0,j=arrs.length;i<j;i++) {
            let tempArr = arrs[i];
            tempResult = [];

            for(let n=0,m=tempArr.length;n<m;n++) {
                if(result.length){
                    result.forEach((elem)=>{
                        tempResult.push(elem + tempArr[n]);
                    })
                }else {
                    tempResult.push(tempArr[n]);
                }
            }
            result = [...tempResult];
        }


        return result;
    };


}

//
{
    var hasGroupsSizeX = function(deck) {
        let record = {};
        let minNum;
        deck.forEach((elem) => {
            if (record[elem]) {
                record[elem]++;
            } else {
                record[elem] = 1;
            }
        });
        for(let i in record){
            if(!minNum){
                minNum = record[i];
            }else {
                minNum = Math.min(minNum, record[i]);
            }
        }


        if(minNum>1){
            for(let i in record) {
                if(record[i]%minNum!==0){
                    return false;
                }
            }
            return true;
        }

        return false;
    };

    console.log('hasGroupsSizeX',hasGroupsSizeX([1,1,1,1,2,2,2,2,2,2]))
}



//905
{

    var sortArrayByParity = function(A) {

        let evenArray = [];
        let oddArray = [];

        A.forEach((elem)=>{

            if(elem%2===0){
                evenArray.push(elem);
            }else {
                oddArray.push(elem);
            }

        })

        return evenArray.concat(oddArray);

    };

}

//402
{

    var removeKdigits = function(num, k) {

        let stack = [];

        for (let i=0,j=num.length;i<j;i++) {

            while (k>0 && stack.length && stack[stack.length-1]>num[i]){
                stack.pop();
                k--;
            }
            stack.push(num[i]);
        }

        for (;k>0;k--){
            stack.pop();
        }


        let result = stack.join('').replace(/\b(0+)/gi, '');

        return result.length === 0 ? '0' : result;
    };

    // console.log('removeKdigits', removeKdigits("112", 1));

}


//316
{

    var removeDuplicateLetters = function(s) {

        let stack = [];

        for (let i=0,j=s.length;i<j;i++) {
            let val = s[i];

            if(stack.includes(val)) continue;
            while (stack.length && stack[stack.length-1]>val && s.indexOf(stack[stack.length-1],i+1)>-1){
                stack.pop();
            }
            stack.push(val);
        }

        return stack.join('');
    };


    console.log('removeDuplicateLetters', removeDuplicateLetters("cbacdcbc"));

}

