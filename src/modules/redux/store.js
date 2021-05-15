
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

//1
const globalReducer = (state={a:1,b:2,c:3},action) => {
    switch (action.type) {
        case "aa":
            return {...state,...action.payload}
        default:
            return state;
    }
};

//2
const userReducer = (state={name:'sun',age:24},action) => {
    switch (action.type) {
        case "user1":
            return {...state, ...action.payload}
        default:
            return state;
    }
};


const rootReducer = combineReducers({
    globalReducer,
    userReducer,
})

const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

export default store;


//3 测试store流程
const middleware1 = ({ dispatch, getState }) => next => action => {
    console.log('middleware1 start');
    next(action);
    console.log('middleware1 end');
}

const middleware2 = ({ dispatch, getState }) => next => action => {
    console.log('middleware2 start');
    next(action);
    console.log('middleware2 end');
}

const middleware3 = ({ dispatch, getState }) => next => action => {
    console.log('middleware3 start');
    next(action);
    console.log('middleware3 end');
}

function reducer(state = {}, action) {
    console.log('reducer return state');
    return state;
}

// const store2 = createStore(reducer, applyMiddleware(middleware1, middleware2, middleware3));
// store2.dispatch({
//     type:'aa'
// });s
