import React, { Component } from 'react';
import { connect } from 'react-redux'
import {a} from '../test/index.jsx'

function mapStateToProps (state) {
    return {
        msg: state
    }
}

function mapDisptchToProps (dispatch) {
    return {
      setMsg () {
          dispatch({
              type: 'change',
              msg: 'home修改的数据'
          }) 
      }
    }
}

class Home extends Component {
    render() {
         console.log(this.props);
        return (
            <div onClick={this.props.setMsg}>
                home{this.props.msg}{a}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDisptchToProps)(Home);