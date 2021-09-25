

//test
{

    //1
    // let aaPro = Promise.all([
    //     new Promise((resolve,reject)=>{
    //         resolve("first")
    //     }),
    //     new Promise((resolve,reject)=>{
    //         reject("second")
    //     }),
    // ]).then((json)=>{
    //     console.log('json', json);
    // },(error)=>{
    //     console.log('error', error);
    // }).catch((e)=>{
    //     console.log('e', e);
    // })

    //2
    // new Promise((resolve)=>{
    //     resolve("11")
    // }).then(32).then((json)=>{
    //     console.log('json2', json);
    // })





}



{

    const PENDING = "PENDING";
    const FULFILLED = "FULFILLED";
    const REJECTED = "REJECTED";

    class MyPromise{
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


            let tempPromise = new MyPromise(function (resolve,rejected) {

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

        finally(callback){

            return this.then((value)=>{
                return Promise.resolve(callback()).then(()=>{
                    return value;
                })
            })

        }


        _handlePromise(currentValue, currentPromise, resolve, rejected) {

            if(currentValue===currentPromise){
                rejected(new TypeError('不能是同一个promise对象'))
            }

            if(currentValue instanceof MyPromise){
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

            return new MyPromise(function (resolve, rejected) {

                if(params instanceof MyPromise){
                    params.then(resolve, rejected);
                }else {
                    resolve(params);
                }
            });
        }

        static rejected(params){
            return new MyPromise(function (resolve,innerRejected) {
                innerRejected(params);
            })
        }

        static all(params){

            return new MyPromise(function (resolve,rejected) {
                let result = [];
                let index = 0;
                if(params.length===0){
                    resolve(result);
                }else {
                    for(let i=0,j=params.length;i<j;i++) {
                        MyPromise.resolve(params[i]).then((json)=>{
                            index++;
                            result[i] = json;

                            if(index===params.length){
                                resolve(result);
                            }
                        })
                    }
                }
            })
        }


        static race(promises){
            let promiseArr = Array.from(promises);

            return new MyPromise((resolve,reject)=>{
                if(promiseArr.length===0){
                    return;
                }else {
                    for (let i=0,j=promiseArr.length;i<j;i++) {
                        MyPromise.resolve(promiseArr[i]).then((json)=>{
                            resolve(json);
                        },(reason)=>{
                            reject(reason);
                        })
                    }
                }
            })

        }


    }



    //todo test
    // let aa = new MyPromise(function (resolve,rejected) {
    //         setTimeout(() => {
    //             console.log('step-1');
    //             resolve('step-2');
    //         }, 3000);
    // }).then((json)=>{
    //     console.log(json);
    //     return new MyPromise(function (resolve,rejected) {
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
    // let test22 = MyPromise.resolve(44).then((json)=>{
    //     console.log('MyPromise.resolve', json);
    // })


    //todo test3
    // let test3 = Promise.reject(44).then(()=>{
    //
    // },(json)=>{
    //     console.log('Promise.reject', json);
    // })
    //
    // let test33 = MyPromise.rejected(44).then(()=>{
    // },(json)=>{
    //     console.log('MyPromise.reject', json);
    // })

    //todo test4
    // Promise.all([2]).then((json)=>{
    //     console.log('promise.all', json);
    // })
    //
    // MyPromise.all([new MyPromise((resolve)=>{
    //     setTimeout(()=>{
    //         resolve(1)
    //     },3300)
    // }),2]).then((json)=>{
    //     console.log('MyPromise.all', json);
    // })

    //todo test5
    // MyPromise.race([new MyPromise((resolve)=>{
    //     setTimeout(()=>{
    //         resolve(1)
    //     },3300)
    // }),2]).then((json)=>{
    //     console.log('MyPromise.race', json);
    // })

    //todo test6
    // let a1 = new Promise((resolve)=>{
    //     resolve("111")
    // }).then((json)=>{
    //     return 222
    // }).finally(()=>{
    //     return 333
    // }).then((json)=>{
    //     console.log('finally', json);
    // })


    // let a2 = new MyPromise((resolve)=>{
    //     resolve("111")
    // }).then((json)=>{
    //     return 222
    // }).finally(()=>{
    //     return 333
    // }).then((json)=>{
    //     console.log('finally', json);
    // })

}

