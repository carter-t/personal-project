import React, {Component} from 'react';
import {getUser, getNovels} from './../../dux/reducer.js';
import {connect} from 'react-redux';

class Header extends Component {

  componentDidMount() {
    this.props.getUser();
    // this.props.getNovels().then(novels => {
    //   console.log('NOVELS:', novels)
    // });
  }

  render() {
    return (
      <div>

        <div className="header">
          <a href="/" className="title"> Scribl <h1 className="sign"> 3 </h1> </a>

          <div className="nav">
            <div className="navtab"><li className="mag"> &#9906; </li></div>
            <div className="navtab"><li> &#9776; </li></div>

            <a href="http://localhost:3001/auth" className="navbar sign up"> LOGIN </a>
            <a href="/" className="navbar"> LOGOUT </a>
          </div>
        </div>
        <div className="lowline"></div>

      </div>
    )
  }
}

export default connect((state) => {
  return {
    userData: state.userData,
    novelData: state.novelData
  }
}, {getUser, getNovels})(Header);