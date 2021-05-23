
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

        if(n===0) return 0;
        if(n===1) return 1;

        let pre = 0;
        let cur = 1;
        for (let i=2;i<=n;i++){
            let sum = pre + cur;
            pre = cur;
            cur = sum;
        }

        return cur;
    };

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

    // console.log('lengthOfLIS', lengthOfLIS([10,9,2,5,3,7,101,18]));

}


/**
 * 股票买卖
 */

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

//123
{

    var maxProfit = function(prices) {

        let len = prices.length;
        let dp = new Array(len);
        for (let i=0;i<len;i++){
            dp[i] = [[0, 0], [0, 0], [0, 0]];
        }

        dp[0][0][0] = 0;
        dp[0][1][1] = -prices[0];
        dp[0][2][1] = -prices[0];

        for (let i=1;i<len;i++) {

            for (let k=1;k<=2;k++) {

                dp[i][k][0] = Math.max(
                    dp[i - 1][k][0],
                    dp[i - 1][k][1] + prices[i]
                );

                dp[i][k][1] = Math.max(
                    dp[i - 1][k][1],
                    dp[i - 1][k - 1][0] - prices[i]
                );

            }
        }


        return dp[len - 1][2][0];
    };

    // console.log('maxProfit',maxProfit([1,2,3,4,5]))

}

//188
{

    var maxProfit = function(k, prices) {

        let len = prices.length;

        if(len<=1){
            return 0;
        }

        let dp = new Array(len);

        for (let i=0;i<len;i++) {
            dp[i] = [];
            for (let j=0;j<=k;j++){
                dp[i].push([0, -prices[0]]);
            }
        }


        for (let i=1;i<len;i++) {
            for (let j=1;j<=k;j++) {

                dp[i][j][0] = Math.max(
                    dp[i - 1][j][0],
                    dp[i - 1][j][1] + prices[i]
                );

                dp[i][j][1] = Math.max(
                    dp[i - 1][j][1],
                    dp[i - 1][j - 1][0] - prices[i]
                );

            }
        }

        return dp[len - 1][k][0];
    };

    // console.log('maxProfit', maxProfit(1, [1,2]));

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

}

//714
{
    var maxProfit = function(prices, fee) {

        let len = prices.length;
        if(len<2) {
            return 0
        }

        let dp = new Array(len);
        for (let i=0;i<len;i++){
            dp[i] = [0, 0];
        }


        dp[0][1] = -prices[0] - fee;

        for (let i=1;i<len;i++) {

            dp[i][0] = Math.max(
                dp[i-1][0],
                dp[i-1][1] + prices[i]
            )
            dp[i][1] = Math.max(
                dp[i-1][1],
                dp[i-1][0]-prices[i]-fee
            )

        }

        return dp[len-1][0]

    };
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

    // console.log('minDistance', minDistance('intention', 'execution'));

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

    // console.log('change', change(5, [1, 2, 5]));
}

//64
{

    var minPathSum = function(grid) {

        let mLen = grid.length;
        let nLen = grid[0].length;

        let dp = new Array(mLen);
        for (let i=0;i<mLen;i++){
            dp[i] = new Array(nLen).fill(0);
        }
        dp[0][0] = grid[0][0];

        for (let i=1;i<mLen;i++){
            dp[i][0] = dp[i - 1][0] + grid[i][0];
        }

        for (let j=1;j<nLen;j++){
            dp[0][j] = dp[0][j-1] + grid[0][j];
        }

        for (let m=1;m<mLen;m++){

            for (let n=1;n<nLen;n++){

                dp[m][n] = Math.min(
                    dp[m - 1][n],
                    dp[m][n - 1]
                ) + grid[m][n];

            }

        }


        return dp[mLen-1][nLen-1]
    };


    // console.log('minPathSum',minPathSum([[1,2,3],[4,5,6]]))
}

//931
{

    var minFallingPathSum = function(matrix) {

        let len = matrix.length;
        let dp = new Array(len);
        for (let i=0;i<len;i++){
            dp[i] = new Array(len).fill(Number.MAX_SAFE_INTEGER);
        }

        for (let m=0;m<len;m++){

            for (let n=0;n<len;n++){

                let val = matrix[m][n];
                if(m===0){
                    dp[m][n] = Math.min(dp[m][n], val);
                }else {

                    if(n>0 && n<len-1){
                        dp[m][n] = Math.min(
                            dp[m - 1][n],
                            dp[m - 1][n - 1],
                            dp[m - 1][n + 1],
                        ) + val;
                    }else if(n===0){
                        dp[m][n] = Math.min(
                            dp[m - 1][n],
                            dp[m - 1][n + 1],
                        ) + val;
                    }else if(n===len-1){
                        dp[m][n] = Math.min(
                            dp[m - 1][n],
                            dp[m - 1][n - 1],
                        ) + val;
                    }

                }

            }

        }


        return Math.min(...dp[len - 1]);
    };

}


/**
 *  打家劫舍
 */
//198
{

    var rob = function(nums) {

        let len = nums.length;
        let dp = new Array(len + 2);
        dp.fill(0);

        for (let i=len-1;i>=0;i--){
            dp[i] = Math.max(
                dp[i + 1],
                nums[i] + dp[i + 2]
            );
        }

        return dp[0];

    };

    var rob2 = function(nums) {

        let len = nums.length;


        let dp_i = 0
        let dp_i_1 = 0;
        let dp_i_2 = 0;

        for (let i=len-1;i>=0;i--){
            dp_i = Math.max(
                dp_i_1,
                nums[i] + dp_i_2
            );
            dp_i_2 = dp_i_1;
            dp_i_1 = dp_i;
        }

        return dp_i;

    };

    // console.log('rob', rob([1, 2, 3, 1]));

}

//213
{

    var rob = function(nums) {

        let len = nums.length;
        if(len<2){
            return nums[0];
        }

        let tempFunc = (nums,start,end) => {

            let dp_i = 0;
            let dp_i_1 = 0;
            let dp_i_2 = 0;
            for (let i=end;i>=start;i--){
                dp_i = Math.max(
                    dp_i_1,
                    nums[i] + dp_i_2
                );
                dp_i_2 = dp_i_1;
                dp_i_1 = dp_i;
            }

            return dp_i;
        };


        return Math.max(
            tempFunc(nums,0, len-2),
            tempFunc(nums,1, len-1),
        )

    };

}

//887
{

    var superEggDrop = function(k, n) {

        let memo = {};
        let dp = (K,N) => {

            if(K===1) return N;
            if(N===0) return 0;

            let key = K + ',' + N;
            if(memo[key]!==undefined){
                return memo[key]
            }


            let res = Infinity;
            // 穷举所有的可能的选择
            for (let i = 1; i < N + 1; i++) {
                res = Math.min(
                    res,
                    Math.max(
                        dp(K, N - i),
                        dp(K - 1, i - 1)
                    ) + 1
                )
            }

            // 记入备忘录
            memo[key] = res;
            return res;
        };

        return dp(k, n);
    };

    
    // console.log('superEggDrop', superEggDrop(3, 15));

}

//354
{

    var maxEnvelopes = function(envelopes) {

        let len = envelopes.length;
        if(len<2){
            return 1;
        }
        envelopes = envelopes.sort((a,b)=>{

            if(a[0]!==b[0]){
                return a[0]-b[0]
            }
            return a[1] - b[1];
        })
        let dp = new Array(len).fill(1);

        for (let i=1;i<len;i++){

            let rightArr = envelopes[i];
            for (let j=0;j<i;j++) {
                let leftArr = envelopes[j];
                if(rightArr[0]>leftArr[0] && rightArr[1]>leftArr[1]){
                    dp[i] = Math.max(
                        dp[i],
                        dp[j]+1
                    )
                }
            }
        }


        return Math.max(...dp);
    };

    // console.log('maxEnvelopes',maxEnvelopes([[10,8],[1,12],[6,15],[2,18]]))

}

//877
{

    var stoneGame = function(piles) {

        let len = piles.length;
        let dp = new Array(len);
        for (let i=0;i<len;i++){
            dp[i] = [];
            for (let j=0;j<len;j++){
                dp[i][j] = [0, 0];
            }
        }
        for (let i=0;i<len;i++){
            dp[i][i] = [piles[i], 0];
        }


        for (let m=len-2;m>=0;m--){

            for (let n=m+1;n<len;n++) {

                let left = piles[m] + dp[m + 1][n][1];
                let right = piles[n] + dp[m][n - 1][1];

                if(left>right){
                    dp[m][n][0] = left;
                    dp[m][n][1] = dp[m + 1][n][0];
                }else {
                    dp[m][n][0] = right;
                    dp[m][n][1] = dp[m][n - 1][0];
                }

            }

        }

        return (dp[0][len - 1][0] - dp[0][len - 1][1]) >= 0;
    };

    // console.log('stoneGame', stoneGame([3, 9, 1, 2]));

}

//174
{

    var calculateMinimumHP = function(dungeon) {

        let row = dungeon.length;
        let col = dungeon[0].length;

        let dp = new Array(row+1).fill(null).map(()=>{
            return new Array(col + 1).fill(Infinity);
        })
        dp[row][col-1] = dp[row-1][col] = 1;

        for (let i = row-1;i >= 0;i --) {
            for (let j = col-1;j >= 0;j --) {
                let min = Math.min(dp[i + 1][j], dp[i][j + 1]);
                dp[i][j] = Math.max(min - dungeon[i][j], 1);
            }
        }

        return dp[0][0]

    };


    // console.log('calculateMinimumHP',calculateMinimumHP([
    //     [-2,3,3],
    //     [-5,10,1],
    //     [10,30,5],
    // ]))

}


//494
{

    var findTargetSumWays = function(nums, target) {


    };

}