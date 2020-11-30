
/**
 *  单列模式  只能初始化一次
 */
class SingleObj {
    login(){
        console.log('login-----');
    }
}
SingleObj.getInstance = (function () {
    let instance;
    return function () {
        if(!instance){
            instance = new SingleObj();
        }
        return instance;
    };
})();

let obj = SingleObj.getInstance();
obj.login();
let obj2 = SingleObj.getInstance();
obj2.login();
console.log('equal', obj === obj2);
