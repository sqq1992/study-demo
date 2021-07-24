
/**
 *  生成器以及协程的理解
 **/

{

    function* gen() {
        console.log('33');
        let a = yield 1;
        let b = yield (function () {
            return 2
        })();
        return 3
    }

    var g = gen();
    // console.log('x', typeof g);
    // console.log(g.next())
    // console.log(g.next())
    // console.log(g.next())
    // console.log(g.next())

}

{

    function* gen2() {
        yield 2;
        yield 3;
    }


    function* gen1() {
        yield 1;
        yield* gen2();
        yield 4;
    }
    let g = gen1();
    // console.log(g.next())
    // console.log(g.next())
    // console.log(g.next())
    // console.log(g.next())
}

//3
{
    // const fs = require('fs');
    //
    // const readPromise = (fileName) => {
    //
    //     return new Promise((resolve, reject) => {
    //
    //         fs.readFile(fileName, (err, data) => {
    //             if (err) {
    //                 reject(err);
    //             } else {
    //                 resolve(data);
    //             }
    //         })
    //
    //     }).then((res) => res);
    // };
    //
    // const gen = function* () {
    //     const data1 = yield readPromise('001.txt')
    //     console.log(data1)
    //     const data2 = yield readPromise('002.txt')
    //     console.log(data2)
    // }
    //
    // let g = gen();
    // console.log(g.next())
    // console.log(g.next())


}

//4
{

    // async function test() {
    //     let arr = [4, 2, 1]
    //     arr.forEach(async item => {
    //         const res = await handle(item)
    //         console.log(res)
    //     })
    //     console.log('结束')
    // }

    // async function test() {
    //     let arr = [4, 2, 1];
    //     for (let num of arr){
    //         const res = await handle(num);
    //         console.log(res);
    //     }
    //     console.log('结束')
    // }


    async function test() {
        let arr = [4, 2, 1];
        let iterator = arr[Symbol.iterator]();
        let res = iterator.next();
        // while (!res.done){
        //     let value = res.value;
        //     console.log(value);
        // }
    }

    function handle(x) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(x)
            }, 1000 * x)
        })
    }

    test()


}