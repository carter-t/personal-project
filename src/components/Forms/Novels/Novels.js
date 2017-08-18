import React, {Component} from 'react';
import NewStory from './../../NewForm/NewStory/NewStory.js';

export default class Novels extends Component {
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
        return <NewStory/>;
      }
    }

    return (
      <div>

        <div className="wrapper">
          <div className="category"> NOVELS </div>
            <div className="item-container">
              <div className="single-item">
                <button className="item-title button3 round-left"> NOVEL TITLE </button>
                <div className="item-menu-small">
                  <button className="button3 round-right"> DELETE </button>
                </div>
              </div>
            <div className="button-bar">
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