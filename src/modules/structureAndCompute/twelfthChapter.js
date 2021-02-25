
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


    }


};

//
var num1 = new CArray(100);
num1.setData();
num1.insertSort();
console.log(num1.toString());
