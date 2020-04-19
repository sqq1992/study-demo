
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//
// import "./modules/virtualDom/index";
// import './modules/virtualDom2/testVirtual2';

//es6
// import './modules/es6/commonJsAndModules/comBineIndex';
// import './modules/es6/promise/promise';


//compute
// import './modules/compute/sort';
// import './modules/compute/copy';

//letcode
import "./modules/letcode/Recursion";
// import "./modules/letcode/BinarySearch";
// import './modules/letcode/TwoPoints';
// import './modules/letcode/SlideWindow';
// import './modules/letcode/greedCompute';
// import './modules/letcode/Array';
// import './modules/letcode/Regex.js';
// import './modules/letcode/Stack.js';
// import './modules/letcode/LinkedList';


//structureAndCompute 数据结构与算法
// import './modules/structureAndCompute/tenthChapter';
// import './modules/structureAndCompute/sixthChapter';
// import './modules/structureAndCompute/fourthChapter';


//fourth compute 算法4
// import './modules/fourthCompute/firstChapter';

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
