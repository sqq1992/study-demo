
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


let CreateDiv = (function () {

    let instance;
    let createDiv = function (html) {
        if(instance){
            return instance;
        }
        this.html = html;
        this.init();
        instance = this;
    };
    createDiv.prototype.init = function () {
        let div = document.createElement('div');
        div.innerHTML = this.html
        document.body.appendChild(div);
    };

    return createDiv;
})();

let a1 = new CreateDiv('div1');
let a2 = new CreateDiv('div2');
