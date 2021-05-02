
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
// import './modules/es6/promise/MyPromise';
// import './modules/es6/prototype/prototype';
// import './modules/es6/extraFuns/curring';
// import './modules/es6/extraFuns/array';
// import './modules/es6/extraFuns/debounceAndThrottle';


//compute
// import './modules/compute/binarySearch';
// import './modules/compute/sort';
// import './modules/compute/copy';
// import './modules/compute/middleWare';
// import './modules/compute/back';
// import './modules/compute/dp';

//webpack
// import './modules/webpack/testWebpack';


//letcode
// import "./modules/letcode/Queue";
// import "./modules/letcode/Recursion";
// import "./modules/letcode/BinarySearch";
// import './modules/letcode/Hash';
// import './modules/letcode/TwoPoints';
// import './modules/letcode/SlideWindow';
// import './modules/letcode/greedCompute';
// import './modules/letcode/Array';
// import './modules/letcode/Regex.js';
// import './modules/letcode/Stack.js';
// import './modules/letcode/LinkedList';
// import './modules/letcode/Back';
// import './modules/letcode/Bfs';
// import './modules/letcode/Dp';

//  JS高级程序设计(第四版)
// import './modules/jsHigherDesign/8-Object';
// import './modules/jsHigherDesign/10-Function';


//structureAndCompute 数据结构与算法
// import './modules/structureAndCompute/tenthChapter';
// import './modules/structureAndCompute/sixthChapter';
// import './modules/structureAndCompute/fourthChapter';
// import './modules/structureAndCompute/fifthChapter';
// import './modules/structureAndCompute/thirteenthChapter';
// import './modules/structureAndCompute/twelfthChapter';

//学习数据结构与算法  第三版
// import './modules/structureAndComputeThird/fifthChapter';   //队列
// import './modules/structureAndComputeThird/sixthChapter';   //链表
// import './modules/structureAndComputeThird/ninthChapter';   //递归

// javascript设计模式
// import './modules/jsDesign/prototype'
// import './modules/jsDesign/factory';
// import './modules/jsDesign/single';
// import Strategies from "./modules/jsDesign/strategies";
// import "./modules/jsDesign/proxy";
// import './modules/jsDesign/defineEvent'
// import Command from './modules/jsDesign/command';
// import './modules/jsDesign/combination';
// import './modules/jsDesign/template';

//fourth compute 算法4
// import './modules/fourthCompute/firstChapter';

//interview
// import './modules/interview/jsonUtils'
// import './modules/interview';
// import Bfc from "./modules/css/bfc/Bfc";
// import Flex from './modules/css/flex/Flex';
import CssCombine from './modules/css/cssCombine/CssCombine';

//hooks
// import UseState from './modules/hooks/UseState';
// import TestClassAndFun from './modules/hooks/TestClassAndFun';
// import './modules/hooks/HooksSourceCode';
// import './modules/hooks/MiniHooks';

//react define
// import reactIndex from './modules/react/reactIndex';
// import ReactPortals from './modules/react/ReactPortals';
// import SuspenseTest from './modules/react/SuspenseTest';
// import ReactState from './modules/react/ReactState';
// import ReactPublicState from './modules/react/ReactPublicState';
// import ReactUseMemo from './modules/react/ReactUseMemo';
// import ReactSequence from './modules/react/ReactSequence';
// import ReactUpdateState from './modules/react/ReactUpdateState';


//redux
// import './modules/redux/demoRedux';
// import './modules/redux/demoRedux2'
// import TestRedux from "./modules/redux/TestRedux";

class App  extends Component{
    render() {

        return (
            <div>
                {/*<Command />*/}
                {/*<TestRedux />*/}
                {/*<UseState />*/}
                {/*<Bfc />*/}
                {/*<Flex />*/}
                {/*<Strategies />*/}
                <CssCombine />

                {/*<TestClassAndFun />*/}
                {/*<SuspenseTest />*/}
                {/*<ReactPortals />*/}
                {/*<ReactState />*/}
                {/*<ReactPublicState />*/}
                {/*<ReactUseMemo />*/}
                {/*<ReactSequence />*/}
                {/*<ReactUpdateState />*/}
            </div>
        )
    }
}

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
