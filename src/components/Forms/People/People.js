import React, {Component} from 'react';
import {connect} from 'react-redux';

import NewCharacter from './../../NewForm/NewCharacter/NewCharacter.js';
import AddPerson from './AddPerson.js';

import PersonOne from './../../SetForm/SetPerson/PersonOne.js';
import PersonTwo from './../../SetForm/SetPerson/PersonTwo.js';
import PersonThree from './../../SetForm/SetPerson/PersonThree.js';
import PersonFour from './../../SetForm/SetPerson/PersonFour.js';

export default class People extends Component {
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
      case 'NONE':
        return this.setState({set: 'NONE'});
      default:
        return this.setState({set: 'NONE'});
    }
  }

  render() {
    const renderList = () => {
      if(this.state.new === 'CANCEL') {
        return <NewCharacter/>;
      }
    }

    return (
      <div>

        <div className="wrapper">
          <div className="category"> PEOPLE </div>
            <div className="item-container">
              <div className="single-item">
                <button className="item-title button3 round-left"> CHARACTER NAME </button>
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