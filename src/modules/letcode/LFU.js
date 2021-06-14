
/**
 *  LFU淘汰访问最低的数据
 **/

class Node {
    constructor(key,val) {
        this.key = key;
        this.val = val;
        this.freq = 1;
        this.pre = null;
        this.next = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = new Node();
        this.tail = new Node();
        this.head.next = this.tail;
        this.tail.pre = this.head;
    }
    add(node){
        node.next = this.head.next;
        this.head.next.pre = node;
        this.head.next = node;
        node.pre = this.tail.pre;

    }
    remove(node){
        node.pre.next = node.next;
        node.next.pre = node.pre;
    }
}


class LFUCache {

    constructor(capacity) {
        this.cacheMap = new Map();
        this.freqMap = new Map(); //freq->DoubleLinkedList
        this.capacity = capacity;
        this.size = 0;
        this.minfreq = 1;
    }

    get(key){

        if(!this.cacheMap.get(key)){
            return -1;
        }

        let node = this.cacheMap.get(key);
        this.incFreq(node);
        return node.val;
    }

    put(key,value){

        let node = this.cacheMap.get(key);
        if(node){
            node.val = value;
            this.incFreq(node);
        }else {
            if(this.capacity===this.size){

                let doubleLinkedList = this.freqMap.get(this.minfreq);

                this.cacheMap.delete(doubleLinkedList.tail.pre.key);

                doubleLinkedList.remove(doubleLinkedList.tail.pre);

                this.size--;
            }

            let newNode = new Node(key, value);

            this.cacheMap.set(key, newNode);
            let nowDoubleLinkedList = this.freqMap.get(1);
            if(!nowDoubleLinkedList){
                nowDoubleLinkedList = new DoubleLinkedList();
                this.freqMap.set(1, nowDoubleLinkedList);
            }
            nowDoubleLinkedList.add(newNode);
            this.size++;
            this.minfreq = 1;
        }

    }


    incFreq(node){
        let freq = node.freq;
        let tempDoubleLinkedList = this.freqMap.get(freq);
        tempDoubleLinkedList.remove(node);

        if(freq===this.minfreq && tempDoubleLinkedList.head.next === tempDoubleLinkedList.tail){
            this.minfreq = freq + 1;
        }

        node.freq++;
        let nowDoubleLinkedList = this.freqMap.get(freq + 1);
        if(!nowDoubleLinkedList){
            nowDoubleLinkedList = new DoubleLinkedList();
            this.freqMap.set(freq + 1, nowDoubleLinkedList);
        }
        nowDoubleLinkedList.add(node);

    }


}

//todo test
{
    let lfu1 = new LFUCache(2);
    lfu1.put('1', 'a');
    lfu1.put('2', 'b');
    lfu1.put('1', 'aa');
    lfu1.put('3', 'c');
    console.log('get',lfu1.get('1'))



}