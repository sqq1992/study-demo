/**
 *  useState更新相同的State,函数组件执行2次
 */

import React, {useState} from 'react';

const SameState = () => {
    const [ number , setNumber  ] = useState(0)
    console.log('组件渲染',number)
    return <div className="page" >
        <div className="content" >
            <span>{ number }</span><br/>
            <button onClick={ () => setNumber(1) } >将number设置成1</button><br/>
            <button onClick={ () => setNumber(2) } >将number设置成2</button><br/>
            <button onClick={ () => setNumber(3) } >将number设置成3</button>
        </div>
    </div>
}


export default SameState;


