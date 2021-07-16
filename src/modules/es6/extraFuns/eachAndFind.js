
/**
 *  遍历
 **/

//1
{

    function each(target,callBack) {

        if(Array.isArray(target)){
            for (let i=0,j=target.length;i<j;i++){
                if (callBack.call(target, target[i], i) === false) {
                    break;
                }
            }
        }else {
            for (let i in target){
                if(callBack.call(target,target[i], i)===false){
                    break;
                }
            }
        }

        return target;
    }


}


//2 findIndex
{

    function findIndex(array, fn, context) {

        for (let i=0,j=array.length;i<j;i++) {
            if(fn.call(context,array[i],i)) return i;
        }
        return -1;
    }

    function createIndexFinder(dir) {

        return function (array, fn, context) {
            let len = array.length;
            let index = dir > 0 ? 0 : len - 1;

            for (;index>0 && index<len;index+=dir) {
                if(fn.call(context,array[index],index)) return index;
            }

            return -1;
        }

    }




}