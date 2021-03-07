

//test
{






}



{

    const PENDING = "PENDING";
    const FULFILLED = "FULFILLED";
    const REJECTED = "REJECTED";

    class MyPromise2{
        constructor(executor) {
            this.state = PENDING;
            this.fulfilledQueue = [];
            this.fulfilledValue = null;
            this.rejectedQueue = [];
            this.rejectedValue = null;


            let resolve =  (value) =>{
                if(this.state===PENDING){
                    this.state = FULFILLED;
                    this.fulfilledValue = value;
                    while (this.fulfilledQueue.length){
                        let callBack = this.fulfilledQueue.shift();
                        callBack(this.fulfilledValue)
                    }
                }
            };

            let rejected = (value) => {
                if(this.state===PENDING){
                    this.state = REJECTED;
                    this.rejectedValue = value;
                    while (this.rejectedQueue.length){
                        let callBack = this.rejectedQueue.shift();
                        callBack(this.rejectedValue)
                    }
                }
            };

            try {
                executor(resolve, rejected);
            }catch (e) {
                rejected(e)
            }
        }


        then(onFulfilled, onRejected) {
            let _this = this;
            onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (value) => {
                return value;
            };
            onRejected = typeof onRejected === "function" ? onRejected : (error) => {
                throw new Error(error);
            };


            let tempPromise = new MyPromise2(function (resolve,rejected) {

                if(_this.state===PENDING){

                    _this.fulfilledQueue.push((value)=>{
                        setTimeout(() => {
                            try {
                                let resolveValue = onFulfilled(value);
                                _this._handlePromise(resolveValue, tempPromise, resolve, rejected);
                            }catch (e) {
                                rejected(e);
                            }
                        });
                    })

                    _this.rejectedQueue.push((value)=>{
                        setTimeout(() => {
                            try {
                                let rejectedValue = onRejected(value);
                                _this._handlePromise(rejectedValue,tempPromise,resolve,rejected)
                            }catch (e) {
                                rejected(e);
                            }
                        });
                    })

                }else if(_this.state===FULFILLED){
                    setTimeout(()=>{
                        try {
                            let resolveValue = onFulfilled(_this.fulfilledValue);
                            _this._handlePromise(resolveValue, tempPromise, resolve, rejected);
                        }catch (e) {
                            rejected(e);
                        }
                    })

                }else if(_this.state===REJECTED) {
                    setTimeout(() => {
                        try {
                            let rejectedValue = onRejected(_this.rejectedValue);
                            _this._handlePromise(rejectedValue,tempPromise,resolve,rejected)
                        }catch (e) {
                            rejected(e);
                        }
                    });
                }


            })

            return tempPromise;
        }


        _handlePromise(currentValue, currentPromise, resolve, rejected) {

            if(currentValue===currentPromise){
                rejected(new TypeError('不能是同一个promise对象'))
            }


            if(currentValue instanceof MyPromise2){
                currentValue.then((json) => {
                    this._handlePromise(json, currentPromise, resolve, rejected);
                }, (json) => {
                    rejected(json);
                });
            }else {
                try {
                    resolve(currentValue);
                }catch (e) {
                    rejected(e);
                }
            }

        }


        static resolve(params) {

            return new MyPromise2(function (resolve, rejected) {

                if(params instanceof MyPromise2){
                    params.then(resolve, rejected);
                }else {
                    resolve(params);
                }

            });
        }

        static rejected(params){
            return new MyPromise2(function (resolve,innerRejected) {
                innerRejected(params);
            })
        }

    }



    //todo test
    // let aa = new MyPromise2(function (resolve,rejected) {
    //         setTimeout(() => {
    //             console.log('step-1');
    //             resolve('step-2');
    //         }, 3000);
    // }).then((json)=>{
    //     console.log(json);
    //     return new MyPromise2(function (resolve,rejected) {
    //         setTimeout(() => {
    //             resolve('step-3');
    //         }, 3000);
    //     }).then((json)=>{
    //         console.log('step-4')
    //         return 'step-5';
    //     })
    // },(json)=>{
    //     console.log('aa', json);
    // }).then((json)=>{
    //     console.log(json);
    //     return 'step-6';
    // }).then((json)=>{
    //     console.log(json);
    //     return 'step-7';
    // })

    //todo test2
    // let test2 = Promise.resolve(44).then((json)=>{
    //     console.log('test1', json);
    // })
    // let test22 = MyPromise2.resolve(44).then((json)=>{
    //     console.log('MyPromise2.resolve', json);
    // })


    //todo test3
    let test3 = Promise.reject(44).then(()=>{

    },(json)=>{
        console.log('Promise.reject', json);
    })

    let test33 = MyPromise2.rejected(44).then(()=>{
    },(json)=>{
        console.log('MyPromise2.reject', json);
    })




}

