import React, { useState, useEffect, useCallback } from "react";

class asyncPooling {
    /**
     *
     * @param {*} interval 轮询的间隔时间
     * @param {*} func 轮询的请求函数
     * @param {*} callback 请求响应数据的处理函数
     * /** callback的参数
     *  @param params, 原请求参数
     *  @param res,请求的响应数据
     *  @param isRefresh, 有新的轮询在运行，响应数据可能已过时
     *  */
    constructor(interval,func,callback){
        this.interval = interval;
        this.func = func;
        this.callback = callback;
        this.params = {};
    }
    run(params){
        this.isFinished = false;
        this.params = {...params}; //每次run时params设同一个引用，当再次run时可用来判断isRefresh。即可区分不同run，很方便
        this.runTurn(this.params);
    }
    stop(){
        this.isFinished = true;
    }
    destroy() {
        clearTimeout(this.timeout);
    }
    async runTurn(params){
        clearTimeout(this.timeout);
        const res = await this.func(params);
        let isRefresh = params!==this.params;
        this.callback(params,res,isRefresh);
        if(!isRefresh && !this.isFinished){
            this.timeout = setTimeout(()=>this.runTurn(params),this.interval);
        }
    }
    setCallBack(callback){
        // 由于函数组件的闭包陷阱，需要重新设置callback以保证在调用该方法时能拿到最新的state
        this.callback = callback;
    }
}
export function Timer(props) {
    const [name, setName] = useState("参数1");
    const [start, setStart] = useState(new Date());
    const [data, setData] = useState();
    const [polling, setPolling] = useState();

    const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

    const updateDate = useCallback((params, res,isRefresh) => {
        // let isRefresh = params.name != name || params.start != start;
        let isFinished = res?.isFinished;
        if(isFinished){
            polling.stop();
        }
        if (!isRefresh) {
            var now = new Date();
            var det = now - params.start;
            now.setTime(det);
            now.setHours(0);
            setData(now.toLocaleTimeString());
        }
    },[polling]);
    // 由于函数组件的闭包陷阱，需要重新设置callback以保证在调用该方法时能拿到最新的state
    polling && polling.setCallBack(updateDate);
    useEffect(() => {
        let p = new asyncPooling(1000,(params) => sleep(2000),updateDate);
        setPolling(p);
        p.run({ start, name });
        return () => (polling || p).destroy();
    }, [])
    // 重启
    const restart = () => {
        let s = new Date();
        setStart(s);
        polling.run({ start: s, name });
    }
    //参数变更
    const change = () => {
        let n = "参数" + parseInt(Math.random() * 100);
        let s = new Date();
        setName(n);
        setStart(s);
        polling.run({ start: s, name: n });
    }
    return <div><div>Demo</div>
        <div>{name}:{data}</div>
        <button onClick={restart}>重启</button>
        <button onClick={change}>参数变更</button>
    </div>
}
