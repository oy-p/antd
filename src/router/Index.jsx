import React, { Component } from 'react';
import Home from '../components/home/Home'
import {HashRouter as Router, Route, NavLink, Redirect, Switch} from 'react-router-dom'
import { Provider } from 'react-redux'
import Login from '../components/login/Login'
import store from '../store/index'


class Index extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <NavLink to='/home'>首页</NavLink>
                        <NavLink to='/product'>产品</NavLink>
                        <Switch>
                        <Provider store={store}>
                            <Route path='/home' component={Home}></Route>
                            <Route path='/product' component={Login}></Route>
                        </Provider>

                        <Redirect path='/' to='/home'></Redirect>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default Index;
