import React from 'react';
import './cssCombine.less'


function CssCombine() {

    return (
        <div>

            {/*{'CSS 怎么画一个大小为父元素宽度一半的正方形？'}*/}
           {/*<div className="box1">*/}
           {/*    <div className="box2" />*/}
           {/*</div>*/}


            {/*CSS实现自适应正方形、等宽高比矩形*/}
            {/*<div className="outer">*/}
            {/*    <div className="inner">hello</div>*/}
            {/*</div>*/}

            {/*padding 撑高画正方形*/}
            <div className="outer2">
                <div className="inner2"></div>
            </div>

        </div>
    );
}


export default CssCombine;
