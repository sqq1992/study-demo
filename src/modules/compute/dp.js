
//动态规划

// 给你一个可装载重量为W的背包和N个物品，每个物品有重量和价值两个属性。其中第i个物品的重量为wt[i]，价值为val[i]，现在让你用这个背包装物品，最多能装的价值是多少？
//
// 举个简单的例子，输入如下：
//
// N = 3, W = 4
// wt = [2, 1, 3]
// val = [4, 2, 3]
// 算法返回 6，选择前两件物品装进背包，总重量 3 小于W，可以获得最大价值 6。
{

    var maxVal = function(N,W,wt,val) {

        let dp = new Array(N+1);
        for (let i=0;i<N+1;i++) {
            dp[i] = new Array(W+1).fill(0);
        }


        for (let i=1;i<=N;i++) {

            for (let w=1;w<=W;w++) {

                if(w<wt[i-1]){
                    dp[i][w] = dp[i-1][w]
                }else {
                    dp[i][w] = Math.max(
                        dp[i-1][w-wt[i-1]]+val[i-1],
                        dp[i-1][w]
                    )
                }


            }

        }


        return dp[N][W]
    };

    // console.log('maxVal', maxVal(3, 4, [2, 1, 3], [4, 2, 3]));


}