/**
 *  LRU缓存机制
 **/
class LinkNode{
    constructor(key,value) {
        this.key = key;
        this.value = value;
    }
}


class DoubleLink{
    constructor() {
        this.head = new LinkNode(0, 0);
        this.tail = new LinkNode(0, 0);

        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.size = 0;
    }
    addLast(node){
        node.next = this.tail;
        node.prev = this.tail.prev;

        this.tail.prev.next = node;
        this.tail.prev = node;

        this.size++;
    }
    remove(node){
        node.prev.next = node.next;
        node.next.prev = node.prev;

        this.size--;
    }

    removeFirst(){
        if(this.head.next===this.tail) return null;

        let first = this.head.next;
        this.remove(first);
        return first;
    }

    getSize(){
        return this.size;
    }

}

class LRUCache {
    constructor(capacity) {
        this.map = new Map();
        this.cache = new DoubleLink();
        this.capacity = capacity;
    }

    get(key){

        if(!this.map.has(key)){
            return -1;
        }

        this.makeRecently(key);
        return this.map.get(key).value;
    }

    put(key,value){

        if(this.map.has(key)){
            this.deleteKey(key);
            this.addRecently(key, value);

            return;
        }

        if(this.capacity===this.cache.getSize()){
            this.removeLeastRecently();
        }

        this.addRecently(key, value);
    }

    makeRecently(key){
        let x = this.map.get(key);

        this.cache.remove(x);
        this.cache.addLast(x);

    }

    addRecently(key,value){
        let x = new LinkNode(key, value);

        this.cache.addLast(x);
        this.map.set(key, x);
    }

    deleteKey(key){
        let x = this.map.get(key);

        this.cache.remove(x);
        this.map.delete(key);
    }

    removeLeastRecently(){

        let deleteNode = this.cache.removeFirst();

        this.map.delete(deleteNode.key)

    }

}

