

//防抖函数
{

    function debounce(fn, time) {
        let timer = null;
        return function() {
            if(timer){
                clearTimeout(timer);
            }

            timer = setTimeout(()=>{
                fn.apply(this, arguments);
            },time)
        };
    }

    // function debounce(func,wait) {
    //     let timer = null;
    //     return function () {
    //         let context = this;
    //         let args = arguments;
    //         if(timer){
    //             clearTimeout(timer);
    //         }
    //         timer = setTimeout(()=>{
    //             console.log('args', args);
    //             func.apply(context, args);
    //         },wait)
    //
    //     };
    // }


    //todo test1
    // let show = debounce(function () {
    //     console.log('show-1')
    // }, 1500);
    // document.documentElement.addEventListener("click", show);


}


//节流
{

    // function throttle(fn, time) {
    //     let timer = null;
    //     return function()  {
    //         if(!timer){
    //             timer = setTimeout(() => {
    //                 fn.apply(this, arguments);
    //                 timer = null;
    //             }, time);
    //         }
    //     };
    // }


    function throttle(func,time) {

        let timer = null;
        return function () {
            let context = this;
            let args = arguments;

            if(timer) return;

            timer = setTimeout(()=>{
                func.apply(context, args);
                timer = null;
            },time)

        }
    }


    //todo test1
    // let show = throttle(function () {
    //     console.log('show-1')
    // }, 1500);
    //
    // setInterval(() => {
    //     show();
    // }, 200);

}
