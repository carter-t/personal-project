import React, {Component} from 'react';
import {connect} from 'react-redux';

import NewStory from './../../NewForm/NewStory/NewStory.js';
import AddNovel from './AddNovel.js';

import StoryOne from './../../SetForm/SetStory/StoryOne.js';
import StoryTwo from './../../SetForm/SetStory/StoryTwo.js';
import StoryThree from './../../SetForm/SetStory/StoryThree.js';
import StoryFour from './../../SetForm/SetStory/StoryFour.js';

class Novels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      new: 'NEW',
      set: 'NONE'
    }
  }

  updateNew() {
    if(this.state.new === 'NEW') {
      this.setState({new: 'CANCEL'});
    }
    else if(this.state.new === 'CANCEL') {
      this.setState({new: 'NEW'});
    }
  }

  updateSet(value) {
    if(this.state.set === 'SET') {
      this.setState({set: 'CLOSE'});
    }
    else if(this.state.set === 'CLOSE') {
      this.setState({set: 'SET'});
    }

    switch(value) {
      case 'ONE':
        return this.setState({set: 'ONE'});
      case 'TWO':
        return this.setState({set: 'TWO'});
      case 'THREE':
        return this.setState({set: 'THREE'});
      case 'FOUR':
        return this.setState({set: 'FOUR'});
      case 'NONE':
        return this.setState({set: 'NONE'});
      default:
        return this.setState({set: 'NONE'});
    }
  }

  render() {
    const renderList = () => {
      if(this.state.new === 'CANCEL') {
        return <NewStory/>;
      }
    }

    const renderNovel = () => {
      if(this.state.set === 'ONE') {
        return <StoryOne/>;
      }
      else if(this.state.set === 'TWO') {
        return <StoryTwo/>;
      }
      else if(this.state.set === 'THREE') {
        return <StoryThree/>;
      }
      else if(this.state.set === 'FOUR') {
        return <StoryFour/>
      }
    }

    const renderNewNovel = () => {
      if(this.props.addNovel > 0) {
        return <AddNovel/>
      }
    }

    return (
      <div>

        <div className="wrapper">
          <div className="category"> STORIES </div>

          {renderNovel()}

            <div className="item-container">

              <div className="single-item">
                <button className="item-title button3 round-left"
                  onClick={ () => this.updateSet('ONE')}> {this.props.novelOneTitle} | {this.props.novelOneVolume} </button>
              </div>

              <div className="single-item">
                <button className="item-title button3 round-left"
                  onClick={ () => this.updateSet('TWO')}> {this.props.novelTwoTitle} | {this.props.novelTwoVolume} </button>
              </div>

              <div className="single-item">
                <button className="item-title button3"
                  onClick={ () => this.updateSet('THREE')}> {this.props.novelThreeTitle} | {this.props.novelThreeVolume} </button>
              </div>

              {renderNewNovel()}

            <div className="button-bar">
              <button className="button2"
                  onClick={ () => this.updateSet('NONE')}> CLOSE </button>
              <button className="button2"
                onClick={ () => this.updateNew()}> {this.state.new} </button>
            </div>
          </div>
          {renderList()}
        </div>
        <div className="taper"></div>

      </div>
    )
  }
}

export default connect((state) => {
  return {
    novelOneTitle: state.novelOne.noveltitle,
    novelOneVolume: state.novelOne.novelvolume,

    novelTwoTitle: state.novelTwo.noveltitle,
    novelTwoVolume: state.novelTwo.novelvolume,

    novelThreeTitle: state.novelThree.noveltitle,
    novelThreeVolume: state.novelThree.novelvolume,

    novelFour: state.novelFour
  }
}, {})(Novels);