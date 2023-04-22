
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './modules/redux/store';

//
// import "./modules/virtualDom/index";
// import './modules/virtualDom2/testVirtual2';

//es6
// import './modules/es6/commonJsAndModules/comBineIndex';
// import './modules/es6/commonJsAndModules/es6A';
// import './modules/es6/commonJsAndModules/mainEs6';
// import './modules/es6/promise/promise';
// import './modules/es6/promise/MyPromise';
// import './modules/es6/prototype/prototype';
// import './modules/es6/extraFuns/curring';
// import './modules/es6/extraFuns/partial';
// import './modules/es6/extraFuns/unique';
// import './modules/es6/extraFuns/equal';
// import './modules/es6/extraFuns/typeOf';
// import './modules/es6/extraFuns/compose';
// import './modules/es6/extraFuns/array';
// import './modules/es6/extraFuns/debounceAndThrottle';
// import './modules/es6/extraFuns/treeAndArr';
// import './modules/es6/extraFuns/copy';
// import './modules/es6/extraFuns/eachAndFind';
// import './modules/es6/extraFuns/eventEmitter';
// import './modules/es6/extraFuns/jsCommons';
// import './modules/es6/extraFuns/generator';
// import './modules/es6/extraFuns/proxy';
// import './modules/es6/extraFuns/promise';


//compute
// import './modules/compute/binarySearch';
// import './modules/compute/sort';
// import './modules/compute/copy';
// import './modules/compute/middleWare';
// import './modules/compute/back';
// import './modules/compute/dp';
// import './modules/compute/heap';
// import './modules/compute/LRU';

//webpack
// import './modules/webpack/testWebpack';

//微前端
// import './modules/qiankun/qiankun'

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
// import './modules/letcode/LRU';
// import './modules/letcode/LFU';
// import './modules/letcode/Area';
// import './modules/letcode/ExtraFunc';
// import './modules/letcode/FenZhi';

//  JS高级程序设计(第四版)
// import './modules/jsHigherDesign/3-DataType';
// import './modules/jsHigherDesign/8-Object';
// import './modules/jsHigherDesign/6-map';
// import './modules/jsHigherDesign/10-Function';
// import './modules/jsHigherDesign/7-iterator';


//structureAndCompute 数据结构与算法
// import './modules/structureAndCompute/tenthChapter';     //二叉树
// import './modules/structureAndCompute/sixthChapter';
// import './modules/structureAndCompute/fourthChapter';
// import './modules/structureAndCompute/fifthChapter';
// import './modules/structureAndCompute/thirteenthChapter';
// import './modules/structureAndCompute/twelfthChapter';  //排序

//学习数据结构与算法  第三版
// import './modules/structureAndComputeThird/fifthChapter';   //队列
// import './modules/structureAndComputeThird/sixthChapter';   //链表
// import './modules/structureAndComputeThird/ninthChapter';   //递归
// import './modules/structureAndComputeThird/eleventhChapter';   //二叉堆

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
// import './modules/jsDesign/dutyChain';

// 你所不知道的javascript
// import './modules/not-know-javascript/first-chapter'
// import './modules/not-know-javascript/third-chapter'
import './modules/not-know-javascript/fifth-chapter'

//fourth compute 算法4
// import './modules/fourthCompute/firstChapter';

//JavaScript正则表达式迷你书
// import './modules/regExp/firstChapter'  //正则表达式字符匹配攻略

//interview
// import './modules/interview/promise'
// import './modules/interview/jsonUtils'
// import './modules/interview/lodashUtils'
// import './modules/interview';
// import Bfc from "./modules/css/bfc/Bfc";
// import Flex from './modules/css/flex/Flex';
// import FlexOveflow from './modules/css/flexOverflow/FlexOveflow';
// import CssCombine from './modules/css/cssCombine/CssCombine';

//hooks
// import UseState from './modules/hooks/UseState';
// import TestClassAndFun from './modules/hooks/TestClassAndFun';
// import './modules/hooks/HooksSourceCode';
// import './modules/hooks/MiniHooks';

//react define
// import reactIndex from './modules/react/reactIndex';
// import ReactPortals from './modules/react/ReactPortals';
// import SuspenseTest from './modules/react/SuspenseTest';
// import AsyncComponent from './modules/react/AsyncComponent';
// import ReactState from './modules/react/ReactState';
// import ReactProps from './modules/react/ReactProps';
// import ReactPropsForm from './modules/react/ReactPropsForm';
// import ReactPublicState from './modules/react/ReactPublicState';
// import ReactUseMemo from './modules/react/ReactUseMemo';
// import ReactSequence from './modules/react/ReactSequence';
// import ReactUpdateState from './modules/react/ReactUpdateState';
// import TestRouter from './modules/react/TestRouter';
// import TestHistoryRouter from './modules/react/TestHistoryRouter';
// import SameState from './modules/react/SameState';
// import TestReactRedux from './modules/react/TestReactRedux';
// import TestReactRouter from './modules/react/TestReactRouter';
// import './modules/react/timeSlice'
// import './modules/react/ReactTimeSlice'


//redux
// import './modules/redux/demoRedux';
// import './modules/redux/demoRedux2'
// import TestRedux from "./modules/redux/TestRedux";
// import './modules/interview'

class App  extends Component{
    render() {

        return (
            <div>
                {/*<FlexOveflow />*/}
                {/*<Command />*/}
                {/*<TestRedux />*/}
                {/*<UseState />*/}
                {/*<Bfc />*/}
                {/*<Flex />*/}
                {/*<Strategies />*/}
                {/*<CssCombine />*/}

                {/*<ReactPropsForm />*/}
                {/*<ReactProps />*/}
                {/*<TestReactRouter />*/}
                {/*<TestReactRedux />*/}
                {/*<SameState />*/}
                {/*<TestHistoryRouter />*/}
                {/*<TestRouter />*/}
                {/*<TestClassAndFun />*/}
                {/*<SuspenseTest />*/}
                {/*<AsyncComponent />*/}
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


const App2 = () => {

    return(
        <div id="app2">

        </div>
    )
};

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

// ReactDOM.render(<Provider store={store}>
//     <App2 />
// </Provider>, document.getElementById('root'));
