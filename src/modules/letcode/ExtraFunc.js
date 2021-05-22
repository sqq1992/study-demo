
/**
 *  小方式tips
 **/

//645
{

    var findErrorNums = function(nums) {


    };

}

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