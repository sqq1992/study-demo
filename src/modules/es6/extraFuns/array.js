
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
    // console.log('flatten2',flatten([1, [2, [3, [4]], 5]]));

}

//push
{
    Array.prototype.myPush = function (...items) {

        let nowArr = this;
        let nowArrLen = this.length;
        let itemsLen = items.length;

        for (let i=0;i<itemsLen;i++) {
            nowArr[nowArrLen + i] = items[i];
        }

        let newLen = nowArrLen + itemsLen;
        return newLen;
    }

    // var a = [1, 2, 3, 4, 5];
    // a.myPush(7, 8, 9);
    // console.log('a', a.length);
}

//pop
{

    Array.prototype.myPop = function () {

        let arr = this;
        let arrLen = this.length;

        if(arrLen===0){
            return undefined;
        }

        arrLen--;
        let value = arr[arrLen];
        arr.length = arrLen;
        return value;
    };

    //
    // var a = [1, 2, 3, 4, 5];
    // console.log('a1', a.myPop());
    // console.log('a2', a);
}

//filter
{

    Array.prototype.myFilter = function (callbackFn, thisArg) {

        let arr = this;
        let arrLen = this.length;
        let res = [];
        for (let i=0;i<arrLen;i++) {
            if(callbackFn.call(thisArg,arr[i],i,arr)){
                res.push(arr[i]);
            }
        }

        return res;
    };

}


//map
{





}