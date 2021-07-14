
/**
 *  数组去重
 **/

//1
{

    function unique(array,isSorted,iteratee) {
        let res = [];
        let seen = [];

        for (let i=0,j=array.length;i<j;i++) {
            let value = array[i];
            let computed = iteratee ? iteratee(value, i, array) : value;
            if(isSorted){
                if(!i || seen!==value){
                    res.push(value);
                }
                seen = value;
            }else if(iteratee){
                if(seen.indexOf(computed)===-1){
                    seen.push(computed);
                    res.push(value);
                }
            }else {
                if(res.indexOf(value)===-1){
                    res.push(value);
                }
            }

        }

        return res;
    }


    // console.log('unique', unique([1, 2, 3, 3, 4, 5,"a","A", 5], false,function (item) {
    //     return typeof item === "string" ? item.toLowerCase() : item;
    // }));
}

//2
{
    function unique(array) {
        return array.concat().sort().filter((elem,index)=>{
            return !index || elem !== array[index - 1];
        })
    }
    // console.log('unique', unique([1, 2, 3, 3, 4, 5, 5]));
}

