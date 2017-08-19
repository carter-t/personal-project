import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserProfile from './UserProfile.js'

class Profile extends Component { 
  render(state) {

    const renderUser = (state) => {
      if(this.props.userID) {
        return <UserProfile/>
      }
      else {return (
        <div>
          <div className="wrapper">
          <div className="category"> PROFILE </div>

          <div className="profile">
            <img src="http://thenewoffice.com/wp-content/uploads/2013/10/Default-Profile.jpg" alt="Profile Pic" className="photo"></img>
            <div className="info">
              <h1 className="guest-info"> Author: Guest </h1>
            </div>
          </div>

          </div>
          <div className="taper"></div>
        </div>
      )}
    }

    return (
      <div>
        {renderUser()}
      </div>
    )
  }
}

export default connect((state) => {
  return {
    userID: state.userData.userid
  }
}, {})(Profile);