
/**
 *  React按优先级更新，及时响应用户
 **/

import React, { memo, useState } from "react";

function getDefaultNumbers() {
    const total = 100000;
    return new Array(total)
        .fill(0)
        .map((it) => Math.floor(Math.random() * total))
        .sort((a, b) => a - b);
}

const IntegerList = memo(({ numbers }) => {
    console.log("render IntegerList");
    return (
        <div>
            {numbers.map((it, idx) => (
                <span
                    key={idx}
                    style={{
                        display: "inline-block",
                        textAlign: "center",
                        width: "60px"
                    }}
                >
                    {it}
                </span>
            ))}
        </div>
    );
});

export default function ReactSequence() {
    const [numbers, setNumbers] = useState(getDefaultNumbers());
    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const slowHandle = () => {
        setShowInput(false);
        setNumbers([...numbers, +inputValue].sort((a, b) => a - b));
    };
    const fastHandle = () => {
        setShowInput(false);
        // 异步下次操作，需要放在下次宏任务中
        setTimeout(() => {
            setNumbers([...numbers, +inputValue].sort((a, b) => a - b));
        });
    };

    return (
        <div className="App">
            {showInput ? (
                <div>
                    <input
                        placeholder="输入整数"
                        style={{ marginRight: 20 }}
                        value={inputValue}
                        onChange={(v) => setInputValue(v.target.value)}
                    />
                    <br />
                    <button onClick={slowHandle} style={{ marginTop: 8 }}>
                        点击我添加该整数，页面卡顿，不会立即反馈给用户结果
                    </button>
                    <br />
                    <button onClick={fastHandle} style={{ marginTop: 8 }}>
                        点击我添加该整数，输入框立即消失，立即反馈给用户页面响应
                    </button>
                </div>
            ) : (
                <button onClick={() => setShowInput(true)}>点我添加一个整数</button>
            )}
            <IntegerList numbers={numbers} />
        </div>
    );
}
