/**
 *  React状态更新
 */

import React, {useState, useEffect, useRef} from 'react';



function ReactUpdateState() {
    const buttonRef = useRef(null);
    const [count, updateCount] = useState(0);

    const onClick = () => {
        updateCount((count) => count + 2);
    };

    useEffect(() => {
        const button = buttonRef.current;
        setTimeout(() => {
            updateCount(1);
        }, 1000);
        setTimeout(() => {
            button.click();
        }, 1040);
    }, []);

    return (
        <div>
           <button ref={buttonRef} onClick={onClick}>增加2</button>
            <div>
                {Array.from(new Array(4500)).map((elem,index)=>{
                    return(
                        <span key={index}>{count}</span>
                    )
                })}
            </div>
        </div>
    );
}


export default ReactUpdateState;


