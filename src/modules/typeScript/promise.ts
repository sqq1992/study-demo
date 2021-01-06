
// success
async function f1() {

    let res = await new Promise<string>((resolve,reject)=>{
        setTimeout(() => {
            resolve('success');
        }, 2000);
    })

    console.log('res', res);
    return res;
}

// let af1 = f1();
// console.log('af1', af1);


// error
async function f2() {

    try {
        let res = await new Promise<string>((resolve,rejected)=>{
            setTimeout(() => {
                rejected('error');
            }, 2000);
        })
        return res
    }catch (e) {
        console.log('e',e);
        return Promise.reject(e)
    }

}

// f2();


//3 Symbol.iterator
const arr = ['a', 'b', 'c'];
const iter = arr[Symbol.iterator]();
iter.next() // { value: 'a', done: false }
iter.next() // { value: 'b', done: false }
iter.next() // { value: 'c', done: false }
iter.next() // { value: undefined, done: true }

//4 自定义的 Iterator
const defineIterator = {
    value: 0,
    [Symbol.iterator](){
        let _this = this;
        return{
            next(){
                const value = _this.value++;
                const done = value > 3;
                return{
                    value: done ? undefined : value,
                    done
                }
            }
        }
    }
};
// const iter2 = defineIterator[Symbol.iterator]();
// console.log('1-iter2', iter2.next());
// console.log('2-iter2', iter2.next());
// console.log('3-iter2', iter2.next());
// console.log('4-iter2', iter2.next());
// console.log('5-iter2', iter2.next());


//5 迭代器的 next() 方法参数
function* f3() {
    const a = yield 1;
    console.log('a', a);
    const b = yield 2;
    console.log('b', b);
}
const f3test = f3();
console.log('1-f3test', f3test.next('a'));
console.log('2-f3test', f3test.next('b'));
console.log('3-f3test', f3test.next('c'));

