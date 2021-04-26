import React, {useState, useEffect, useRef, createContext} from 'react';

//
// export default class TestClassAndFun extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             number:0
//         }
//     }
//     handerClick(){
//         for(let i = 0 ;i<5;i++){
//             setTimeout(()=>{
//                 this.setState({ number:this.state.number+1 })
//                 console.log(this.state.number)
//             },1000)
//         }
//     }
//
//     render(){
//         return <div>
//             <button onClick={this.handerClick.bind(this)} >num++</button>
//         </div>
//     }
// }

export default function TestClassAndFun(){
    const [ num ,setNumber ] = React.useState(0)
    const handerClick=()=>{
        for(let i=0; i<5;i++ ){
            setTimeout(() => {
                setNumber(num+1)
                console.log(num)
            }, 1000)
        }
    }
    return <button onClick={ handerClick } >{ num }</button>
}


