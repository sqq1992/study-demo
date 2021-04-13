
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


// 使用Portals 渲染到body上
export default class CreatePortals  extends Component{
    render() {

        return ReactDOM.createPortal(
            <div id="createPortals">
                我是CreatePortals, 被渲染到body外层
            </div>,
            document.body
        )
    }
}


