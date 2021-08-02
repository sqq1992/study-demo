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




//1
{

//     let cache = new LRUCache(2);
//
//
//     cache.put(1, 1);
//     // cache = [(1, 1)]
//
//     cache.put(2, 2);
//
//     console.log(cache.get(1))       // 返回 1
// // cache = [(1, 1), (2, 2)]
// // 解释：因为最近访问了键 1，所以提前至队头
// // 返回键 1 对应的值 1
//
//     cache.put(3, 3);
// // cache = [(3, 3), (1, 1)]
// // 解释：缓存容量已满，需要删除内容空出位置
// // 优先删除久未使用的数据，也就是队尾的数据
// // 然后把新的数据插入队头
//
//     console.log(cache.get(2));       // 返回 -1 (未找到)
// // cache = [(3, 3), (1, 1)]
// // 解释：cache 中不存在键为 2 的数据
//
//     cache.put(1, 4);
}














