

function compose(...funs) {

    if(funs.length===0){
        return arg => arg;
    }

    if(funs.length===1){
        return funs[0];
    }

    return funs.reduce((prev,next)=>{
        return function () {
            return prev(next(...arguments));
        };
    })
}

function createStore(reducer,enhancer) {


    let currentReducer = reducer;
    let currentState;
    let initState = null;

    if(typeof enhancer==="function"){
        return enhancer(createStore)(reducer, {});
    }

    function getState() {
        return currentState;
    }

    function dispatch(action) {

        currentState = currentReducer(initState || {}, action);

        return action;
    }

    dispatch({})

    return{
        dispatch,
        getState
    }
}

function combineReducers(reducers) {
    return (state={},action) => {
        return Object.keys(reducers).reduce((nextState,key)=>{
            nextState[key] = reducers[key](state[key], action);
            return nextState;
        },{})
    };
}

function applyMiddleware(...middleWares) {

    return function (createStore) {

        return (...args) => {
            let store = createStore(...args);


            let dispatch = () => {

                throw new Error('错误dispatch');
            };

            let middlesWareApi = {
                getState: store.getState,
                dispatch: (...args) => dispatch(...args)
            };

            let chain = middleWares.map((middleWare)=>{
                return middleWare(middlesWareApi)
            })

            dispatch = compose(...chain)(store.dispatch);

            return {
                ...store,
                dispatch
            };

        };


    };

}



//test
const globalReducer = (state={a:1,b:2,c:3},action) => {
    switch (action.type) {
        case "aa":
            return {...state,...action.payload}
        default:
            return state;
    }
};
const userReducer = (state={name:'sun',age:24},action) => {
    switch (action.type) {
        case "user1":
            return {...state, ...action.payload}
        default:
            return state;
    }
};


function f1(num) {
    console.log('f1', num);
    return 'f1'
}
function f2(num) {
    console.log('f2', num);
    return 'f2';
}

function f3(num) {
    console.log('f3', num);
    return 'f3';
}

let a1 = compose(f1, f2, f3);
a1('sun');


let tempReducer = combineReducers({
    globalReducer,
    userReducer
})
let a2 = createStore(tempReducer);
console.log('a2-state', a2.getState());


//test2
function mf1({getState,dispatch}) {
    return (next)=>{
        return (action) => {
            console.log('start-mf1');
            next(action);
            console.log('end-mf1');
        };
    }
}
function mf2({getState,dispatch}) {
    return (next)=>{
        return (action) => {
            console.log('start-mf2');
            next(action);
            console.log('end-mf2');
        };
    }
}

let a3 = createStore(tempReducer, applyMiddleware(mf1, mf2));
a3.dispatch({});





