import React, {Component} from 'react';
import {connect} from 'react-redux';
import './_Landing.scss';

import Header from './../Header/Header.js';
import Video from './../Video/Video.js';
import Search from './../Search/Search.js';
import Button from './../Button/Button.js';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }

  render() {
    return (
      <div className="overflow">

        <Header/>
        <div className="showcase">
          <div className="side">
            <Button value="PREV"/>
            <div className="break"></div>

            <Button value="DELETE"/>
          </div>

            <div className="content">
              <div className="trim">
                <Search/>
              </div>
              <div className="trim-fill"></div>

              <Video/>
              <div className="break"></div>

              <div className="mobile">
                <div className="column">
                  <Button value="PREV"/>
                  <Button value="NEXT"/>
                </div>

                <div className="column">
                  <Button value="DELETE"/>
                  <Button value="SAVE"/>
                </div>
              </div>

            </div>

          <div className="side">
            <Button value="NEXT"/>
            <div className="break"></div>
            
            <Button value="SAVE"/>
          </div>
        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    // value: state.value (state to cherry-pick)
  }
}

export default connect(mapStateToProps, {
  // updateFunction (reducer function to map, import at top as well)
})(Landing);