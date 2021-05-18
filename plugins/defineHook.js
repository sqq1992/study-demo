
const {
    SyncHook
} = require('tapable')


const hook = new SyncHook(['a1', 'a2', 'a3']);

hook.tap('hook1',(a1,a2,a3)=>{
    console.log(a1, a2, a3);
})

hook.call(1, 2, 3);