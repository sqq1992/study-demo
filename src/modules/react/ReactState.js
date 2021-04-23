/**
 *  React 状态下放, 缩小状态影响范围
 */

import React, {useState, useEffect} from 'react';


function ExpensiveTree() {
    let now = performance.now()
    while (performance.now() - now < 2000) {
        // Artificial delay -- do nothing for 100ms
    }
    return <p>I am a very slow component tree.</p>
}

function Form() {
    let [color, setColor] = useState("red")
    return(
        <div>
            <input value={color} onChange={e => setColor(e.target.value)} />
            <p style={{ color }}>Hello, world!</p>
        </div>
    )
}

function ColorContainer({ expensiveTreeNode }) {
    let [color, setColor] = useState("red")
    return (
        <div>
            <input value={color} onChange={e => setColor(e.target.value)} />
            <p style={{ color }}>Hello, world!</p>
            {expensiveTreeNode}
        </div>
    )
}

function ReactState() {
    return (
        <div>
            <h1>React状态下放,缩小状态影响范围</h1>
            <div>

                {/* 分割状态优化 */}
                {/*<Form />*/}
                {/*<ExpensiveTree />*/}

                {/* 插槽优化 */}
                <ColorContainer expensiveTreeNode={<ExpensiveTree />} />
            </div>
        </div>
    );
}


export default ReactState;


