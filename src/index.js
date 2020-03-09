
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//
// import "./modules/virtualDom/index";

//es6
// import './modules/es6/commonJsAndModules/comBineIndex';

//letcode
// import "./modules/letcode/BinarySearch";
import './modules/letcode/TwoPoints';





class App  extends Component{
    render() {
        let aa = "sun1992";

        return (
            <div>
                h1{aa}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));