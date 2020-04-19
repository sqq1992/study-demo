

//test
{

    // let test1 = new Promise(function (resolve,reject) {
    //     setTimeout(() => {
    //         console.log('start-1');
    //         // resolve('step-2');
    //         reject('error-step-2');
    //     }, 3000);
    //
    // }).then((json)=>{
    //     console.log(json);
    //     return new Promise((resolve,rejected)=>{
    //         resolve('step-3');
    //     })
    // },(error)=>{
    //     console.log(error);
    //     return "error-step-3";
    // }).then((json)=>{
    //     console.log(json);
    //     return 'step-4';
    // },(error)=>{
    //     console.log(error);
    //     return "error-step-4";
    // }).then((json)=>{
    //     console.log(json);
    // },(error)=>{
    //     console.log(error);
    // })
}


{

    let MyPromise = function (execute) {

        this.status = "pending";
        this.resolveCb = [];
        this.rejectedCb = [];
        this.result = null;
        this.rejectResult = null;


        let resolve = (result) => {
            this.status = "resolve";
            this.result = result;
            this.resolveCb.forEach((elem)=>{
                elem();
            })
        };

        let rejected = (rejectResult) => {
            this.status = "rejected";
            this.rejectResult = rejectResult;
            this.rejectedCb.forEach((elem)=>{
                elem();
            })
        };


        try {
            execute(resolve, rejected);
        }catch (e) {
            rejected(e);
        }


    };

    MyPromise.prototype.then = function (onFulfilled, onRejected) {
        let _this = this;

        onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (data) => {
            return data;
        };

        onRejected = typeof onRejected === "function" ? onRejected : () => {
            throw new Error();
        };

        let tempPromise = new MyPromise(function (resolve, reject) {


            if(_this.status==="resolve"){
                setTimeout(() => {
                    try {
                        let tempResult = onFulfilled(_this.result);
                        _this._handlePromise(tempPromise, tempResult, resolve, reject);
                    }catch (e) {
                        reject(e);
                    }

                });
            }else if(_this.status==="rejected"){
                setTimeout(() => {
                    try {
                        let tempRejectResult = onRejected(_this.rejectResult);
                        _this._handlePromise(tempPromise, tempRejectResult, resolve, reject);
                    }catch (e) {
                        reject(e);
                    }

                });
            }else if(_this.status==="pending"){
                _this.resolveCb.push(() => {
                    setTimeout(() => {
                        try {
                            let tempResult = onFulfilled(_this.result);
                            _this._handlePromise(tempPromise, tempResult, resolve, reject);
                        }catch (e) {
                            reject(e);
                        }

                    });
                });
                _this.rejectedCb.push(()=>{
                    setTimeout(() => {
                        try {
                            let tempRejectResult = onRejected(_this.rejectResult);
                            _this._handlePromise(tempPromise, tempRejectResult, resolve, reject);
                        }catch (e) {
                            reject(e);
                        }

                    });
                })
            }
        });


        return tempPromise;
    };

    MyPromise.prototype._handlePromise = function (currentPromise,result,resolve,reject) {


        if(result && (typeof result==="object" || typeof result==="function")){

            let then = result.then;

            if(typeof then==="function"){

                then.call(result,(y)=>{
                    this._handlePromise(currentPromise, y, resolve, reject);
                },(x)=>{
                    reject(x);
                })

            }else {
                try {
                    resolve(result);
                }catch (e) {
                    reject(e);
                }
            }

        }else {

            try {
                resolve(result);
            }catch (e) {
                reject(e);
            }

        }


    };


    let test2 = new MyPromise(function (resolve,reject) {
        setTimeout(() => {
            console.log('start-1');
            reject('error-step-2');
        }, 3000);

    }).then((json)=>{
        console.log(json);
        return new MyPromise((resove,rejected)=>{
            rejected('error-step-3');
        });
    },(error)=>{
        console.log(error);
        return "error-step-3";
    }).then((json)=>{
        console.log(json);
        return 'step-4';
    },(error)=>{
        console.log(error);
        return "error-step-4";
    }).then((json)=>{
        console.log(json);
    },(error)=>{
        console.log(error);
    })



}
