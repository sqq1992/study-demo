
/**
 *  二叉堆
 **/



class MaxHeap {
    constructor(arr) {
        this.data = [...arr];
        this.size = this.data.length;
    }

    getLeft(index){
        return index * 2 + 1;
    }

    getRight(index){
        return index * 2 + 2;
    }

    swap(arr,a,b){
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }

    rebuildHeap(){
        const L = Math.floor(this.size / 2);
        for (let i=L-1;i>=0;i--) {
            this.maxHeapify(i);
        }
    }

    sort(){
        for (let i=this.size-1;i>0;i--) {
            this.swap(this.data, 0, i);
            this.size--;
            this.maxHeapify(0);
        }
    }

    isHeap() {
        const L = Math.floor(this.size / 2);

        for (let i=L-1;i>=0;i--) {
            const leftVal = this.data[this.getLeft(i)] !== undefined ? this.data[this.getLeft(i)] : Number.MIN_SAFE_INTEGER;
            const rightVal = this.data[this.getRight(i)] !== undefined ? this.data[this.getRight(i)] : Number.MIN_SAFE_INTEGER;

            const max = Math.max(this.data[i], leftVal, rightVal);

            if(max!==this.data[i]){
                return false;
            }
        }

        return true;
    }

    insert(key){
        this.data[this.size] = key;
        this.size++;

        if(!this.isHeap()){
            return;
        }
        this.rebuildHeap();
    }

    delete(index){

        if(index>=this.size){
            return;
        }
        this.data.splice(index, 1);
        this.size--;
        if(!this.isHeap()){
            return;
        }
        this.rebuildHeap();
    }

    extract(){
        const removedValue = this.data[0];
        this.delete(0);
        return removedValue;
    }

    maxHeapify(index){
        let max = index;
        if(max>=this.size){
            return;
        }

        const left = this.getLeft(index);
        const right = this.getRight(index);

        if(left<this.size && this.data[left]>this.data[max]) {
            max = left;
        }

        if(right<this.size && this.data[right]>this.data[max]) {
            max = right;
        }

        if(max===index){
            return;
        }

        this.swap(this.data, max, index);
        return this.maxHeapify(max);
    }
}


class MinHeap {
    constructor(arr) {
        this.data = [...arr];
        this.size = this.data.length;
    }

    getLeft(index){
        return index * 2 + 1;
    }

    getRight(index){
        return index * 2 + 2;
    }

    swap(arr,a,b){
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }

    isHeap(){
        const L = Math.floor(this.size / 2);
        for (let i=L-1;i>=0;i--){

            const leftVal = this.data[this.getLeft(i)] !== undefined ? this.data[this.getLeft(i)] : Number.MAX_SAFE_INTEGER;
            const rightVal = this.data[this.getRight(i)] !== undefined ? this.data[this.getRight(i)] : Number.MAX_SAFE_INTEGER;

            const min = Math.min(this.data[i], leftVal, rightVal);

            if(min!==this.data[i]){
                return false;
            }
        }

        return true;
    }

    rebuildHeap(){
        const L = Math.floor(this.size / 2);
        for (let i=L-1;i>=0;i--){
            this.minHeapify(i);
        }
    }

    insert(key){
        this.data[this.size++] = key;
        if(this.isHeap()){
            return;
        }
        this.rebuildHeap();
    }

    delete(index){
        if(index>=this.size){
            return;
        }
        this.data.splice(index, 1);
        this.size--;
        if(this.isHeap()){
            return;
        }
        this.rebuildHeap();
    }

    extract(){
        const removedValue = this.data[0];
        this.delete(0);
        return removedValue;
    }

    getSize(){
        return this.data.length;
    }

    minHeapify(index){
        let min = index;
        if(min>=this.size){
            return;
        }

        const left = this.getLeft(index);
        const right = this.getRight(index);

        if(left<this.size && this.data[min]>this.data[left]){
            min = left;
        }

        if(right<this.size && this.data[min]>this.data[right]){
            min = right;
        }

        if(min===index){
            return;
        }

        this.swap(this.data, index, min);
        return this.minHeapify(min);
    }

}


//todo test
{

    let heap2 = new MaxHeap([1, 8, 3, 4, 5, 6, 7]);
    heap2.rebuildHeap();
    heap2.sort();
    console.log('heap2', heap2.data);


    // let heap1 = new MinHeap([1, 8, 3, 4, 5, 6, 7]);
    // heap1.rebuildHeap();
    // heap1.insert(100);
    // console.log('heap1', heap1.extract());
    // console.log('heap1', heap1);

    //215
    var findKthLargest = function(nums, k) {

        let minHeap = new MinHeap([]);

        for (let num of nums){
            minHeap.insert(num);
            if(minHeap.getSize()>k){
                minHeap.extract();
            }
        }

        return minHeap.extract();
    };

    // console.log('findKthLargest', findKthLargest([-1,2,0], 1));


}