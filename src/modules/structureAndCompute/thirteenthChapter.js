
//----------- 二分查找算法享解

function setArr(length) {
    let nums = [];

    for(let i=0;i<length;i++) {
        nums.push(Math.floor(Math.random() * length));
    }

    nums = nums.sort(function (a, b) {
        return a - b;
    });
    return nums;
}


{

    //1
    function binSearch(arr,data) {
        let left = 0;
        let right = arr.length - 1;

        while (left<=right) {
            let mid = Math.floor((left + right) / 2);
            let midVal = arr[mid];

            if(midVal>data){
                right = mid - 1;
            }else if(midVal<data){
                left = mid + 1;
            }else {
                return mid;
            }

        }

        return -1;
    }

    let nums = setArr(101);
    console.log('binSearch', binSearch(nums, 23));


    //2  寻找左边界
    function binSearchLeft(arr,data) {
        let left = 0;
        let right = data.length;


        while (left<right) {
            let mid = Math.floor((left + right) / 2);
            let midVal = arr[mid];

            if(midVal>data){
                right = mid;
            }else if(midVal<data){
                left = mid + 1;
            }else {
                right = mid;
            }

        }

        if (left === arr.length) return -1;

        return arr[left] === data ? left : -1;

    }

    //3 寻找左边界2
    function binSearchLeft2(arr,data) {
        let left = 0;
        let right = arr.length - 1;

        while (left<=right) {
            let mid = Math.floor((left + right) / 2);
            let midVal = arr[mid];

            if(midVal>data){
                right = mid - 1;
            }else if(midVal<data){
                left = mid + 1;
            }else if(midVal===data){
                right = mid - 1;
            }

        }

        if(left>=arr.length || arr[left]!==data){
            return -1;
        }
        return left;
    }

    let aa = [1, 2, 2, 2, 3];
    console.log('binSearchLeft2', binSearchLeft(aa, 0));

}
