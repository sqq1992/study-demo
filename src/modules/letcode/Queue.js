
class Queue {

    constructor() {
        this.data = [];
    }



}





//239
{

    var maxSlidingWindow = function(nums, k) {

        class Queue {
            constructor() {
                this.data = [];
            }
            push(n){
                while (this.data.length!==0 && this.data[this.data.length-1]<n){
                    this.data.pop();
                }
                this.data.push(n);
            }
            max(){
                return this.data[0];
            }
            pop(n){
                if(this.data.length!==0 && this.data[0]===n){
                    this.data.shift();
                }
            }

        }

        let res = [];
        let queueInstance = new Queue();
        let len = nums.length;

        for (let i=0;i<len;i++) {
            let val = nums[i];
            if(i<k-1){
                queueInstance.push(val)
            }else {
                queueInstance.push(val)
                res.push(queueInstance.max());
                queueInstance.pop(nums[i - k + 1]);
            }

        }

        return res;
    };


    // var maxSlidingWindow = function(nums, k) {
    //
    //     let tempArr = [];
    //     let res = [];
    //     let len = nums.length;
    //
    //     for (let i=0;i<len;i++) {
    //         let val = nums[i];
    //         if(i<k-1) {
    //             tempArr.push(val)
    //         }else {
    //             tempArr.push(val);
    //             res.push(Math.max(...tempArr));
    //             tempArr.shift();
    //         }
    //     }
    //
    //
    //     return res;
    // };

    console.log('maxSlidingWindow', maxSlidingWindow([1,-1], 1));
}