import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';

import Header from './components/Body/Header/Header.js';
import Landing from './components/Pages/Landing/Landing.js';
import CubeForm from './components/Pages/CubeForm/CubeForm.js';
import Cube from './components/Pages/Cube/Cube.js';
import Profile from './components/Pages/Profile/Profile.js';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Header/>

          <Route component={Landing} exact path="/"/>
          <Route component={CubeForm} path="/new"/>
          <Route component={Cube} path="/cubes"/>
          <Route component={Profile} path="/user"/>
          
        </div>
      </HashRouter>
    );
  }
}

export default App;