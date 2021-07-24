/**
 *  React 时间切片-MessageChannel实现调度
 */

let isMessageLoopRunning = false;
let scheduledHostCallback = null
/* 建立一个消息通道 */
var channel = new MessageChannel();
/* 建立一个port发送消息 */
var port = channel.port2;

channel.port1.onmessage = function(){
    /* 执行任务 */
    scheduledHostCallback()
    /* 执行完毕，清空任务 */
    scheduledHostCallback = null
};
/* 向浏览器请求执行更新任务 */
requestHostCallback = function (callback) {
    scheduledHostCallback = callback;
    if (!isMessageLoopRunning) {
        isMessageLoopRunning = true;
        port.postMessage(null);
    }
};

//todo  React调度都是使用这个api
requestHostCallback(()=>{
    console.log('wo shi tian cai!')
})
