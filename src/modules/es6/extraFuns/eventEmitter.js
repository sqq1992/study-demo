
/**
 *  发布订阅模式
 **/

//1
{

    class EventEmitter{
        constructor() {
            this.events = {};
        }

        on(type,callBack){

            if(this.events[type]){
                this.events[type].push(callBack);
            }else {
                this.events[type] = [callBack];
            }

        }

        off(type,callBack){
            if(!this.events[type]) return;
            this.events[type] = this.events[type].filter((elem)=>{
                return elem !== callBack;
            })
        }

        once(type,callback){
            let _this = this;
            function fn() {
                callback();
                _this.off(type, fn);
            }
            this.on(type,fn)
        }

        emit(type,...rest){

            if(this.events[type]){
                this.events[type].forEach((fn)=>{
                    fn.apply(this,rest)
                })
            }

        }

    }


    //todo
    let eventEmit = new EventEmitter();
    eventEmit.on("sun",function (age) {
        console.log('sun-forever', age);
    })

    setTimeout(() => {
        eventEmit.emit('sun', 32);
    }, 3000);

}

