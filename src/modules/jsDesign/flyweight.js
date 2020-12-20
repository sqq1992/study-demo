/**
 *  享元模式
 **/


let objectPoolFactory = function (createObjFn) {
    let pools = [];

    return{
        create: function () {
            let obj = pools.length === 0 ? createObjFn.apply(this, arguments) : pools.shift();
            return obj;
        },
        recover:function (obj) {
            pools.push(obj);
        }
    }
};

let iframeFactory = objectPoolFactory(function () {
    let iframe = document.createElement('iframe');
    document.body.appendChild(iframe);

    iframe.onload = function () {
        iframe.onload = null;
        iframeFactory.recover(iframe);
    };

    return iframe;
});


let iframe1 = iframeFactory.create();
iframe1.src = '1';

let iframe2 = iframeFactory.create();
iframe2.src = '2';






