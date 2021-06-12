
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
        node.pre = this.head;
    }
    remove(node){
        node.pre.next = node.next;
        node.next.pre = node.pre;
    }
}





class LFUCache {

    constructor(capacity) {
        this.cacheMap = new Map();
        this.freqMap = new Map();

        this.capacity = capacity;
        this.minFreq = 0;
        this.size = 0;
    }

    get(key){

        if(!this.cacheMap.get(key)){
            return -1;
        }

        const node = this.cacheMap.get(key);
        this.incFreq(node);
        return node.val;
    }

    put(key,value){
        if (this.capacity === 0) {
            return
        }
        // 先尝试 去 cacheMap 取节点 如果取得到 直接更新 节点的 val 并且 更新 freqMap
        const node = this.cacheMap.get(key)
        if (node) {
            node.val = value
            this.incFreq(node)
        } else {
            // 如果 没有 多余空间 需要删除
            if (this.capacity === this.size) {
                // 找到 freqMap 中 key 为 minFreq 的链表
                const minFreqLinkedList = this.freqMap.get(this.minFreq)
                // 删除 cacheMap 中的 key
                this.cacheMap.delete(minFreqLinkedList.tail.pre.key)
                // 删除 链表 尾结点的前一个结点 （因为每次新增的都在头结点 尾结点的是很久的）
                minFreqLinkedList.remove(minFreqLinkedList.tail.pre)
                this.size--
            }
            // 有多余空间 可以直接插入
            const newNode = new Node(key, value)
            this.cacheMap.set(key, newNode)
            // 更新 freqMap 先判断 是否有 key 为 1 的链表
            let doubleLinkedList = this.freqMap.get(1)
            if (!doubleLinkedList) {
                doubleLinkedList = new DoubleLinkedList()
                this.freqMap.set(1, doubleLinkedList)
            }
            // 将节点 插入到链表中
            doubleLinkedList.add(newNode)
            this.size++
            this.minFreq = 1
        }
    }



    incFreq(node){

        let freq = node.freq;
        let doubleLinkedList = this.freqMap.get(freq);

        doubleLinkedList.remove(node);

        if(freq===this.minFreq && doubleLinkedList.head.next === doubleLinkedList.tail){
            this.minFreq = freq + 1;
        }

        node.freq++;
        doubleLinkedList = this.freqMap.get(freq + 1);
        if (!doubleLinkedList) {
            doubleLinkedList = new DoubleLinkedList()
            this.freqMap.set(freq + 1, doubleLinkedList)
        }
        doubleLinkedList.add(node)
    }


}
