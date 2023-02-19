
import React, { Component } from 'react';
import './flexOverflow.less';

export default class Flex extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="zc-layout">
                <div className="left-cont" />
                <div className="right-cont">
                    <div className="layout-container">
                        <div className="layout-left">layout-left</div>
                        <div className="layout-middle">layout-middle</div>
                        <div className="layout-right">layout-right</div>
                    </div>
                </div>
            </div>
        );
    }
}
