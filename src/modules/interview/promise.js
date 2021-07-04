

//1.使用Promise实现每隔1秒输出1,2,3
{

    let func1 = () => {
        let arr = [1, 2, 3];
        let temp = arr.reduce((p,x)=>{
            return p.then(()=>{
                return new Promise((resolve)=>{
                    setTimeout(() => {
                        resolve(console.log(x));
                    }, 1000);
                })
            })
        },Promise.resolve())
    };
    // func1();

}

//2  红灯3秒亮一次，黄灯2秒亮一次，绿灯1秒亮一次；如何让三个灯不断交替重复亮灯？
{

    function red() {
        console.log('red');
    }
    function yellow() {
        console.log('yellow');
    }
    function green() {
        console.log('green');
    }

    let light = (timer,cb) => {
        return new Promise((resolve)=>{
            setTimeout(() => {
                resolve(cb())
            }, timer);
        })
    };

    let func2 = () => {

        Promise.resolve()
            .then(()=>{
                return light(3000, red);
            })
            .then(()=>{
                return light(2000, yellow);
            })
            .then(()=>{
                return light(1000, green);
            })
            .then(()=>{
                func2();
            })

    };

    // func2();

}

//3 实现mergePromise函数，把传进去的数组按顺序先后执行，并且把返回的数据先后放到数组data中。
{
    const time = (timer) => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve()
            }, timer)
        })
    }
    const ajax1 = () => time(2000).then(() => {
        console.log(1);
        return 1
    })
    const ajax2 = () => time(1000).then(() => {
        console.log(2);
        return 2
    })
    const ajax3 = () => time(1000).then(() => {
        console.log(3);
        return 3
    })

    function mergePromise (ajaxArray) {
        // 在这里写代码
        const data = [];
        let promise = Promise.resolve();
        ajaxArray.forEach((ajax)=>{

            promise = promise.then(ajax).then((res)=>{
                data.push(res);
                return data;
            })

        })

        return promise
    }

    // mergePromise([ajax1, ajax2, ajax3]).then(data => {
    //     console.log("done");
    //     console.log(data); // data 为 [1, 2, 3]
    // });

// 要求分别输出
// 1
// 2
// 3
// done
// [1, 2, 3]

}