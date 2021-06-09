import React, {Suspense, useState, useEffect} from 'react';


function Children(){
    return <div> hello ,let us learn React </div>
}
/* 非React组件，将无法正常渲染 */
function Children1(){
    return
}

function ErroMessage(){
    return <div>展示错误</div>
}



export default class AsyncComponent extends React.Component{
    state={ errorRender:false }
    componentDidCatch(error,info){
        /* 补救措施 */
        console.log('e', error);
        this.setState({
            errorRender:true
        })
    }
    render(){
        return <div>
            <Children />
            { this.state.errorRender ? <ErroMessage/> : <Children1/>  }
        </div>
    }
}




