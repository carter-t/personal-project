import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from './../Header/Header.js';
import Search from './../Search/Search.js';

import Novels from './../Forms/Novels/Novels.js';
import Chapters from './../Forms/Chapters/Chapters.js';
import Random from './../Forms/Random/Random.js';
import Profile from './../Forms/Profile/Profile.js';

import Worlds from './../Forms/Worlds/Worlds.js';
import Factions from './../Forms/Factions/Factions.js';
import Places from './../Forms/Places/Places.js';
import People from './../Forms/People/People.js';

import SetStory from './../SetForm/SetStory/SetStory.js';

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
    const renderForm = () => {
      switch(this.state.content) {
        case 'NOVELS': return <Novels/>
        case 'CHAPTERS': return <Chapters/>
        case 'PROFILE': return <Profile/>
        case 'RANDOM': return <Random/>

        case 'WORLDS': return <Worlds/>
        case 'FACTIONS': return <Factions/>
        case 'PLACES': return <Places/>
        case 'PEOPLE': return <People/>

        case 'STORY': return <SetStory/>

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

              {renderForm()}

            </div>

          <div className="side">
            <button value="NOVELS" className="button"
              onClick={ (e) => this.updateContent(e.target.value)}> NOVELS </button>
              <div className="break"></div>
            <button value="STORY" className="button"
              onClick={ (e) => this.updateContent(e.target.value)}> STORY </button>
              <div className="break"></div>
            <button value="RANDOM" className="button"
              onClick={ (e) => this.updateContent(e.target.value)}> RANDOM </button>
              <div className="break"></div>
            <button value="PROFILE" className="button"
              onClick={ (e) => this.updateContent(e.target.value)}> PROFILE </button>
          </div>
        </div>

      </div>
    )
  }
}

export default connect((state) => {
  return {
    state: ''
  }
}, {})(Landing);