import React, {useContext} from 'react';
import {UseStateContext} from "./UseState";

function InnerUseState() {

    const context = useContext(UseStateContext)

    return (
        <div>
            <h1>我是子组件</h1>
            <div>
                <h4>count:{context.count}</h4>
                <h4>data:{context.data}</h4>
            </div>
        </div>
    );
}


export default InnerUseState;
