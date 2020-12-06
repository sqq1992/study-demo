import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const createStore = (reducer) => {
    let state;
    let listeners = [];

    const getState = () => {
        return state;
    };

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach((listener)=>{
            listener();
        })
    };

    const subscribe = (listener) => {
        listeners.push(listener);
    };

    dispatch({});

    return{
        getState,
        dispatch,
        subscribe
    }
};

const combineReducers = (reducers) => {
    return (state = {}, action) => {
        return Object.keys(reducers).reduce((nextState,key)=>{
            nextState = reducers[key](state[key], action);
            return nextState;
        },{})
    };
};

function isPlainObject(obj) {
    if (typeof obj !== 'object' || obj === null) return false

    let proto = obj
    // 获取最顶级的原型，如果就是自身，那么说明是纯对象。
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto)
    }

    return Object.getPrototypeOf(obj) === proto
}

function compose(...funcs) {
    if (funcs.length === 0) {
        return arg => arg
    }

    if (funcs.length === 1) {
        return funcs[0]
    }
    // 通过 reduce 方法迭代。
    return funcs.reduce((a, b) => (...args) => a(b(...args)))
}


//todo test case
console.log('isPlainObject', isPlainObject({
    a: 1,
    b: 2
}));


const Counter = ({ value, onIncrement, onDecrement }) => (
    <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
);

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        default: return state;
    }
};

const store = createStore(reducer);

const render = () => {

    const handleIncrement = () => {
        setTimeout(() => {
            store.dispatch({type: 'INCREMENT'})
        }, 3000);

    };

    const handleDecrement = () => {
        store.dispatch({type: 'DECREMENT'})
    };

    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
        />,
        document.getElementById('root2')
    );
};
render();
store.subscribe(render);
