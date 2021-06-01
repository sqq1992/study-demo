
/**
 *  分而治之
 **/

//241
{

    var diffWaysToCompute = function(expression) {
        let res = [];
        for (let i=0,j=expression.length;i<j;i++) {

            let str = expression[i];
            if(str==="+" || str==="-" || str==="*"){

                let left = diffWaysToCompute(expression.substr(0, i));
                let right = diffWaysToCompute(expression.substr(i + 1));


                for (let leftStr of left){
                    for (let rightStr of right){

                        if(str==="+"){
                            res.push(leftStr + rightStr);
                        }else if(str==="-"){
                            res.push(leftStr - rightStr);
                        }else if(str==="*"){
                            res.push(leftStr * rightStr);
                        }

                    }
                }

            }

        }

        if(res.length===0){
            res.push(parseInt(expression));
        }

        return res;
    };

    // console.log('diffWaysToCompute', diffWaysToCompute("2-1-1"));
}

