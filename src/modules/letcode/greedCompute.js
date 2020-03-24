


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


    console.log('lemonadeChange', lemonadeChange([5,5,5,10,20]));
}
