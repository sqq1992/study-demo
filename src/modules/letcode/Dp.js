
// 动态规划

//204
{

    var countPrimes = function(n) {

        let array = new Array(n);
        array.fill(true, 0, n);


        for (let i=2;i*i<n;i++) {

            if(array[i]){
                for (let j=i*i;j<n;j+=i) {
                    array[j] = false;
                }
            }

        }

        let count = 0;
        for (let i=2;i<n;i++){
            if(array[i]) count++;
        }

        return count;
    };


    // console.log('countPrimes',countPrimes(5000000))

}


//509
{

    var fib = function(n) {

        let dp = new Array(n+1);
        dp.fill(0, 0, n+1);

        dp[1] = dp[2] = 1;

        for (let i=3;i<=n;i++){
            dp[i] = dp[i - 1] + dp[i - 2];
        }

        return dp[n];
    };

    var fib2 = function (n) {

        let record = new Map();

        let tempFunc = (record, n) => {

            if(n===1){
                return 1;
            }else if(n<1){
                return 0;
            }

            if(record.has(n)){
                return record.get(n);
            }

            record.set(n, tempFunc(record, n - 1) + tempFunc(record, n - 2));
            return record.get(n);
        };

        return tempFunc(record, n);
    };


    var fib3 = function (n) {

        if(n===0) return 0;
        if(n===1) return 1;
        let dp = new Array(n + 1);
        dp.fill(0, 0, n + 1);

        dp[1] = dp[2] = 1;


        for (let i=3; i<=n;i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }


        return dp[n];
    };

    var fib4 = function (n) {

        if(n===2 || n===1){
            return 1;
        }

        let prev = 1;
        let curr = 1;


        for (let i=3; i<=n;i++) {
            let sum = prev + curr;
            prev = curr;
            curr = sum;

        }

        return curr;
    };


    // console.log('fib3', fib3(4));


}


//322
{

    var coinChange = function(coins, amount) {

        let dp = new Array(amount + 1);
        dp.fill(amount + 1, 0, amount + 1);

        dp[0] = 0;


        for (let i=0;i<=amount;i++) {

            for (let coin of coins) {

                if(i-coin<0) continue;
                dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
            }

        }


        return dp[amount] !== amount + 1 ? dp[amount] : -1;
    };










    // var coinChange = function(coins, amount) {
    //
    //     let dp = (remain) => {
    //
    //         if(remain===0) return 0;
    //         if(remain<0){
    //             return -1;
    //         }
    //
    //         let res = amount + 1;
    //         for (let coin of coins){
    //             let tempVal = dp(remain - coin);
    //
    //             if(tempVal===-1) continue;
    //
    //             res = Math.min(res, 1 + tempVal);
    //         }
    //
    //         return res !== amount + 1 ? res : -1;
    //     };
    //
    //
    //     return dp(amount);
    // };


    // var coinChange = function(coins, amount) {
    //
    //     let dp = new Array(amount + 1);
    //     dp.fill(amount + 1, 0, amount + 1);
    //
    //
    //     dp[0] = 0;
    //     for (let i=0,j=dp.length;i<j;i++) {
    //         for (let coin of coins){
    //             if(i-coin){
    //                 continue;
    //             }
    //             dp[i] = Math.min(dp[i], 1+dp[i - coin]);
    //         }
    //     }
    //
    //     return dp[amount] === amount + 1 ? -1 : dp[amount];
    // };

    // console.log('coinChange', coinChange([1, 2, 5], 11));
    // console.log('coinChange2', coinChange2([1, 2, 5], 11));
    // console.log('coinChange', coinChange([1, 2, 5], 100));

}


//300
{

    var lengthOfLIS = function(nums) {

        let len = nums.length;
        let dp = new Array(len);
        dp.fill(1, 0, len);

        for (let i=1;i<len;i++) {
            for (let m=0;m<i;m++) {
                if(nums[i]>nums[m]){
                    dp[i] = Math.max(dp[i], dp[m] + 1);
                }
            }
        }

        return len < 2 ? 1 : Math.max(...dp);
    };

    // var lengthOfLIS = function(nums) {
    //     let len = nums.length;
    //     let dp = new Array(len);
    //     dp.fill(1, 0, len);
    //
    //     dp[0] = 1;
    //
    //     for (let i=1;i<len;i++) {
    //
    //         for (let j=0;j<i;j++) {
    //             if(nums[i]>nums[j]){
    //                 dp[i] = Math.max(dp[i], dp[j] + 1);
    //             }
    //         }
    //
    //     }
    //
    //     return len < 2 ? 1 : Math.max(...dp);
    // };



    // var lengthOfLIS = function(nums) {
    //
    //     let dp = new Array(nums.length);
    //     dp.fill(1, 0, nums.length);
    //
    //
    //     for (let i=1;i<nums.length;i++) {
    //
    //         for (let j=0;j<i;j++) {
    //             if(nums[i]>nums[j]){
    //                 dp[i] = Math.max(dp[i], dp[j] + 1);
    //             }
    //         }
    //
    //     }
    //
    //     return nums.length < 2 ? nums.length : Math.max(...dp);
    // };

    // console.log('lengthOfLIS', lengthOfLIS([10,9,2,5,3,7,101,18]));

}



//121
{

    var maxProfit = function(prices) {

        let n = prices.length;
        if(n<=1){
            return 0;
        }

        let dp = new Array(n);
        dp.fill([0, 0], 0, n);


        dp[0][0] = 0;
        dp[0][1] = -prices[0];

        for (let i=1;i<n;i++) {
            dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
            dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
        }

        return dp[n - 1][0];
    };

    // console.log('maxProfit',maxProfit( [7,1,5,3,6,4]))

}

//122
{

    var maxProfit = function(prices) {
        let n = prices.length;

        if(n<=1){
            return 0;
        }

        let dp = new Array(n);
        dp.fill([0, 0], 0, n);

        dp[0][0] = 0;
        dp[0][1] = -prices[0];

        for (let i=1;i<n;i++) {

            dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
            dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);

        }

        return dp[n - 1][0];

    };
    // console.log('maxProfit',maxProfit( [7,1,5,3,6,4]))

}


//309
{

    var maxProfit = function(prices) {



        let n = prices.length;

        if (n < 2) {
            return 0;
        }
        if (n === 2) {
            return Math.max(prices[1] - prices[0], 0)
        }
        let dp = new Array(n);
        for (let i = 0; i < n; i++) {
            dp[i] = [0, 0]
        }
        // base case
        // dp[0][0] = 0;
        dp[0][1] = -prices[0];
        dp[1][0] = Math.max(
            dp[0][0],
            dp[0][1] + prices[1]
        )
        dp[1][1] = Math.max(
            dp[0][1],
            dp[0][0] - prices[1]
        );

        // 状态转移
        for (let i = 2; i < n; i++) {
            dp[i][0] = Math.max(
                dp[i - 1][0],
                dp[i - 1][1] + prices[i]
            )
            dp[i][1] = Math.max(
                dp[i - 1][1],
                dp[i - 2][0] - prices[i]   // 买被限制在卖一天后了
            )
        }

        return dp[n - 1][0];





    };

    var maxProfit2 = (prices) => {

        let n = prices.length;

        if(n<=1){
            return 0;
        }

        let dp = [];
        for (let i=0;i<n;i++) {
            dp.push([0, 0]);
        }

        dp[0][0] = 0;
        dp[0][1] = -prices[0];
        dp[1][0] = Math.max(dp[0][0], dp[0][1] + prices[1]);
        dp[1][1] = Math.max(dp[0][1], dp[0][0] - prices[1]);

        for (let i=2;i<n;i++) {
            dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
            dp[i][1] = Math.max(dp[i-1][1],dp[i-2][0]-prices[i])
        }

        return dp[n - 1][0];

    };

    // console.log('maxProfit', maxProfit([1, 2, 3, 0, 2]));
    // console.log('maxProfit2', maxProfit2([1, 2, 3, 0, 2]));

}

//72
{

    var minDistance = function(word1, word2) {

        let word1Len = word1.length;
        let word2Len = word2.length;

        let dp = new Array(word1Len + 1);
        for (let i=0;i<=word1Len;i++) {
            dp[i] = new Array(word2Len + 1).fill(0);
        }

        for (let i=1;i<=word1Len;i++) {
            dp[i][0] = i;
        }

        for (let i=1;i<=word2Len;i++) {
            dp[0][i] = i;
        }


        for (let i=1;i<=word1Len;i++) {

            for (let j=1;j<=word2Len;j++) {

                if(word1[i-1]===word2[j-1]){
                    dp[i][j] = dp[i - 1][j - 1];
                }else {
                    dp[i][j] = Math.min(
                        dp[i-1][j]+1,
                        dp[i][j-1]+1,
                        dp[i-1][j-1]+1,
                    )
                }
            }

        }

        return dp[word1Len][word2Len];

    };

    console.log('minDistance', minDistance('intention', 'execution'));

}


//53
{

    var maxSubArray = function(nums) {
        let len = nums.length;
        let dp = [...nums];

        for (let i=1;i<len;i++) {
            dp[i] = Math.max(dp[i], dp[i] + dp[i - 1]);
        }

        return Math.max(...dp);
    };
    // console.log('maxSubArray', maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
}

//516
{

    var longestPalindromeSubseq = function(s) {

        let len = s.length;
        let dp = new Array(len);
        for (let i=0;i<len;i++) {
            dp[i] = new Array(len).fill(0);
            dp[i][i] = 1;
        }

        for (let m=len-2;m>=0;m--) {

            for (let n=m+1;n<len;n++) {

                if(s[m]===s[n]){
                    dp[m][n] = dp[m + 1][n - 1] + 2;
                }else {
                    dp[m][n] = Math.max(
                        dp[m + 1][n],
                        dp[m][n -1],
                    );
                }
            }

        }


        return dp[0][len-1]
    };






    var longestPalindromeSubseq = function(s) {

        let len = s.length;

        if(len<2){
            return len;
        }

        let dp = new Array(len);
        for (let i=0;i<len;i++) {
            dp[i] = new Array(len);
            dp[i].fill(0);

            dp[i][i] = 1;
        }


        for (let i=len-2;i>=0;i--) {

            for (let j=i+1;j<=len-1;j++) {

                if (s[i] === s[j]) {
                    dp[i][j] = dp[i + 1][j - 1] + 2;
                } else {
                    dp[i][j] = Math.max(
                        dp[i + 1][j],
                        dp[i][j - 1]
                    );
                }

            }

        }


        return dp[0][len - 1];

    };

    // console.log('longestPalindromeSubseq', longestPalindromeSubseq('bbbab'));

}

//416
{

    var canPartition = function(nums) {

        let sumCount = nums.reduce((prev, next) => {
            return prev + next;
        }, 0);

        if(sumCount%2!==0) return false;

        let sum = sumCount / 2;
        let len = nums.length;
        let dp = new Array(len + 1);
        for (let i=0;i<len+1;i++) {
            dp[i] = new Array(sum + 1).fill(false);
            dp[i][0] = true;
        }


        for (let i=1;i<=len;i++) {

            for (let j=1;j<=sum;j++) {

                if(j<nums[i-1]){
                    dp[i][j] = dp[i - 1][j];
                }else {
                    dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
                }

            }

        }


        return dp[len][sum];
    };


    // console.log('canPartition',canPartition([1,5,11,5]))
}

//518
{

    var change = function(amount, coins) {

        let len = coins.length;
        let dp = new Array(len + 1);
        for (let i=0;i<len+1;i++){
            dp[i] = new Array(amount + 1).fill(0);
            dp[i][0] = 1;
        }


        for (let i=1;i<=len;i++){
            for (let j=1;j<=amount;j++) {

                if(j>=coins[i-1]){
                    dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]];
                }else {
                    dp[i][j] = dp[i - 1][j];
                }

            }
        }

        return dp[len][amount];
    };

    console.log('change', change(5, [1, 2, 5]));
}

//931
{

    var minFallingPathSum = function(matrix) {
        let len = matrix.length;
        let dp = new Array(len);
        for (let i=0;i<len;i++) {
            dp[i] = new Array(len).fill(Number.MAX_SAFE_INTEGER);
        }


        for (let n=0;n<len;n++) {
            for (let m=0;m<len;m++) {

                let val = matrix[n][m];
                if(n===0){      //第一行
                    dp[n][m] = Math.min(dp[n][m], val);
                }else{
                    if (m > 0 && m  < len-1) {
                        dp[n][m] = Math.min(
                            dp[n - 1][m],
                            dp[n - 1][m + 1],
                            dp[n - 1][m - 1],
                        ) + val;
                    } else if (m===0) {
                        dp[n][m] = Math.min(
                            dp[n - 1][m],
                            dp[n - 1][m + 1],
                        ) + val;
                    } else if (m===len-1) {
                        dp[n][m] = Math.min(
                            dp[n - 1][m],
                            dp[n - 1][m - 1],
                        ) + val;
                    }

                }

            }

        }


        let min = Number.MAX_SAFE_INTEGER;
        for (let i=0;i<len;i++) {
            min = Math.min(min, dp[len - 1][i]);
        }

        return min;
    };

}


//877
{

    var stoneGame = function(piles) {



    };

}

//123
{



}


//124
{



}
