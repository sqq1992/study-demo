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