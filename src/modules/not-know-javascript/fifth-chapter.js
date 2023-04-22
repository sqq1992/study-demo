
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
    console.log('1','a' in myObject)
    console.log('2','b' in myObject)
    console.log('3',myObject.hasOwnProperty('a'))
    console.log('4',myObject.hasOwnProperty('b'))



}
