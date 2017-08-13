import React, {Component} from 'react';
import {HashRouter, Route} from 'react-router-dom';

import Landing from './components/Landing/Landing';

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>

          <Route component={Landing} exact path="/"/>

        </div>
      </HashRouter>
    );
  }
}