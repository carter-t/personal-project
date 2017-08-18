import React, {Component} from 'react';
import NewFaction from './../../NewForm/NewFaction/NewFaction.js';

export default class Factions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      new: 'NEW'
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

  render() {
    const renderList = () => {
      if(this.state.new === 'CANCEL') {
        return <NewFaction/>;
      }
    }

    return (
      <div>

        <div className="wrapper">
          <div className="category"> FACTIONS </div>
            <div className="item-container">
              <div className="single-item">
                <button className="item-title button3 round-left"> FACTION NAME </button>
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