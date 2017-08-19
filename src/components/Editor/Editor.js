import React, {Component} from 'react';

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: ''
    }
  }

  render() {
    return (
      <div>

        <div className="book">
          <div className="novel"> CONSOLE </div>

          <div className="volume">
            <textarea className="page"></textarea>
          </div>

          <div className="button-bar">
            <button className="button2"> NEW </button>
            <button className="button2"> SAVE </button>
          </div>
        </div>
          
        <div className="cut"></div>

      </div>
    )
  }
}