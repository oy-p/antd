import React, { Component } from 'react';
import store from '../../store/index'
import { Button, Spin } from 'antd';


class Login extends Component {
    render() {
        console.log(this.props);
        
        return (
            <div>
               {store.getState()}
               <div>
               <Button type="primary" loading>Primary</Button>
               <Spin>11</Spin>
               </div>
            </div>
        );
    }
}

export default Login;