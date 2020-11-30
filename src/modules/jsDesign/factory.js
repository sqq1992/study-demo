/**
 * 工厂模式  通过一个方法控制类的实现, 不把类直接暴露出来
 */

class animal {
    constructor(name) {
        this.name = name;
    }
    init(){
        alert('init');
    }
    func1(){
        alert('func1');
    }
}

function creator(name) {
    return new animal(name);
}

let a1 = creator('sun');
a1.init();
a1.func1();