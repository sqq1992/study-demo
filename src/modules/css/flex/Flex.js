/**
 * @fileOverview
 * @author crow
 * @time 2018/1/30
 */

import React, { Component } from 'react';
import './flex.less';

export default class Flex extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <div class="container">
                    <div class="item a">
                        <p>A</p>
                        <p> width:100</p>
                    </div>
                    <div class="item b">
                        <p>B</p>
                        <p> width:150</p>
                    </div>
                    <div class="item c">
                        <p>C</p>
                        <p> width:100</p>
                    </div>
                </div>
                <div class="container2">
                    <div class="item a">
                        <p>A</p>
                        <p> width:300</p>
                        <p>flex-shrink: 1</p>
                    </div>
                    <div class="item b">
                        <p>B</p>
                        <p> width:150</p>
                        <p>flex-shrink: 2</p>
                    </div>
                    <div class="item c">
                        <p>C</p>
                        <p> width:200</p>
                        <p>flex-shrink: 3</p>
                    </div>
                </div>
                <div className="container3">
                    <div className="item a">A</div>
                    <div className="item b">B</div>
                    <div className="item c">C</div>
                </div>
            </div>
        );
    }
}
