
/**
 *  小方式tips
 **/

//560
{

    var subarraySum = function(nums, k) {

        let preSum = [];
        preSum[0] = 0;
        let len = nums.length;
        let res = 0;
        for (let i=0;i<len;i++){
            preSum[i + 1] = preSum[i] + nums[i];
        }

        for (let i=1;i<=len;i++){

            for (let j=0;j<=i;j++){
                if((preSum[i]-preSum[j])===k){
                    res++;
                }
            }

        }


        return res;

    };


    var subarraySum2 = function(nums, k) {

        let preSumMap = new Map();
        preSumMap.set(0, 1);

        let sum_i = 0;
        let res = 0;
        for (let i=0,j=nums.length;i<j;i++){
            sum_i += nums[i];

            let sum_j = sum_i - k;

            if(preSumMap.has(sum_j)){
                res += preSumMap.get(sum_j);
            }

            if(preSumMap.has(sum_i)){
                preSumMap.set(sum_i, preSumMap.get(sum_i) + 1);
            }else {
                preSumMap.set(sum_i, 1);
            }

        }

        return res;
    };


}


//1109
{

    var corpFlightBookings = function(bookings, n) {

        class Difference{
            constructor(nums) {
                let len = nums.length;
                this.diff = new Array(len);
                this.diff[0] = nums[0];

                for (let i=1;i<len;i++){
                    this.diff[i] = nums[i] - nums[i - 1];
                }
            }

            increment(i,j,val){
                this.diff[i] += val;
                if((j+1)<this.diff.length){
                    this.diff[j + 1] -= val;
                }
            }

            result(){
                let len = this.diff.length;
                let res = new Array(len);
                res[0] = this.diff[0];
                for (let i=1;i<len;i++){
                    res[i] = res[i - 1] + this.diff[i];
                }
                return res;
            }


        }


        let nums = new Array(n).fill(0);

        let df = new Difference(nums)

        for (let booking of bookings){

            df.increment(booking[0] - 1, booking[1] - 1, booking[2]);

        }

        return df.result();
    };



}

//448
{
    var findDisappearedNumbers = function(nums) {

        for (let i = 0; i < nums.length; i++) {
            let newIndex = Math.abs(nums[i]) - 1;
            if (nums[newIndex] > 0) {
                nums[newIndex] *= -1;
            }
        }


        let result = [];
        for (let i=1,j=nums.length;i<=j;i++){

            if(nums[i-1]>0){
                result.push(i);
            }

        }

        return result;
    };

    // console.log('findDisappearedNumbers',findDisappearedNumbers([4,3,2,7,8,2,3,1]))

}

//645
{

    var findErrorNums = function(nums) {

        let dup = -1;
        let len = nums.length;
        for (let i=0;i<len;i++){
            let index = Math.abs(nums[i]) - 1;

            if(nums[index]<0){
                dup = Math.abs(nums[i]);
            }else {
                nums[index] = nums[index] * -1;
            }

        }

        let missing = -1;
        for (let i=0;i<len;i++){
            if(nums[i]>0){
                missing = i + 1;
            }
        }


        return [dup, missing];
    };

    // console.log('findErrorNums', findErrorNums([2, 2]));

}

//384
{

    /**
     * @param {number[]} nums
     */
    var Solution = function(nums) {
        this.resetNums = [...nums]
        this.nums = [...nums];
    };

    /**
     * Resets the array to its original configuration and return it.
     * @return {number[]}
     */
    Solution.prototype.reset = function() {

        this.nums = [...this.resetNums];
        return this.nums
    };

    /**
     * Returns a random shuffling of the array.
     * @return {number[]}
     */
    Solution.prototype.shuffle = function() {

        let swap=(arr,a,b)=>{
            let temp = arr[a];
            arr[a] = arr[b];
            arr[b] = temp;
        }
        let rand = (min,max) => {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };

        let len = this.nums.length;

        for (let i=0;i<len;i++){
            let randNum = rand(i, len - 1);
            swap(this.nums, i, randNum);
        }
        return this.nums;
    };

    /**
     * Your Solution object will be instantiated and called as such:
     * var obj = new Solution(nums)
     * var param_1 = obj.reset()
     * var param_2 = obj.shuffle()
     */

}


/**
 *  水塘抽样 382 398
 **/

//382
{

    var Solution = function(head) {
        this.head = head;
    };

    Solution.prototype.getRandom = function() {
        let head = this.head;
        let res;
        let index = 0;

        while (head){
            if(Math.floor(Math.random()*(++index))===0){
                res = head.val
            }
            head = head.next;
        }

        return res;
    };

}

//398
{
    var Solution = function(nums) {
        this.nums = nums;
    };

    /**
     * @param {number} target
     * @return {number}
     */
    Solution.prototype.pick = function(target) {
        let res;
        let count = 0;

        this.nums.forEach((elem,index)=>{

            if(elem===target){
                if(Math.floor(Math.random()*(++count))===0){
                    res = index;
                }
            }
        })

        return res;
    };
}

//895
{

    var FreqStack = function() {
        this.maxFreq = 0;
        this.valsToFreq = {};    //{a:1}
        this.freqToVals = {};   //{1:[a,b]}
    };

    /**
     * @param {number} val
     * @return {void}
     */
    FreqStack.prototype.push = function(val) {

        let freq = (this.valsToFreq[val] || 0) + 1;
        this.valsToFreq[val] = freq;

        if(!this.freqToVals[freq]){
            this.freqToVals[freq] = [];
        }
        this.freqToVals[freq].push(val);
        this.maxFreq = Math.max(this.maxFreq, freq);
    };

    /**
     * @return {number}
     */
    FreqStack.prototype.pop = function() {

        let valsArr = this.freqToVals[this.maxFreq];
        let val = valsArr.pop();

        let freq = this.valsToFreq[val] - 1;
        this.valsToFreq[val] = freq;

        if(!valsArr.length){
            this.maxFreq--;
        }
        return val;
    };

    /**
     * Your FreqStack object will be instantiated and called as such:
     * var obj = new FreqStack()
     * obj.push(val)
     * var param_2 = obj.pop()
     */



}


//215
{

    var findKthLargest = function(nums, k) {

        let swap = function (nums,i,j) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        };

        let partition = function (nums,low,high) {
            if(low===high) return low;

            let pivot = nums[low];
            let i = low;
            let j = high + 1;
            while (true){

                while (nums[++i]<pivot){
                    if(i===high) break;
                }

                while (nums[--j]>pivot){
                    if(j===low) break;
                }

                if(i>=j) break;

                swap(nums, i, j);
            }


            swap(nums, j, low);
            return j;
        }


        let lo = 0;
        let hi = nums.length - 1;
        let minK = nums.length - k;

        while (lo<=hi){

            let p = partition(nums, lo, hi);
            if(p<minK){
                lo = p + 1;
            }else if(p>minK){
                hi = p - 1;
            }else {
                return nums[p]
            }

        }

        return -1;
    };

    // console.log('findKthLargest', findKthLargest([3, 2, 1, 5, 6, 4], 2));

}