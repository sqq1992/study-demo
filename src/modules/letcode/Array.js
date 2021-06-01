

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

    // console.log('removeDuplicates',removeDuplicates([1,1,2]))

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

    // console.log('hasGroupsSizeX',hasGroupsSizeX([1,1,1,1,2,2,2,2,2,2]))
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


    // console.log('removeDuplicateLetters', removeDuplicateLetters("cbacdcbc"));

}


//380
{


    var RandomizedSet = function() {
        this.map = {};
        this.arr = [];
    };

    /**
     * Inserts a value to the set. Returns true if the set did not already contain the specified element.
     * @param {number} val
     * @return {boolean}
     */
    RandomizedSet.prototype.insert = function(val) {
        let map = this.map;
        let arr = this.arr;

        if(map.hasOwnProperty(val)) return false;

        map[val] = arr.length;
        arr.push(val);

        return true;
    };

    /**
     * Removes a value from the set. Returns true if the set contained the specified element.
     * @param {number} val
     * @return {boolean}
     */
    RandomizedSet.prototype.remove = function(val) {
        let map = this.map;
        let arr = this.arr;

        if(!map.hasOwnProperty(val)) return false;

        let index = map[val];
        let lastIndex = arr.length - 1;
        let last = arr[lastIndex];

        [arr[index], arr[lastIndex]] = [arr[lastIndex], arr[index]];
        arr.pop();
        map[last] = index;
        delete map[val];
        return true;
    };

    /**
     * Get a random element from the set.
     * @return {number}
     */
    RandomizedSet.prototype.getRandom = function() {
        let arr = this.arr;
        return arr[Math.floor(Math.random() * arr.length)];
    };

}

//27
{

    var removeElement = function(nums, val) {

        let len = nums.length;
        let slow = 0;
        let fast = 0;

        while (fast<len){
            if(nums[fast]!==val){
                nums[slow] = nums[fast];
                slow++;
            }
            fast++;
        }


        return slow;
    };

    // console.log('removeElement', removeElement([3, 2, 2, 3], 3));

}

//283
{

    var moveZeroes = function(nums) {


        let removeElements = function (nums,val) {

            let len = nums.length;
            let slow = 0;
            let fast = 0;

            while (fast<len){

                if(nums[fast]!==val){
                    nums[slow] = nums[fast];
                    slow++;
                }
                fast++;
            }

            return slow;
        };

        let index = removeElements(nums, 0);
        for (let len = nums.length;index<len;index++){
            nums[index] = 0;
        }

        return nums;
    };

}