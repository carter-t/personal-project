import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {Link} from 'react-router-dom';

import Header from './../Header/Header.js';
import Search from './../Search/Search.js';

import NewStory from './../NewForm/NewStory/NewStory.js';
import NewWorld from './../NewForm/NewWorld/NewWorld.js';
import NewFaction from './../NewForm/NewFaction/NewFaction.js';
import NewPlace from './../NewForm/NewPlace/NewPlace.js';
import NewCharacter from './../NewForm/NewCharacter/NewCharacter.js';

import People from './../Forms/People/People.js';

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
        case 'WORLDS': return <NewWorld/>
        case 'FACTIONS': return <NewFaction/>
        case 'PLACES': return <NewPlace/>
        case 'PEOPLE': return <People/>
        default: return <NewStory/>
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
            <button value="PROFILE" className="button"
              onClick={ (e) => this.updateContent(e.target.value)}> PROFILE </button>
            <div className="break"></div>
            <button value="STORIES" className="button"
              onClick={ (e) => this.updateContent(e.target.value)}> STORIES </button>
            <div className="break"></div>
            <button value="NEW" className="button"
              onClick={ (e) => this.updateContent(e.target.value)}> RANDOM </button>
            <div className="break"></div>
            <button value="RANDOM" className="button"
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