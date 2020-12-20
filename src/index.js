
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './modules/redux/store';

//
// import "./modules/virtualDom/index";
// import './modules/virtualDom2/testVirtual2';

//es6
// import './modules/es6/commonJsAndModules/comBineIndex';
// import './modules/es6/promise/promise';


//compute
// import './modules/compute/sort';
// import './modules/compute/copy';
// import './modules/compute/middleWare';

//letcode
// import "./modules/letcode/Recursion";
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
// import './modules/structureAndCompute/thirteenthChapter';

// javascript设计模式
// import './modules/jsDesign/prototype'
// import './modules/jsDesign/factory';
// import './modules/jsDesign/single';
// import Strategies from "./modules/jsDesign/strategies";
// import "./modules/jsDesign/proxy";
// import './modules/jsDesign/defineEvent'
// import Command from './modules/jsDesign/command';
// import './modules/jsDesign/combination';
import './modules/jsDesign/template';

//fourth compute 算法4
// import './modules/fourthCompute/firstChapter';

//interview
// import './modules/interview';
// import Bfc from "./modules/css/bfc/Bfc";
// import Flex from './modules/css/flex/Flex';

//hooks
// import UseState from './modules/hooks/UseState';

//react define
// import reactIndex from './modules/react/reactIndex';

//redux
// import './modules/redux/demoRedux';
// import TestRedux from "./modules/redux/TestRedux";

class App  extends Component{
    render() {
        let aa = "sun1992";

        return (
            <div>
                {/*<Command />*/}
                {/*<TestRedux />*/}
                {/*<UseState />*/}
                {/*<Bfc />*/}
                {/*<Flex />*/}
                {/*<Strategies />*/}
            </div>
        )
    }
}

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
