
/**
 *  二叉堆
 **/

function getLeft(index) {
    return index * 2 + 1;
}

function getRight(index) {
    return index * 2 + 2;
}

function swap(arr,i,j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

class MaxHeap {
    constructor(arr) {
        this.data = [...arr];
        this.size = this.data.length;
    }

    isHeap() {
        const L = Math.floor(this.size / 2);
        for (let i = L - 1; i >= 0; i--) {
            const l = this.data[getLeft(i)] !== undefined ? this.data[getLeft(i)] : Number.MIN_SAFE_INTEGER;
            const r = this.data[getRight(i)] !== undefined ? this.data[getRight(i)] : Number.MIN_SAFE_INTEGER;

            const max = Math.max(this.data[i], l, r);

            if (max !== this.data[i]) {
                return false;
            }
        }
        return true;
    }

    rebuildHeap(){
        const L = Math.floor(this.size / 2);
        for (let i = L - 1; i >= 0; i--) {
            this.maxHeapify(i);
        }
    }

    insert(key){
        this.data[this.size++] = key;
        if(this.isHeap()){
            return
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
            return
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

        const left = getLeft(index);
        const right = getRight(index);

        if(left<this.size && this.data[max]<this.data[left]){
            max = left;
        }

        if(right<this.size && this.data[max]<this.data[right]){
            max = right;
        }

        if(max===index){
            return;
        }

        swap(this.data, index, max);
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