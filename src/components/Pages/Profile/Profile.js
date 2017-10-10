import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser} from './../../../dux/data.js';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  render() {
    return (
      <main className="profile">
        <aside className="left"></aside>
        <aside className="right"></aside>

        <section className="center">
          <div className="content">
            <h2 className="title"> {!this.props.user?"Guest":this.props.user.name} </h2>
            <div> {!this.props.user?null:this.props.user.image} </div>
          </div>
        </section>
        
      </main>
    )
  }
}

export default connect((state) => {
  console.log('Profile:', state.user);
  return {
    user: state.user
  }
}, {getUser})(Profile);