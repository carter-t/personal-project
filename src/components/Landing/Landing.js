import React, {Component} from 'react';

import Header from './../Header/Header.js';
import Showcase from './../Showcase/Showcase.js';
// import About from './../About/About.js';
// import Archive from './../Archive/Archive.js';
// import Contact from './../Contact/Contact.js';
// import Footer from './../Footer/Footer.js';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: ''
    }
  }

  render() {
    return (
      <div>

        <Header/>
        <Showcase/> 

      </div>
    )
  }
}