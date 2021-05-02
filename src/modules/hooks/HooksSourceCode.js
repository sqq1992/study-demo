/**
 *  hooks源码实现
 **/

let isMount = true;
let workingProgressHook = null;

const fiber = {
    memorizeState:null,
    stateNode: App
};

function run() {
    workingProgressHook = fiber.memorizeState;
    const app = fiber.stateNode();
    isMount = false;
    return app;
}

function dispatchAction(queue,action) {
    const update = {
        action,
        next:null
    };

    if(queue.pending === null) {
        update.next = update;
    }else {
        update.next = queue.pending.next;
        queue.pending.next = update;
    }
    queue.pending = update;

    run();
}


function useState(initState) {
    let hooks;


    // 初始化或者更新useState
    if(isMount){
        hooks = {
            queue:{
                pending:null
            },
            memorizeState: initState,
            next: null
        };
        if(!fiber.memorizeState){
            fiber.memorizeState = hooks;
        }else {
            workingProgressHook.next = hooks;
        }
        workingProgressHook = hooks;
    }else {
        hooks = workingProgressHook;
        workingProgressHook = workingProgressHook.next;
    }


    //计算useState中dispatch产生的update
    let baseState = hooks.memorizeState;
    if(hooks.queue.pending){
        let firstUpdate = hooks.queue.pending.next;

        do {
            const action = firstUpdate.action;
            baseState = action(baseState);
            firstUpdate = firstUpdate.next;
        } while (firstUpdate !== hooks.queue.pending.next)

        hooks.queue.pending = null;
    }
    hooks.memorizeState = baseState;


    return [baseState, dispatchAction.bind(null, hooks.queue)];
}


function App() {

    const [num, updateNum] = useState(0);
    const [trigger, setTrigger] = useState(false);

    console.log('combine',{
        num,
        trigger
    })

    return{
        onClick(){
            updateNum(num => num + 1);
            updateNum(num => num + 2);
            updateNum(num => num + 3);
        },
        setTrigger(){
            setTrigger(flag => !flag);
        }
    }

}

window.app = run();