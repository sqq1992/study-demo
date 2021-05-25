import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect,Link } from '../source-react-router-dom'

const Detail = () => {

    return(
        <div>我是Detail</div>
    )
};

const List = () => {

    return(
        <div>我是List</div>
    )
};

const Index = () => {

    return(
        <div>我是Index</div>
    )
};

const menusList = [
    {
        name: '首页',
        path: '/index'
    },
    {
        name: '列表',
        path: '/list'
    },
    {
        name: '详情',
        path: '/detail'
    },
]
const TestReactRouter = () => {
    return <div >
        <div >

            <Router  >
                <div>{
                    /* link 路由跳转 */
                    menusList.map(router=><Link key={router.path} to={ router.path } >
                        <span className="routerLink" >{router.name}</span>
                    </Link>)
                }</div>
                <Switch>
                    <Route path={'/index'} component={Index} ></Route>
                    <Route path={'/list'} component={List} ></Route>
                    <Route path={'/detail'} component={Detail} ></Route>
                    {/*  路由不匹配，重定向到/index  */}
                    <Redirect from='/*' to='/index' />
                </Switch>
            </Router>
        </div>
    </div>
}

export default TestReactRouter