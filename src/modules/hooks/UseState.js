import React, {useState, useEffect, useRef} from 'react';
import {userMouseMove, useUrlLoader} from "./combineHooks";

function UseState() {
    //1
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count} times`;
        return function () {
            console.log('count-leave', count);
        };
    },[count]);

    //1-1 闭包获取count, 虽然count做了变动, 但获取还是通过闭包之前的count
    const countRef = useRef(0);
    function handleShowCount() {
        setTimeout(() => {
            alert('show count' + countRef.current);
        }, 3000);
    }

    //1-2 关于页面组件更新
    const didMountRef = useRef(false);
    useEffect(() => {
        if (didMountRef.current) {
            console.log('this is updated');
        } else {
            didMountRef.current = true;
        }
    });


    //2 鼠标移动
    // const position = userMouseMove();

    //3 图片加载
    const [data, loading] = useUrlLoader('https://dog.ceo/api/breeds/image/random', [count]);

    //4 ref获取dom节点
    const inputRef = useRef(null);
    useEffect(() => {
        if (inputRef && inputRef.current) {
            inputRef.current.focus();
        }
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{
                setCount(count + 1);
                countRef.current++;
            }}>
                Click me
            </button>
            <button onClick={handleShowCount}>alert</button>
            <div>
                <input type="text" ref={inputRef} />
            </div>
            {/*<div>*/}
            {/*    x:{position.x}*/}
            {/*    y:{position.y}*/}
            {/*</div>*/}
            <div>

                {loading?(
                    <div>loading狗中</div>
                ):(
                    <div style={{width:"300px"}}>
                        <img src={data.message} style={{width:"100%"}} alt=""/>
                    </div>
                )}

            </div>
        </div>
    );
}


export default UseState;
