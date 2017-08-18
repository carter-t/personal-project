import React, {Component} from 'react';
import {getData} from './../../dux/reducer.js';
import {connect} from 'react-redux';
import './_Header.scss';

class Header extends Component {

  componentDidMount(getData) {
    this.props.getData().then(data => {
      console.log(data);
    })
  }

  render() {
    return (
      <div>

        <div className="header">
          <a href="/" className="title"> Scribl <h1 className="sign"> 3 </h1> </a>

          <div className="nav">
            <div className="navtab"><li className="mag"> &#9906; </li></div>
            <div className="navtab"><li> &#9776; </li></div>

            <a href="http://localhost:3001/auth" className="navbar sign up"> SIGN UP </a>
            <a href="http://localhost:3001/auth" className="navbar"> LOGIN </a>
            <a href="/" className="navbar"> LOGOUT </a>
          </div>
        </div>
        <div className="lowline"></div>

      </div>
    )
  }
}



export default connect((state) => {
  console.log('STATE USER->', state.getData)
  return {
    user: state.getData,
    userName: ''
  }
}, {getData})(Header);