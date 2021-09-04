setTimeout(() => {
    const result  = import('./es6B')
    result.then(res=>{
        console.log(res)
    })
}, 0);
