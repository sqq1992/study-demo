/**
 *  hash Router
 */

import React, {useEffect} from 'react';

class HashRouter {
    constructor() {
        this.routers = {};
        window.addEventListener('hashchange', this.load.bind(this), false);
    }

    register(hashs,callBack){
        this.routers[hashs] = callBack;
    }

    registerIndex(callBack){
        this.routers['index'] = callBack;
    }

    registerNotFound(callBack){
        this.routers['404'] = callBack;
    }

    registerError(callBack){
        this.routers['error'] = callBack;
    }

    load(){
        let hash = window.location.hash.slice(1);
        let handler;

        if(!hash){
            handler = this.routers.index;
        }else if(!this.routers.hasOwnProperty(hash)){
            handler = this.routers['404'] || function () {};
        }else {
            handler = this.routers[hash];
        }

        try {
            handler.call(this);
        }catch (e) {
            console.log('e', e);
            (this.routers['error'] || function () {}).call(this,e)
        }


    }


}


function TestRouter() {


    useEffect(() => {
        let router = new HashRouter();
        let container = document.getElementById('container');

        router.registerIndex(()=>{
            container.innerHTML = "我是首页";
        })
        router.register('/page1',()=>{
            container.innerHTML = "我是page1";
        })
        router.register('/page2',()=>{
            container.innerHTML = "我是page2";
        })
        router.register('/page3',()=>{
            container.innerHTML = "我是page3";
        })
        router.register('/page4',()=> {throw new Error('抛出一个异常')});
        router.load();

        router.registerNotFound(()=>container.innerHTML = '页面未找到');
//注册出现异常时的回调
        router.registerError((e)=>container.innerHTML = '页面异常，错误消息：<br>' + e.message);

    }, []);

    return (
        <div>
            <div id="nav">
                <a href="#/page1">page1</a>
                <a href="#/page2">page2</a>
                <a href="#/page3">page3</a>
                <a href="#/page4">page4</a>
                <a href="#/page5">page5</a>
            </div>
            <div id="container"></div>
        </div>
    );
}


export default TestRouter;


