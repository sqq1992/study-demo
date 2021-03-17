

//队列, 先进先出
function Queue() {
    this.dataSource = [];
}
Queue.prototype.push = function (data) {
    this.dataSource.push(data);
}
