/**
 *  React状态更新
 */

import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'


function TestReactRedux({
                            globalReducer,
                            setGlobal
                        }) {

    console.log('globalReducer', globalReducer);

    const onClick = () => {
        setGlobal({
            a:4,
            b:5,
            c:6,
        });
    };

    useEffect(() => {
    }, []);

    return (
        <div>
           <h1>测试react-redux</h1>
           <button onClick={onClick}>增加2</button>

        </div>
    );
}

function setAAdata(data) {
    return{
        type:'aa',
        payload: data
    }
}

const mapStateToData = state => ({
    globalReducer: state.globalReducer,
})

const mapDispatch = dispatch => ({
    setGlobal: data => dispatch(setAAdata(data)),
})

export default connect(mapStateToData,mapDispatch)(TestReactRedux);


