/**
 * 贪心算法
 */


//122
{

    var maxProfit = function(prices) {

        let profit = 0;
        let len = prices.length;


        for(let i=0;i<len-1;i++) {

            let diff = prices[i + 1] - prices[i];
            if(diff>0){
                profit += diff;
            }
        }

        return profit;

    };

    // console.log('maxProfit', maxProfit([7,1,5,3,6,4]));

}


//860
{
    var lemonadeChange = function(bills) {
        let len = bills.length;
        let ten = 0;
        let five = 0;

        for(let i=0;i<len;i++) {
            let tempVal = bills[i];

            if(tempVal===5){
                five++;
            }else if(tempVal===10){
                if(five){
                    five--;
                    ten++;
                }else {
                    return false;
                }
            }else if(tempVal===20){

                if(five && ten){
                    five--;
                    ten--;
                }else if(five>=3){
                    five = five - 3;
                }else {
                    return false;
                }


            }

        }


        return true;
    };


    // console.log('lemonadeChange', lemonadeChange([5,5,5,10,20]));
}

//435
{

    var eraseOverlapIntervals = function(intervals) {

        let tempFunc = (intervals) => {

            intervals = intervals.sort((a, b) => {
                return a[1] - b[1]
            });

            let count = 1;
            let end = intervals[0][1];
            for (let i=1,j=intervals.length;i<j;i++) {

                if(intervals[i][0]>=end){
                    count++;
                    end = intervals[i][1]
                }

            }

            return count;
        };

        return intervals.length - tempFunc(intervals)

    };

}

//452
{

    var findMinArrowShots = function(points) {

        points = points.sort((a, b) => {
            return a[1] - b[1]
        });

        let count = 1;
        let end = points[0][1];

        for (let i=1,j=points.length;i<j;i++) {
            let point = points[i];

            if(point[0]>end){
                count++;
                end = point[1];
            }
        }


        return count;
    };

}

//55
{

    var jump = function(nums) {

        let jumps = 0;
        let end = 0;
        let len = nums.length;
        let farthest = 0;
        for (let i=0,j=len-1;i<j;i++) {
            farthest = Math.max(nums[i] + i, farthest);
            if(end===i){
                jumps++;
                end = farthest;
            }
        }

        return jumps;
    };






    var canJump = function(nums) {

        let len = nums.length;
        let farthest = 0;
        for (let i=0;i<len-1;i++) {
            farthest = Math.max(farthest, i + nums[i]);

            if(farthest<=i) return false;
        }

        return farthest >= len - 1;
    };

}

//45
{

    var jump = function(nums) {

        let jumps = 0;
        let end = 0;
        let farthest = 0;
        for (let i=0,j=nums.length;i<j-1;i++){

            farthest = Math.max(nums[i]+i, farthest);

            if(end === i){
                jumps++;
                end = farthest;
            }

        }

        return jumps;

    };

}

//1024
{

    var videoStitching = function(clips, time) {

        if(time===0) return 0;

        clips = clips.sort((a,b)=>{

            if(a[0]===b[0]){
                return b[1] - a[1];
            }

            return a[0] - b[0];
        })

        let res = 0;
        let index = 0;
        let curEnd = 0;
        let len = clips.length;
        let nextEnd = 0;
        while (index<len && clips[index][0]<=curEnd) {

            while (index<len && clips[index][0]<=curEnd) {
                nextEnd = Math.max(nextEnd, clips[index][1]);
                index++;
            }
            res++;
            curEnd = nextEnd;

            if(curEnd>=time){
                return res;
            }

        }


        return -1;
    };

}
