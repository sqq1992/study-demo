

// -- 排序算法

function CArray(nums) {

    this.dataStore = [];
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



    //选择排序
    choseSort:function () {
        let arr = this.dataStore;
        let len = arr.length;

        for(let i=0;i<len;i++) {
            let min = i;
            for(let m=min+1;m<len;m++) {
                if(arr[min]>arr[m]){
                    min = m;
                }
            }
            this._exec(i, min);
        }


    },

    //插入排序
    innsertSort:function(){

        let arr = this.dataStore;
        let len = arr.length;

        for(let i=1;i<len;i++) {
            let right = i;
            let tempStr = arr[i];
            while (right - 1 >= 0 && arr[right - 1]>tempStr) {
                arr[right] = arr[right-1];
                right--
            }
            arr[right] = tempStr;
        }


    },


    _exec: function (previousIndex, currentIndex) {
        let arr = this.dataStore;
        let tempStr = arr[previousIndex];
        arr[previousIndex] = arr[currentIndex];
        arr[currentIndex] = tempStr;

    }




};

//
var num1 = new CArray(100);
num1.setData();
num1.innsertSort();
console.log(num1.toString());
