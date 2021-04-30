/**
 *  微型hooks的实现
 **/

// Demo 2
const MyReact = (function() {
    let hooks = [];
    let currentHook = 0;

    return{
        render(component){
            currentHook = 0;
            const app = component();
            app.render();
            return app;
        },

        useEffect(callBack,depsArray){
            let useHookIndex = currentHook;
            currentHook++;

            let isOwnedDeps = !depsArray;
            let _deps = hooks[useHookIndex];
            let isDepsUpdate = _deps ? _deps.every((elem, index) => {
                return elem !== depsArray[index];
            }) : true;

            if(isOwnedDeps || isDepsUpdate){
                callBack();
                _deps = depsArray
            }

        },

        useState(initState){
            let useHookIndex = currentHook;
            currentHook++;

            hooks[useHookIndex] = hooks[useHookIndex] || initState;
            function setState(latestValue) {
                hooks[useHookIndex] = latestValue
            }
            return [hooks[useHookIndex], setState];
        }

    }

})()

// 继续 Demo 2
function Counter() {
    const [count, setCount] = MyReact.useState(0)
    const [name, setName] = MyReact.useState('sun')

    MyReact.useEffect(() => {
        console.log('count', count);
    }, [count]);

    return {
        click: () => setCount(count + 1),
        noop: () => setCount(count),
        render: () => console.log('render:', { count, name })
    }
}
let app;
app = MyReact.render(Counter);
app.click();
app = MyReact.render(Counter);
app.noop();
app = MyReact.render(Counter);

