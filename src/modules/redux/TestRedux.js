/**
 * @fileOverview
 * @author crow
 * @time 2018/1/30
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from "./store";

@connect(state => ({
    global: state.globalReducer,
    user: state.userReducer,
}))
export default class TestRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleTestStore(){
        store.dispatch({
            type:'aa',
            payload:{
                a:4,
                b:5,
                c: 6,
                name:'xuwei',
                age:32
            }
        })
    }

    render() {
        let {global, user} = this.props;

        console.log('wode', global, user);
        return (
            <div>
                <h1>测试redux</h1>
                <h2>姓名:{user.name}</h2>
                <h2>年龄:{user.age}</h2>
                <ul>
                    <li>a:{global.a}</li>
                    <li>b:{global.b}</li>
                    <li>c:{global.c}</li>
                </ul>
                <button onClick={this.handleTestStore}>测试store</button>
            </div>

        );
    }
};
