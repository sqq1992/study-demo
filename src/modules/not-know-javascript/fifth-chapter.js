
//

{

    // for (var i=1;i<=5;i++){
    //     let j = i;
    //     setTimeout(function (){
    //         console.log(j);
    //     },j*100)
    //
    // }

}


//模块机制
{

    var MyModules = (function (){
        var modules = {};

        var definde = function (name,deps,impl){
            var innerDeps = [];

            for (var i=0,j=deps.length;i<j;i++){
                innerDeps[i] = modules[deps[i]];
            }

            modules[name] = impl.apply(impl,innerDeps);
        }

        var getModules = function (name){
            return modules[name]
        }


        return{
            definde,
            getModules
        }

    })();


    //todo
    MyModules.definde('bar',[],function (){

        function hello(name){
            return 'hello'+name;
        }

        return{
            hello
        }
    })

    MyModules.definde('foo',['bar'],function (bar){
        var hunger = '11'


        function awe(name){
            return 'awe'+name+hunger
        }

        return{
            awe
        }
    })


}


//this 指针
{

    function foo(a,b){
        console.log("a: "+a+"","b: "+b+"");
    }

    // //1
    // foo.apply(null,[2,3]);
    //
    // //2
    // var baz = foo.bind(null,2);
    // baz(3);


}

//2
{

    //软绑定
    Function.prototype.softBind = function (obj){
        let fn = this;
        let args = [].slice.call(arguments,1);

        return function (){
            return fn.apply((!this || this === window) ? obj : this, args.concat.apply(args, arguments));
        }
    }

    function foo(){
        console.log("name"+this.name);
    }
    var obj = {name: 'obj'}
    var obj2 = {name: 'obj2'}
    var obj3 = {name: 'obj3'}

    // //1
    // var fooObj = foo.softBind(obj);
    // fooObj();
    //
    // //2
    // obj2.foo = foo.softBind(obj);
    // obj2.foo();
    //
    // //3
    // fooObj.call(obj3);

}

//3 存在性
{
    var myObject = {
        a:2
    }

    //1
    // console.log('1','a' in myObject)
    // console.log('2','b' in myObject)
    // console.log('3',myObject.hasOwnProperty('a'))
    // console.log('4',myObject.hasOwnProperty('b'))



}


// 生成器
{
    var x = 1;
    function *foo(){
        x++;
        yield;
        x++;
    }
    function bar(){
        x++;
    }

    //1
    // var it = foo();
    // it.next();
    // console.log("x: ",x);
    // bar();
    // console.log("x: ",x);
    // it.next();
    // console.log("x: ",x);

}

// 生成器-2
{

    function *foo(x){
        var y = x * (yield );
        return y;
    }

    // var it = foo(6);
    //
    // var it1 = it.next();
    // console.log('it1', it1.value);
    //
    // var it2 = it.next(7);
    // console.log('it2', it2.value);

}

// 迭代器
{

    var something = (function (){
        var nextVal;

        return{
            [Symbol.iterator]: function (){
                return this
            },
            next: function (){
                if(nextVal===undefined){
                    nextVal = 1;
                }else {
                    nextVal = nextVal*3+6;
                }
                return {
                    done: false,
                    value: nextVal
                };
            }
        }

    })();

    //1
    // console.log('something1',something.next().value)
    // console.log('something1',something.next().value)
    // console.log('something1',something.next().value)
    // console.log('something1',something.next().value)

    //2
    // for(var v of something){
    //     console.log(v);
    //     if(v>500){
    //         break;
    //     }
    // }


    // var a = [1,3,5,7,9];
    // var it = a[Symbol.iterator]();
    // console.log('a',it.next().value)
    // console.log('a',it.next().value)
    // console.log('a',it.next().value)
    // console.log('a',it.next().value)
    // console.log('a',it.next().value)


}

// 生成器->迭代器
{

    function *something() {
        var nextVal
        while (true){
            if(nextVal===undefined){
                nextVal = 1;
            }else {
                nextVal = (3*nextVal)+6;
            }
            yield nextVal
        }
    }

    //1
    // var it = something();
    // console.log('it',it.next().value)
    // console.log('it',it.next().value)
    // console.log('it',it.next().value)
    // console.log('it',it.next().value)

    //2 break终止
    // for(var v of something()){
    //     console.log(v);
    //
    //     if(v>500){
    //         break
    //     }
    //
    // }

    //3

}

// promise+生成器
{

    //generator自动执行promise的链路， 实现async/await
    function run(gen){

        return new Promise((resolve,reject)=>{
            var go = gen();

            function _next(val) {
                try {
                    var res = go.next(val);
                }catch (e) {
                    return reject(e)
                }

                if(res.done) return resolve(res.value);

                Promise.resolve(res.value).then((json)=>{
                    _next(json)
                },(err)=>{
                    go.throw(err)
                })

            }

            _next()
        })
    }

    function *main(){
        let a1 = yield Promise.resolve(1)
        let a2 = yield Promise.resolve(2)
        let a3 = yield Promise.resolve(3)
        console.log('main',{
            a1,
            a2,
            a3
        })
    }
    // run(main)

}

// 生成器委托
{

    function *foo(){
        console.log('*foo starting')
        yield 3;
        yield 4;
        console.log('*foo finished')
    }

    function *bar(){
        yield 1;
        yield 2;
        yield *foo();
        yield 5;
    }

    //
    var it = bar();
    it.next();
    it.next();
    it.next();
    it.next();
    it.next();

}

{

    function *something() {
        try {
            var nextVal;
            while (true){

                if(nextVal===undefined){
                    nextVal = 1
                }else {
                    nextVal = (3 * nextVal) + 6;
                }

                yield nextVal
            }

        }finally {
            console.log('clear up')
        }
    }

    //1
    // var it = something();
    // for(var v of it){
    //     console.log(v);
    //
    //     if(v>500){
    //         console.log(it.return('Hello world').value);
    //     }
    //
    // }



}

// 性能Performance
{

    function a() {
        b();
    }
    function b() {
        let total = 0;
        for(let i = 0; i< 10*10000*10000; i++) {
            total += i;
        }
        console.log('b:', total);
    }

    // a();


    function c() {
        d();
    }
    function d() {
        let total = 0;
        for(let i = 0; i< 1*10000*10000; i++) {
            total += i;
        }
        console.log('c:', total);
    }
    // c();


}
