
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


    bubbleSort: function () {


    }
};

//
var num1 = new CArray(100);
num1.setData();
console.log(num1.toString());
