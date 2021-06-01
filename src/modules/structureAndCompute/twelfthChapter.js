
// -- 排序算法

function CArray(nums) {

    this.dataStore = [];
    this.pos = 0;
    this.nums = nums;
}
CArray.prototype = {
    setData: function () {
        for(let i=0,j=this.nums;i<j;i++) {
            this.dataStore[i] = Math.floor(Math.random() * (this.nums + 1));
        }
    },
    clear: function () {

    },
    toString: function () {
        var result = '';
        for(let i=0,j=this.nums;i<j;i++) {
            result += this.dataStore[i] + " ";
            if(i>0 && i%10===0) {
                result += '\n';
            }
        }
        return result;
    },

    //冒泡排序
    bubbleSort: function () {

        let arr = this.dataStore;
        let len = this.dataStore.length;

        let temp;
        for(let i=0;i<len;i++) {
            for (let m = 1; m < len - i + 1; m++) {
                if (arr[m] < arr[m - 1]) {
                    temp = arr[m - 1];
                    arr[m - 1] = arr[m];
                    arr[m] = temp;
                }
            }
        }

    },

    //选择排序
    choseSort:function () {
        let arr = this.dataStore;
        let len = this.dataStore.length;

        for(let i=0;i<len;i++) {
            let min = i;
            let flag = false;


            for(let m=i+1;m<len;m++) {
                if(arr[m]<arr[min]){
                    min = m;
                    flag = true;
                }
            }

            if(flag){
                let temp = arr[i];
                arr[i] = arr[min];
                arr[min] = temp;
            }

        }

    },

    //插入排序
    insertSort:function () {

        let arr = this.dataStore;
        let len = this.dataStore.length;
        let temp, inner;

        for(let outer=1;outer<=len-1;outer++) {
            temp = arr[outer];
            inner = outer;

            while (inner>0 && arr[inner-1]>temp) {
                arr[inner] = arr[inner - 1];
                --inner;
            }

            arr[inner] = temp;
        }
    },


    // 归并排序
    combineSort:function () {

        let arr = this.dataStore;

        let merge = (left,right) => {

            const result = [];

            while (left.length && right.length){
                if(left[0]<right[0]){
                    result.push(left.shift())
                }else {
                    result.push(right.shift())
                }
            }

            while (left.length){
                result.push(left.shift())
            }

            while (right.length){
                result.push(right.shift())
            }

            return result;
        };

        let mergerSort = (arr) => {

            let len = arr.length;
            if(len<2){
                return arr;
            }

            let middleIndex = Math.floor(len / 2);
            let left = arr.slice(0, middleIndex);
            let right = arr.slice(middleIndex);


            return merge(mergerSort(left), mergerSort(right));
        };

        this.dataStore = mergerSort(arr);
    },


    //快速排序
    quickSort: function () {

        let tempFunc = (array) => {

            if(array.length<2){
                return array;
            }

            let left = [];
            let right = [];
            let contrast = array.pop();

            array.forEach((elem)=>{
                if(elem<contrast){
                    left.push(elem);
                }else {
                    right.push(elem);
                }
            })

            return [...tempFunc(left), contrast, ...tempFunc(right)];
        };
        this.dataStore = tempFunc(this.dataStore);
    }



};

//
var num1 = new CArray(100);
num1.setData();
num1.combineSort();
console.log(num1.toString());
