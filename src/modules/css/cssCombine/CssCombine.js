import React from 'react';
import './cssCombine.less'


function CssCombine() {

    return (
        <div>

            {/*{'CSS 怎么画一个大小为父元素宽度一半的正方形？'}*/}
           <div className="box1">
               <div className="box2" />
           </div>

        </div>
    );
}


export default CssCombine;
