
/**
 *  js实现普通的原生功能
 **/

//1. 实现map
{

    Array.prototype.myMap = function (fn,context) {
        let arr = Array.prototype.slice.call(this);
        let result = [];

        for (let index=0,j=arr.length;index<j;index++) {
            result.push(fn.call(context,arr[index],index))
        }

        return result;
    };


    //
    // let obj = {name: "sun"}
    // let arr = [1, 2, 3, 4, 5];
    // console.log('arr1',arr.map((elem)=>{
    //     return elem +""+ this.name;
    // },obj))
    // console.log('arr2',arr.myMap((elem)=>{
    //     return elem +""+ this.name;
    // },obj))


}


//2 reduce实现
{

    Array.prototype.myReduce = function (fn,initValue) {
        let arr = Array.prototype.slice.call(this);
        let result = initValue !== undefined ? initValue : arr.shift();
        for (let i=0,j=arr.length;i<j;i++) {
            result = fn(result, arr[i]);
        }
        return result;
    };

    //
    // let arr = [1, 2, 3, 4, 5];
    // console.log('arr1',arr.reduce((prev,next)=>{
    //     return prev + next;
    // },5))
    // console.log('arr2',arr.myReduce((prev,next)=>{
    //     return prev + next;
    // },5))
}

//3 call and apply
{

    Function.prototype.myCall = function (context=window, ...args) {
        let func = this;
        let fn = Symbol("fn");
        context[fn] = func;

        let res = context[fn](...args);
        delete context[fn];
        return res;
    };

    Function.prototype.myApply = function (context=window,args=[]) {
        let func = this;
        let fn = Symbol("fn");
        context[fn] = func;

        let res = context[fn](...args);
        delete context[fn];
        return res;
    };

    //
    let obj = {name: "sun",show:function (age) {
            console.log("name", this.name, age);
    }}
    function aa(age) {
        console.log("name", this.name, age);
    }

    // console.log('func1', aa.apply(obj, [24]));
    // console.log('func2', aa.myCall(obj, 24));
    // console.log('func2', aa.myApply(obj, [24]));
    // console.log('func3', obj.show(24));

}

//4 Object.create
{

    function create(proto) {

        function F() {}
        F.prototype = proto;
        return new F();
    }

    //
    // let obj = {name:"sun"}
    // console.log('o1', Object.create(obj));
    // console.log('o2', create(obj));

}

//5 bind
{
    Function.prototype.myBind = function (context,...args) {
        let self = this;

        let fBind = function () {
            return self.apply(this instanceof fBind ? this : context || window, args.concat(arguments));
        };
        fBind.prototype = Object.create(this.prototype);

        return fBind;
    };


}
