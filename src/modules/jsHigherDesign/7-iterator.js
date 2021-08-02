/**
 *  迭代器模式
 */

//1
{

    let arr = ["foo", "bar"];
    let iter = arr[Symbol.iterator]();

    // console.log(iter.next());
    // console.log(iter.next());
    // console.log(iter.next());

}

//2
{

    class Counter{
        constructor(limit) {
            this.count = 1;
            this.limit = limit;
        }

        next(){
            if(this.count<=this.limit){
                return{
                    done:false,
                    value: this.count++
                }
            }else {
                return {
                    done: true,
                    value: undefined
                }
            }
        }
        [Symbol.iterator](){
            return this;
        }

    }


    class Counter2{
        constructor(limit) {
            this.limit = limit;
        }
        [Symbol.iterator](){
            let count = 1;
            let limit = this.limit;
            return{
                next(){
                    if(count<=limit){
                        return{
                            done:false,
                            value: count++
                        }
                    }else {
                        return {
                            done: true,
                            value: undefined
                        }
                    }
                },
                return(){
                    console.log('Exiting early');
                    return {done: true}
                }
            }
        }
    }

    //todo
    // let counter = new Counter(3);
    // for (let index of counter){
    //     console.log('counter-index', index);
    // }
    // for (let index of counter){
    //     console.log('counter-index2', index);
    // }
    //
    // let counter2 = new Counter2(3);
    // for (let index of counter2){
    //     console.log('counter2-index', index);
    // }
    // for (let index of counter2){
    //     console.log('counter2-index2', index);
    // }


    //todo 2
    // let counter2 = new Counter2(5);
    // for (let i of counter2){
    //     if(i>2){
    //         break;
    //     }
    //     console.log(i);
    // }

}

//3
{
    function *generatorFn() {

        yield 1;
        yield 2;
        yield 3;

    }

    function *nTimes(n) {
        while (n--){
            yield;
        }
    }

    function *generatorFn2(initial) {
        console.log(initial);
        console.log(yield);
        console.log(yield);
    }

    //todo
    // for (const x of generatorFn()){
    //     console.log('x', x);
    // }
    // for (const x of nTimes(4)){
    //     console.log('x');
    // }
    let generatorFn2Test = generatorFn2("sun");
    // console.log(generatorFn2Test.next("sun1"))
    // console.log(generatorFn2Test.next("sun2"))
    // console.log(generatorFn2Test.next("sun3"))

}

//4
{

    function *generate() {
        yield* [1, 2, 3];
    }
    // for (let x of generate()){
    //     console.log('x', x);
    // }

}

//5
{
    function *nTimes(n) {

        if(n>0){
            yield* nTimes(n - 1);
            yield n - 1;
        }

    }

    // for (let x of nTimes(3)){
    //     console.log('x', x);
    // }

}

//6
{

    class Node{
        constructor(id) {
            this.id = id;
            this.neighbors = new Set();
        }
        connect(node){
            if(node!==this){
                this.neighbors.add(node);
                node.neighbors.add(this);
            }
        }
    }


    class RandomGraph{
        constructor(size) {
            this.nodes = new Set();


            for (let i=0;i<size;i++){
                this.nodes.add(new Node(i));
            }

            const threshold = 1 / size;
            for (let x of this.nodes){
                for (let y of this.nodes){
                    if(Math.random()<threshold){
                        x.connect(y);
                    }
                }
            }

        }
    }

}

//7
{

    const getData = () => new Promise(resolve => setTimeout(() => { resolve('data') }, 1000))


    //1
    // async function test () {
    //     const data = await getData();
    //     console.log('data: ', data);
    //     const data2 = await getData();
    //     console.log('data2: ', data2);
    //     return 'success';
    // }
    // test().then(res => console.log(res));

    //2
    function* testG () {
        const data = yield getData();
        console.log('data: ', data);
        const data2 = yield getData();
        console.log('data2: ', data2);
        return 'success';
    }
    var gen = testG();

    // // 2.1 之后手动调用3次
    // console.log(gen.next())
    // console.log(gen.next())
    // console.log(gen.next())

    // // 2.2
    // var dataPromise= gen.next();
    // console.log(dataPromise);
    // var dataPromise2 = gen.next('这个参数才会被赋给data变量');
    // console.log(dataPromise2);
    // var dataPromise3 = gen.next('这个参数才会被赋给data2变量');
    // console.log(dataPromise3);

}


//8
{

    function* gen() {

        while (true){
            try {
                yield "sun1992"
            }catch (e) {
                console.log(e)
            }
        }

    }

    let g = gen();
    // console.log(g.next());
    // console.log(g.next());
    // g.throw(new Error('错误'))


}

//9
{

    const getData = () => new Promise(resolve => setTimeout(() => { resolve('data') }, 1000))

    function* testG () { // 这个就是上面的那个案例
        const data = yield getData();
        console.log('data: ', data);
        const data2 = yield getData();
        console.log('data2: ', data2);
        return 'success';
    }

    function asyncToGenerator (genFunc) {

        return function () {
            let gen = genFunc.apply(this, arguments);
            return new Promise((resolve,reject)=>{

                function step(key,arg) {

                    let generateResult = gen[key](arg);
                    let {value,done} = generateResult

                    if(done){
                        resolve(value);
                    }else {
                        Promise.resolve(value).then((val)=>{
                            step('next', val);
                        })
                    }

                }
                step("next")

            })
        }
    }


    async function span(gen) {
        return new Promise(((resolve, reject) => {
            let g = gen();

            let step = (nextF) => {
                let genResult;
                try {
                    genResult = nextF();
                }catch (e) {
                    return reject(e);
                }
                let {value, done} = genResult;
                if(done){
                    return resolve(value);
                }

                Promise.resolve(value).then((val)=>{
                    step(function () {
                        return g.next(val);
                    })
                })

            };

            step(function () {
                return g.next(undefined);
            })
        }));
    }


    //1
    // var gen = asyncToGenerator(testG)
    // gen().then(res => console.log(res))

    //2
    // let a = span(testG);
    // a.then((val)=>{
    //     console.log('a', val);
    // })


}