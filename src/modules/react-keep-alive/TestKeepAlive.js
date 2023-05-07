import React, { useState, useEffect } from 'react'

import KeepAlive, { AliveScope } from './keepAliveComponent/KeepAlive'

function Atom({ propsNumber }) {
    useEffect(() => {
        console.log("register-Atom");
        return () => {
            console.log("unRegister-Atom");
        };
    }, []);

    const [number, setNumber] = React.useState(0);
    return (
        <div>
            propsNumber:{propsNumber} | current:{number}
            <button onClick={() => setNumber(number + 1)}>add++</button>
            <button onClick={() => setNumber(number - 1)}>del--</button>
        </div>
    );
}
export default function App() {
    const [number, setNumber] = React.useState(0);
    const [show, setShow] = useState(true)
    return (
        <AliveScope>
            <div>
                <h1>数字：{number}</h1>
                <p>无 KeepAlive</p>
                {show && <Atom propsNumber={number} />}
                <p>有 KeepAlive</p>
                {show && (
                    <KeepAlive id="Test">
                        <Atom propsNumber={number} />
                    </KeepAlive>
                )}

                <button onClick={() => setShow((show) => !show)}>Toggle</button>
                <button onClick={() => setNumber(number + 1)}>add</button>
            </div>
        </AliveScope>
    )
}
