

//队列章节

class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {}
    }

    enqueue(item){
        this.items[this.count] = item;
        this.count++;
    }

    dequeue(){
        if(this.isEmpty()){
            return undefined;
        }
        let result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }

    peak(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    isEmpty(){
        return this.count - this.lowestCount === 0;
    }

    size(){
        return this.count - this.lowestCount
    }

    clear(){
        this.count = 0;
        this.lowestCount = 0;
        this.items = {}
    }

    toString(){
        if(this.isEmpty()){
            return '';
        }

        let objString = `${this.items[this.lowestCount]}`;
        for(let i=this.lowestCount+1;i<this.count;i++) {
            objString = `${objString},${this.items[i]}`
        }
        return objString;
    }

}

{


    // let enque1 = new Queue();
    // enque1.enqueue(1)
    // enque1.enqueue(2)
    // enque1.enqueue(4);
    // console.log(enque1.toString())
    // console.log(enque1.dequeue())
    // console.log(enque1.peak())
    // console.log(enque1.dequeue())
    // console.log(enque1.peak())
    // console.log(enque1.dequeue())
    // console.log(enque1.peak())


    //todo test1
    function game1(nameList, num) {
        let queue = new Queue();
        let elimitNameList = [];

        nameList.forEach((elem)=>{
            queue.enqueue(elem);
        })

        while (queue.size()>1){
            for(let i=0;i<num;i++) {
                queue.enqueue(queue.dequeue());
            }
            elimitNameList.push(queue.dequeue());
        }

        return{
            elimitNameList,
            winner: queue.dequeue()
        }
    }

    // console.log('game1', game1(['sun', 'sun1', 'sun2', 'sun3'], 2));


}


// 双端队列
class Deque {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {}
    }

    addBack(item){
        this.items[this.count] = item;
        this.count++;
    }

    addFront(item){

        if(this.isEmpty()){
            this.addBack(item);
        }else if(this.lowestCount>0){
            this.items[--this.lowestCount] = item;
        }else {

            for(let i=this.count;i>0;i--) {
                this.items[i] = this.items[i - 1];
            }
            this.count++;
            this.lowestCount = 0;
            this.items[this.lowestCount] = item;
        }

    }

    removeFront(){
        if(this.isEmpty()){
            return undefined;
        }
        let result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }

    peekFront(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    isEmpty(){
        return this.count - this.lowestCount === 0;
    }

    size(){
        return this.count - this.lowestCount
    }

    clear(){
        this.count = 0;
        this.lowestCount = 0;
        this.items = {}
    }
    toString(){
        if(this.isEmpty()){
            return '';
        }

        let objString = `${this.items[this.lowestCount]}`;
        for(let i=this.lowestCount+1;i<this.count;i++) {
            objString = `${objString},${this.items[i]}`
        }
        return objString;
    }
}


{

    function check(str) {
        let arr = str.split('');
        let isEqual = true;

        while (arr.length>1 && isEqual){
            let first = arr.shift();
            let second = arr.pop();

            if(first!==second){
                isEqual = false;
            }
        }

        return isEqual
    }

}