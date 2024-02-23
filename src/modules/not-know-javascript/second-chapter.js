/**
 * this和对象原型
 */

//2.4.3 软绑定
{

    Function.prototype.softBind = function (obj){
        let fn = this;

        let curryArgs = [].slice.call(arguments, 1);
        let bound = function (){
            return fn.apply((!this || this === (window || global)) ? obj : this, curryArgs.concat.apply(curryArgs, arguments));
        }

        bound.prototype = Object.create(fn.prototype);
        return bound;
    }


    //test
    function foo(){
        console.log('name'+this.name)
    }
    var obj = {name: 'obj'};
    var obj2 = {name: 'obj2'};
    var obj3 = {name: 'obj3'};

    let fooObj = foo.softBind(obj);
    fooObj();


    obj2.foo = foo.softBind(obj);
    obj2.foo();

    fooObj.call(obj3);

    setTimeout(obj2.foo, 100);


}
