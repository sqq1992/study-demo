import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';


function createStore(reducer,initState) {

    let state;
    let listeners = [];

    if(typeof initState==="function"){
        return initState(createStore)(reducer, null);
    }

    let getState = function(){
        return state;
    }

    let subscribable = function (fn) {

        listeners.push(fn);
        return () => {
            listeners = listeners.filter((elem)=>{
                return elem !== fn;
            })
        };
    };

    let dispatch = function (action) {
        state = reducer(state, action);
        listeners.forEach((fn)=>{
            fn && fn();
        })
    };

    dispatch({type:`sun${Math.random()}`})

    return{
        dispatch,
        getState,
        subscribable
    }
}

function combineReducers(reducers) {
    return function (state = {}, action) {
        let newState = {};
        let hasChanged = false;
        for(let key in reducers){
            const prevState = state[key];
            const currentNewState = reducers[key](prevState, action);
            newState[key] = currentNewState;

            hasChanged = hasChanged || prevState !== currentNewState;
        }

        return hasChanged ? newState : state;
    };
}

function compose(...func) {

    if(func.length===0){
        return arg => arg;
    }

    if(func.length===1){
        return func[0]
    }

    return func.reduce((prev,next)=>{
        return function (...args) {
            return prev(next(...args))
        };
    })
}

function applyMiddleware(...middleWares) {
    return function (createStore) {
        return function (...args) {
            let store = createStore(...args);
            let dispatch = function () {
                throw Error('还未初始化')
            };

            const middlewareApi = {
                getState:store.getState,
                dispatch: (...args) => dispatch(...args)
            };

            let middles = middleWares.map((elem)=>{
                return elem(middlewareApi);
            })

            dispatch = compose(...middles)(store.dispatch);

            return{
                ...store,
                dispatch
            }
        }
    }
}

function loggerMiddleWares1({dispatch,getState}) {
    return function (next) {
        return function (action) {
            console.log('loggerMiddleWares1', getState());
            return next(action);
        }
    }
}

function loggerMiddleWares2({dispatch,getState}) {
    return function (next) {
        return function (action) {
            console.log('loggerMiddleWares2', getState());
            return next(action);
        }
    }
}


//todo 业务store
function colorReducer(state={color:'red'},action) {
    switch (action.type) {
        case "changeColor":
            return{
                ...state,
                color:action.color
            }
        default:
            return state;

    }
}

function countReducer(state = {num: 1}, action) {
    switch (action.type) {
        case "changeNum":
            return{
                ...state,
                num:action.num
            }
        default:
            return state;

    }
}

function renderHeader(state) {
    let {color, count} = state;
    let header = document.getElementById('header');
    header.style.color = color.color
    header.innerHTML = `我是第${count.num}个`;
}

function renderBodyer(state) {
    let header = document.getElementById('bodyer');
    header.style.color = state.color
}


const DemoApp = () => {

    useEffect(() => {

        let combineStore = combineReducers({
            color: colorReducer,
            count: countReducer,
        })
        let allStore = createStore(combineStore, applyMiddleware(loggerMiddleWares1, loggerMiddleWares2));


        renderHeader(allStore.getState());
        allStore.subscribable(function () {
            renderHeader(allStore.getState());
        })

        document.getElementById('header').onclick = function () {
            allStore.dispatch({
                type: 'changeNum',
                num: 4
            })
        };


    }, []);

    return(
        <div>
            <div id="header">我是header</div>
            <div id="bodyer">我是bodyer</div>
        </div>
    )
};


const render = () => {
    ReactDOM.render(
        <DemoApp />,
        document.getElementById('root2')
    );
};
render();

