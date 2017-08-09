import React, {Component} from 'react';
import {HashRouter, Route} from 'react-router-dom';

import Landing from './components/Landing/Landing';
import Showcase from './components/Showcase/Showcase.js';
import About from './components/About/About.js';
import Archive from './components/Archive/Archive.js';
import Contact from './components/Contact/Contact.js';

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>

          <Route component={Landing} exact path="/"/>
          <Route component={Showcase} path="/showcase"/>
          <Route component={About} path="/about"/>
          <Route component={Archive} path="/archive"/>
          <Route component={Contact} path="/contact"/>

        </div>
      </HashRouter>
    );
  }
}