/**
 *  代理模式
 **/

let multi = function () {
    let a=1;
    for(let i=0,j=arguments.length;i<j;i++) {
        a = a * arguments[i];
    }
    return a;
};

let proxyMulti = (function () {
    let cache = {};

    return function () {
        let cacheKey = Array.prototype.join.call(arguments, ',');
        if(cache[cacheKey]){
            return cache[cacheKey];
        }
        cache[cacheKey] = multi.apply(this, arguments);
        return cache[cacheKey];
    };

})();

console.log('multi1', proxyMulti(1, 2, 3, 4));
console.log('multi2', proxyMulti(1, 2, 3, 4));