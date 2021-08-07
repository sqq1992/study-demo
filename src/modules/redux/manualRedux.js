import React, {useEffect} from 'react';


function createStore(reducer,initState) {

    let state;
    let listeners = [];


    const getState = () => {
        return state;
    };

    const dispatch = (action) => {
        state = reducer(state,action);
        listeners.forEach((fn)=>{
            fn();
        })
    };

    const subscribable = (fn) => {
        listeners.push(fn);
        return () => {
            listeners = listeners.filter((elem)=>{
                return elem !== fn;
            })
        };
    };


    dispatch(`sun${Math.random()}`);

    return{
        getState,
        dispatch,
        subscribable
    }

}

function combineReducers(reducers) {
    return function (state = {}, action) {

        let newState = {};
        for (let key in reducers){

            newState[key] = reducers[key](state, action);

        }

    };
}

function compose(...func) {


}

function applyMiddleware(...middleWares) {

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

//test store
export const store = createStore(combineReducers({
    colorReducer,
    countReducer
}), applyMiddleware(loggerMiddleWares1, loggerMiddleWares2));



