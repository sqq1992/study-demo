

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


//快速
{






}
