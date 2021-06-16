/**
 *  二叉堆和堆排序
 **/


class MinHeap {
    constructor() {
        this.heap = [];
    }

    // 左侧子节点
    getLeftIndex(index){
        return 2 * index + 1;
    }

    // 右侧子节点
    getRightIndex(index){
        return 2 * index + 2;
    }

    // 父节点
    getParentIndex(index){
        if(index===0){
            return undefined;
        }
        return Math.floor((index - 1) / 2);
    }


    insert(value){

        if(value!==null){
            this.heap.push(value);
            this.siftUp(this.heap.length - 1);
            return true;
        }

        return false;
    }

    swap(arr,a,b){
        [arr[a], arr[b]] = [arr[b], arr[a]];
    }

    siftUp(index){
        let parent = this.getParentIndex(index);

        while (index>0 && this.heap[parent]>this.heap[index]){

            this.swap(this.heap, parent, index);
            index = parent;
            parent = this.getParentIndex(index)
        }

    }

    siftDown(index){
        let element = index;
        const left = this.getLeftIndex(index);
        const right = this.getRightIndex(index);
        const size = this.size();

        if(left<size && this.heap[element]>this.heap[left]){
            element = left;
        }

        if(right<size && this.heap[element]>this.heap[right]){
            element = right;
        }

        if(index!==element){
            this.swap(this.heap, index, element);
            this.siftDown(element);
        }
    }


    size(){
        return this.heap.length;
    }
    isEmpty(){
        return this.size() === 0;
    }
    findMiniMum(){
        return this.isEmpty() ? undefined : this.heap[0];
    }

    extract(){
        if(this.isEmpty()){
            return undefined;
        }

        if(this.size()===1){
            return this.heap.shift();
        }

        const removedValue = this.heap[0];
        this.swap(this.heap, 0, this.size() - 1);
        this.heap.pop();
        this.siftDown(0)
        return removedValue;
    }



    show(){
        return this.heap;
    }

}

//todo 测试
{

    // let minHeap = new MinHeap();
    // minHeap.insert(4)
    // minHeap.insert(3)
    // minHeap.insert(2)
    // minHeap.insert(1)
    // console.log('extract', minHeap.extract());
    // console.log('show', minHeap.show());

    var findKthLargest = function(nums, k) {

        let minHeap = new MinHeap();

        for (let num of nums){
            minHeap.insert(num)

            if(minHeap.size()>k){
                minHeap.extract();
            }
        }


        return minHeap.extract();
    };

    // console.log('findKthLargest', findKthLargest([3,2,3,1,2,4,5,5,6], 4));

}