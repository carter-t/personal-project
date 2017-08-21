import React, {Component} from 'react';
import {connect} from 'react-redux';

import NewWorld from './../../NewForm/NewWorld/NewWorld.js';
import AddWorld from './AddWorld.js';

import WorldOne from './../../SetForm/SetWorld/WorldOne.js';
import WorldTwo from './../../SetForm/SetWorld/WorldTwo.js';
import WorldThree from './../../SetForm/SetWorld/WorldThree.js';

class Worlds extends Component {
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
      case 'NONE':
        return this.setState({set: 'NONE'});
      default:
        return this.setState({set: 'NONE'});
    }
  }

  render() {
    const renderList = () => {
      if(this.state.new === 'CANCEL') {
        return <NewWorld/>;
      }
    }

    return (
      <div>

        <div className="wrapper">
          <div className="category"> WORLDS </div>
            <div className="item-container">
              <div className="single-item">
                <button className="item-title button3 round-left"> WORLD NAME </button>
                <div className="item-menu">
                  <button className="button3"> ADD </button>
                  <button className="button3 round-right"> DELETE </button>
                </div>
              </div>
            </div>
          <div className="button-bar">
          <button className="button2"
            onClick={ () => this.updateNew()}> {this.state.new} </button>
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