import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';

import Header from './components/Body/Header/Header.js';
// import Footer from './components/Body/Footer/Footer.js';

import Landing from './components/Pages/Landing/Landing.js';
import Cube from './components/Pages/Cube/Cube.js';
import CubeForm from './components/Pages/CubeForm/CubeForm.js';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Header/>

          <Route component={Landing} exact path="/"/>
          <Route component={CubeForm} exact path="/new"/>
          <Route component={Cube} exact path="/cubes"/>
          
          {/* <Footer/> */}
        </div>
      </HashRouter>
    );
  }
}

export default App;