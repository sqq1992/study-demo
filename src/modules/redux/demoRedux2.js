import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import connect from './manualRedux/connect'
import Provider from './manualRedux/provider'


import {store} from './manualRedux'


class Counter extends Component {


    handleAdd () {
        this.props.add(20);
    };

    render() {
        console.log('counter', this.props.countObj);
        return (
            <div onClick={this.handleAdd.bind(this)}>
                name:{this.props.countObj.num}
                432323
            </div>
        )
    }
}

const ConnectCounter = connect((state)=>{
    return{
        countObj: state.countReducer
    }
},(dispatch)=>{
    return{
        add:(num)=>{
            dispatch({
                type:'changeNum',
                num: num
            })
        }
    }
})(Counter);





const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <ConnectCounter />
        </Provider>,
        document.getElementById('root2')
    );
};
render();

