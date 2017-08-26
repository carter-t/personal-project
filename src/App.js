import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';

import Landing from './components/Body/Landing/Landing';

class App extends Component {
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

export default App;