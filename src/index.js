
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//
// import "./modules/virtualDom/index";
// import './modules/virtualDom2/testVirtual2';

//es6
// import './modules/es6/commonJsAndModules/comBineIndex';


//compute
// import './modules/compute/sort';

//letcode
// import "./modules/letcode/BinarySearch";
import './modules/letcode/TwoPoints';
// import './modules/letcode/SlideWindow';

//interview
// import './modules/interview';




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