

//冒泡
{

    let testData = [3, 2, 100, 33, 66];

    function bubble(arr) {
        let len = arr.length;
        let temp;
        for(let i=0,j=len;i<j;i++){

            for(let m=1,n=len-i-1;m<=n;m++) {
                if(arr[m]<arr[m-1]){
                    temp = arr[m];
                    arr[m] = arr[m - 1];
                    arr[m - 1] = temp;
                }
            }
        }

        return arr;
    }

    function optimizeBubble(arr) {
        let len = arr.length;
        let flag = true;
        let temp;

        while (flag){

            flag = false;
            for(let i=1;i<len;i++) {
                if(arr[i]<arr[i-1]){
                    temp = arr[i];
                    arr[i] = arr[i - 1];
                    arr[i - 1] = temp;
                    flag = true;
                }

            }
        }

        return arr;
    }

    console.log('optimizeBubble', optimizeBubble(testData));
}

//2.1选择排序
{

    function choseSort(arr) {


        for(let i=0,j=arr.length;i<j;i++) {
            let min = i;
            let flag = false;

            for(let m=min+1;m<j;m++) {
                if(arr[i]>arr[m]){
                    min = m;
                    flag = true;
                }
            }

            if(flag){
                let tempVal = arr[i];
                arr[i] = arr[min];
                arr[min] = tempVal;
            }

        }

        return arr;
    }

    console.log('choseSort', choseSort([5, 2, 100, 32, 1]));

}






