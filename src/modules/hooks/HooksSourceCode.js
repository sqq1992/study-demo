/**
 *  hooks源码实现
 **/

let isMount = false;
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

function useState(initState) {

    let hooks;

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

    }



    let dispatch = () => {

    };

    return [initState, dispatch];
}


function App() {

    const [num, updateNum] = useState(0);

    return{
        onClick(){
            updateNum(num => num + 1);
        }
    }

}

window.app = run();