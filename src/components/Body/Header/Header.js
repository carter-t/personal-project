import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser} from './../../../dux/data.js';
import Slider from './../Slider/Slider.js';

class Header extends Component {
  constructor(props) {
    super(props);

    this.updateSlider = this.updateSlider.bind(this);

    this.state = {
      slider: "slider"
    }
  }

  
  // componentDidMount() {
  //   this.props.getUser().then(user => {
  //     console.log('UserREQ:', user);
  //   });
  // }

  updateSlider() {
    this.state.slider==="slider LTR"?this.setState({slider:"slider RTL"}):this.setState({slider:"slider LTR"});
  }

  render() {
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
        <Slider updateSlider={this.updateSlider} className={this.state.slider}/>
      </header>
    )
  }
}

export default connect((state) => {
  return {
    user: state.user
  }
}, {getUser})(Header);