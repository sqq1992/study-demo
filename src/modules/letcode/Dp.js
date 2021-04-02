
// 动态规划


//509
{


    // var fib = function(n) {
    //
    //     if(n===1){
    //         return 1;
    //     }else if(n<1){
    //         return 0;
    //     }
    //
    //     return fib(n - 1) + fib(n - 2);
    // };

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




    };


}