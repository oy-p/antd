import React, { Component } from 'react';
import store from '../../store/index'
import { Button } from 'antd';
import "antd/dist/antd.css";


class Login extends Component {
    render() {
        console.log(this.props);
        
        return (
            <div>
               {store.getState()}
               <div>
               <Button type="primary">Primary</Button>
               </div>
            </div>
        );
    }
}

export default Login;