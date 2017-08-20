import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserProfile extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
        <div className="category"> PROFILE </div>
  
        <div className="profile">
          <img src={this.props.userImage} alt="Profile Pic" className="photo"></img>
          <div className="info">
            <h1 className="info-line"> Author: {this.props.userName} </h1>
            <h1 className="info-line"> {this.props.userEmail} </h1>
          </div>
        </div>
  
        </div>
        <div className="taper"></div>
      </div>
    )
  }
}

export default connect((state) => {
  return {
    userImage: state.userData.userimage,
    userName: state.userData.username,
    userEmail: state.userData.useremail
  }
}, {})(UserProfile);