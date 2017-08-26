import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser} from './../../../dux/data.js';

import Header from './../Header/Header.js';
import Home from './../../Pages/Home/Home.js';
import Break from './../Break/Break.js';
import Footer from './../Footer/Footer.js';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.getUser().then(user => console.log('USER:', user));
  }

  handleClick() {
    console.log('LAUNCH SUCCESS!');
  }

  render() {
    return (
      <main>
        <Header/>

          <Home/>
            <Break/>

        <Footer/>
      </main>
    )
  }
}

// <Button value="Submit" className="btn1" onClick={ () => this.handleClick()}/>

export default connect((state) => {
  return {
    user: state.user,
    // usertag: state.user.usertag,
    // username: state.user.username,
    // email: state.user.email,
    // image: state.user.image
  }
}, {getUser})(Landing);