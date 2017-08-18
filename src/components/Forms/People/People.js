import React, {Component} from 'react';
import NewCharacter from './../../NewForm/NewCharacter/NewCharacter.js';

export default class People extends Component {
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