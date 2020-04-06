function echo<T>(args: T): T {
    return args;
}




class Queue<T> {
    private data = [];

    push(item: T) {
        return this.data.push(item);
    }
    pop():T{
        return this.data.shift();
    }
}
const queue = new Queue<number>();
queue.push(1);

console.log(queue.pop().toFixed());

