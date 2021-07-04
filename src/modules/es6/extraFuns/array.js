
//数组扁平化
{

    //reduce concat
    function flatten(arr) {

        return arr.reduce((prev, next) => {

            if(Array.isArray(next)){
                return prev.concat(flatten(next));
            }else {
                return prev.concat(next);
            }

        }, []);
    }



    //stack
    function flatten2(arr) {
        let stack = [...arr];
        let result = [];


        while (stack.length){
            let tempValue = stack.pop();

            if(Array.isArray(tempValue)){
                stack.push(...tempValue);
            }else {
                result.push(tempValue);
            }
        }

        return result.reverse();
    }
    console.log('flatten2',flatten([1, [2, [3, [4]], 5]]));

}