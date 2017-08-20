import React, {Component} from 'react';
// import {postNovel} from './../../../dux/reducer.js';
import {connect} from 'react-redux';
import axios from 'axios';

class NewStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storyTitle: '',
      storyVolume: '',
      storyGenre: '',
      storyWorlds: [],
      storyFactions: [],
      storyPlaces: [],
      storyPeople: [],
      storySynopsis: ''
    }
    this.updateStoryTitle = this.updateStoryTitle.bind(this);
    this.updateStoryVolume = this.updateStoryVolume.bind(this);
    this.updateStoryGenre = this.updateStoryGenre.bind(this);
    this.updateStoryWorlds = this.updateStoryWorlds.bind(this);
    this.updateStoryFactions = this.updateStoryFactions.bind(this);
    this.updateStoryPlaces = this.updateStoryPlaces.bind(this);
    this.updateStoryPeople = this.updateStoryPeople.bind(this);
    this.updateStorySynopsis = this.updateStorySynopsis.bind(this);
  }

  updateStoryTitle(event) {
    this.setState({storyTitle: event});
  }
  updateStoryVolume(event) {
    this.setState({storyVolume: event});
  }
  updateStoryGenre(event) {
    this.setState({storyGenre: event});
  }
  updateStoryWorlds(event) {
    let index = this.state.storyWorlds.indexOf(event);
    if(index > -1) {
      let newArray = [...this.state.storyWorlds]
      newArray.splice(index, 1);
      this.setState({storyWorlds: newArray})
    } else {
      this.setState(prev => ({storyWorlds: [...prev.storyWorlds, event]}));
    }
  }
  updateStoryFactions(event) {
    let index = this.state.storyFactions.indexOf(event);
    if(index > -1) {
      let newArray = [...this.state.storyFactions]
      newArray.splice(index, 1);
      this.setState({storyFactions: newArray})
    } else {
      this.setState(prev => ({storyFactions: [...prev.storyFactions, event]}));
    }
  }
  updateStoryPlaces(event) {
    let index = this.state.storyPlaces.indexOf(event);
    if(index > -1) {
      let newArray = [...this.state.storyPlaces]
      newArray.splice(index, 1);
      this.setState({storyPlaces: newArray})
    } else {
      this.setState(prev => ({storyPlaces: [...prev.storyPlaces, event]}));
    }
  }
  updateStoryPeople(event) {
    let index = this.state.storyPeople.indexOf(event);
    if(index > -1) {
      let newArray = [...this.state.storyPeople]
      newArray.splice(index, 1);
      this.setState({storyPeople: newArray})
    } else {
      this.setState(prev => ({storyPeople: [...prev.storyPeople, event]}));
    }
  }
  updateStorySynopsis(event) {
    this.setState({storySynopsis: event});
  }

  postNovel(a, b, c, d, e, f, g, h, i) {
    axios.post('/novelData', (a, b, c, d, e, f, g, h, i));
  }

  render() {
    return (
      <div>

        <div className="wrapper">
          <div className="category"> NEW STORY </div>

          <div className="container">
            <div>
              <form className="lineup">
                <input className="descriptor" placeholder="Title"
                  onChange={ (e) => this.updateStoryTitle(e.target.value) }/>
                <input className="descriptor" placeholder="Volume"
                  onChange={ (e) => this.updateStoryVolume(e.target.value) }/>
                <input className="descriptor" placeholder="Genre"
                  onChange={ (e) => this.updateStoryGenre(e.target.value) }/>
              </form>

              <form className="sixty">
                <div className="caption"> WORLDS
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Worlds"
                    onChange={ (e) => this.updateStoryWorlds(e.target.value) }/> Worlds </div>
                </div>

                <div className="caption"> FACTIONS
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Factions"
                    onChange={ (e) => this.updateStoryFactions(e.target.value) }/> Factions </div>
                </div>
 
                <div className="caption"> PLACES
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Places"
                    onChange={ (e) => this.updateStoryPlaces(e.target.value) }/> Places </div>
                </div>

                <div className="caption"> PEOPLE
                  <div className="checkform"><input type="checkbox" className="checkbox" value="People"
                    onChange={ (e) => this.updateStoryPeople(e.target.value) }/> People </div>
                </div>
              </form>
            </div>

            <div className="lineup">
              <textarea className="shortform" placeholder="Synopsis"
                onChange={ (e) => this.updateStorySynopsis(e.target.value) }/>
            </div>
          </div>

          <div className="button-bar">
            <button className="button2" value="ADD"> ADD </button>
            <button className="button2"
              onClick={ () => this.postNovel(
                this.props.authID,
                this.state.storyTitle,
                this.state.storyVolume,
                this.state.storyGenre,
                this.state.storyWorlds,
                this.state.storyFactions,
                this.state.storyPlaces,
                this.state.storyPeople,
                this.state.storySynopsis,
              )}> SAVE </button>
          </div>

        </div>
              <div className="taper"></div>
      </div>
    )
  }
}

export default connect((state) => {
  return {
    authID: state.userData.authid
  }
}, {})(NewStory);