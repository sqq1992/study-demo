
/**
 *  promise对象
 **/

//1
{

    // let allJson = Promise.all([
    //     new Promise((resolve)=>{
    //         setTimeout(() => {
    //             resolve("2000");
    //         }, 2000);
    //     }),
    //     new Promise((resolve,reject)=>{
    //         setTimeout(() => {
    //             reject("3000");
    //         }, 3000);
    //     }),
    // ]).then((arr)=>{
    //     console.log('arr', arr);
    // },(err)=>{
    //     console.log('err', err);
    // }).catch((catchError)=>{
    //     console.log('catchError', catchError);
    // }).finally((final)=>{
    //     console.log('finally',final)
    // })

}

//2
{
    // var arr = [1, 2, 3, 4, 5];
    //
    // arr.reduce((prev, next) => {
    //
    //     let p = prev.then(()=>{
    //
    //         return new Promise((resolve)=>{
    //
    //             setTimeout(()=>{
    //                 console.log(next);
    //                 resolve();
    //             },1000)
    //
    //         })
    //
    //     })
    //
    //     return p;
    // }, Promise.resolve());

}


//3
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

        let data = [];
        let p = Promise.resolve();
        ajaxArray.forEach((ajax)=>{

            p = p.then(ajax).then((json)=>{
                data.push(json);
                return data;
            })

        })

        return p;
    }

    mergePromise([ajax1, ajax2, ajax3]).then(data => {
        console.log("done");
        console.log(data); // data 为 [1, 2, 3]
    });

}