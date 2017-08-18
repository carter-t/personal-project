import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from './../Header/Header.js';
import Search from './../Search/Search.js';

import Profile from './../Forms/Profile/Profile.js';
import Novels from './../Forms/Novels/Novels.js';

import Worlds from './../Forms/Worlds/Worlds.js';
import Factions from './../Forms/Factions/Factions.js';
import Places from './../Forms/Places/Places.js';
import People from './../Forms/People/People.js';

import Editor from './../Editor/Editor.js';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    }
    this.updateContent = this.updateContent.bind(this);
  }

  updateContent(event) {
    this.setState({content: event});
  }

  render() {

    const renderWorlds = () => {
      switch(this.state.content) {
        case 'NOVELS': return <Novels/>
        case 'PROFILE': return <Profile/>

        case 'WORLDS': return <Worlds/>
        case 'FACTIONS': return <Factions/>
        case 'PLACES': return <Places/>
        case 'PEOPLE': return <People/>

        default: return <Editor/>
      }
    };

    return (
      <div className="overflow">

        <Header/>
        <div className="showcase">
          <div className="side">
            <button value="WORLDS" className="button"
              onClick={ (e) => this.updateContent(e.target.value)}> WORLDS </button>
            <div className="break"></div>
            <button value="FACTIONS" className="button"
              onClick={ (e) => this.updateContent(e.target.value)}> FACTIONS </button>
            <div className="break"></div>
            <button value="PLACES" className="button"
              onClick={ (e) => this.updateContent(e.target.value)}> PLACES </button>
            <div className="break"></div>
            <button value="PEOPLE" className="button"
              onClick={ (e) => this.updateContent(e.target.value)}> PEOPLE </button>
          </div>

            <div className="content">
              <div className="trim">
                <Search/>
              </div>
              <div className="trim-fill"></div>

            {/* Mobile Buttons */}
              {/* <div className="mobile">
                <div className="column">
                  <Button value="WORLDS"/>
                  <Button value="FACTIONS"/>
                </div>

                <div className="column">
                  <Button value="SHARE"/>
                  <Button value="DELETE"/>
                </div>
              </div> */}

              {renderWorlds()}

            </div>

          <div className="side">
            <button value="NOVELS" className="button"
              onClick={ (e) => this.updateContent(e.target.value)}> NOVELS </button>
              <div className="break"></div>
            <button value="SAVE" className="button"
              onClick={ (e) => this.updateContent(e.target.value)}> SAVE </button>
              <div className="break"></div>
            <button value="PROFILE" className="button"
              onClick={ (e) => this.updateContent(e.target.value)}> PROFILE </button>
              <div className="break"></div>
            <button value="SETTINGS" className="button"
              onClick={ (e) => this.updateContent(e.target.value)}> SETTINGS </button>
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