import React, {Component} from 'react';
// import {Link} from 'react-router-dom';

import Slider from './../Slider/Slider.js';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider: false
    }
    this.updateSlider = this.updateSlider.bind(this);
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
            <h1> Archetype </h1>
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