
/**
 *  数据类型
 **/

// symbol
{

    let globalSymbol = Symbol.for("foor");
    let secondGlobalSymbol = Symbol.for("foor");
    // console.log('equal', globalSymbol == secondGlobalSymbol);

}

//symbol.asyncIterator
{
    class Foo{
        async *[Symbol.asyncIterator](){}
    }

    //ceshi1
    // let f = new Foo();
    // console.log(f[Symbol.asyncIterator]());

    class Emitter{
        constructor(max) {
            this.max = max;
            this.index = 0;
        }

        async *[Symbol.asyncIterator](){
            while (this.index<this.max){
                yield new Promise((resolve)=>{
                    resolve(this.index++);
                })
            }
        }
    }

    async function test1() {
        let emitter = new Emitter(5);
        console.log('emiiter', emitter);
        for await (let i of emitter){
            console.log(i);
        }
    }

    // test1();
}

//Symbol.iterator
{
    class Emitter{
        constructor(max) {
            this.max = max;
            this.index = 0;
        }
        *[Symbol.iterator](){
            while (this.index<this.max){
                yield this.index++;
            }
        }
    }

    function test1() {
        let emiiter = new Emitter(5);
        for (let i of emiiter){
            console.log(i);
        }
    }

    // test1();

}

//判断一个构造器函数是否是它的实例
{

    class MyNumber{
        static [Symbol.hasInstance](instance){
            return typeof instance === "number";
        }
    }

    //todo 放在原型上了
    class MyNumber2{
        [Symbol.hasInstance](instance){
            return typeof instance === "number";
        }
    }

    // var num = 3;
    // console.log('MyNumber', num instanceof MyNumber)
    // console.log('MyNumber2', num instanceof MyNumber2.prototype)
}