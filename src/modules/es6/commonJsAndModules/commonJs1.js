//commonjs 仅仅是复制，不会对值做变化

var counter = 3;
function incCounter() {
    counter++
}
module.exports = {
    counter: counter,
    incCounter: incCounter
}