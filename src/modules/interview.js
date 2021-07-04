
//1
{

    function randomArr(arr,index,min,max) {
        let num = Math.max(min, Math.ceil(Math.random() * max));
        if (arr[arr.length - 1] === undefined) {
            if(!arr.includes(num)){
                arr[index++] = num;
            }
            return randomArr(arr, index, min, max);
        }

        return arr;
    }

}

//2
{
    function flattenDeep(arr) {

        let stack = [...arr];
        let result = [];

        while (stack.length){
            let tempVal = stack.pop();

            if(Array.isArray(tempVal)){
                stack.push(...tempVal);
            }else {
                result.push(tempVal);
            }
        }

        return result.reverse();
    }

}


{


    let arr = [1, 2, 3];
    let temp = arr.reduce((p,x)=>{
        return p.then(()=>{
            return new Promise((resolve)=>{
                setTimeout(() => {
                    resolve(console.log(x))
                }, 1000);
            })
        })
    },Promise.resolve())

}


//222
{

    var countNodes = function(root) {




    };

}