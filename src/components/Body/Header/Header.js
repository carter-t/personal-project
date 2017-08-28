import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser} from './../../../dux/data.js';

import Slider from './../Slider/Slider.js';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider: false
    }
    this.updateSlider = this.updateSlider.bind(this);
  }

  
  componentDidMount() {
    this.props.getUser().then(user => {
      console.log('USER:', user);
    });
  }

  updateSlider() {
    !this.state.slider?this.setState({slider:true}):this.setState({slider:false});
  }

  render() {

    const renderSlider = () => {
      if(this.state.slider){return <Slider/>}
    }

    return (
      <header className="header">
        <main className="overlay">

          <nav className="nav">
            <div className="menu" onClick={ () => this.updateSlider()}> &#9776; </div>
          </nav>

          <section className="title">
            <h1> CUB3 </h1>
            <div className="log">
              <a className="line" href="http://localhost:3001/auth"> Login </a>
            </div>
          </section>

        </main>
        <div className="static"></div>
        {renderSlider()}
      </header>
    )
  }
}

export default connect((state) => {
  console.log('STATE:', state.userData);
  return {
    user: state.user,
    // usertag: state.user.id,
    // username: state.user.name,
    // email: state.user.email,
    // image: state.user.image
  }
}, {getUser})(Header);