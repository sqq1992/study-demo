/**
 * @fileOverview
 * @author crow
 * @time 2018/1/30
 */

import React, { Component } from 'react';
import './bfc.less';

export default class Bfc extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        return (
            <div>
                <div>
                    <div className="box1"></div>
                    <div>
                        <div className="box2"></div>
                    </div>
                </div>
                <div>
                    <div className="sider">我是侧边栏</div>
                    <div className="main">我是主体内容</div>
                </div>
            </div>

        );
    }
}
