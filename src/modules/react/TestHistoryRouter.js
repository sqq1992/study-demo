/**
 *  history Router
 */

import React, {useEffect} from 'react';

class HistoryRouter {
    constructor() {
        this.routers = {};
        this.listenPopState();
        this.listenLink();
    }

    listenPopState(){
        window.addEventListener('popstate',(e)=>{
            let state = e.state || {},
                path = state.path || '';
            this.dealPathHandler(path)

        },false)
    }

    listenLink(){
        window.addEventListener('click',(e)=>{
            let dom = e.target;
            if(dom.tagName.toUpperCase() === 'A' && dom.getAttribute('href')){
                e.preventDefault()
                this.assign(dom.getAttribute('href'));
            }
        },false)
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

    //跳转到path
    assign(path){
        history.pushState({path},null,path);
        this.dealPathHandler(path)
    }
    //替换为path
    replace(path){
        history.replaceState({path},null,path);
        this.dealPathHandler(path)
    }

    dealPathHandler(path){
        let handler;
        //没有对应path
        if(!this.routers.hasOwnProperty(path)){
            handler = this.routers['404'] || function(){};
        }
        //有对应path
        else{
            handler = this.routers[path];
        }
        try{
            handler.call(this)
        }catch(e){
            console.error(e);
            (this.routers['error'] || function(){}).call(this,e);
        }
    }

    load(){
        let path = location.pathname;
        this.dealPathHandler(path)
    }

}


function TestHistoryRouter() {


    useEffect(() => {
        let router = new HistoryRouter();
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
                <a href="/page1">page1</a>
                <a href="/page2">page2</a>
                <a href="/page3">page3</a>
                <a href="/page4">page4</a>
                <a href="/page5">page5</a>
            </div>
            <div id="container"></div>
        </div>
    );
}


export default TestHistoryRouter;


