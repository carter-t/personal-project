import React, {Component} from 'react';

export default class Random extends Component {
  constructor(props) {
    super(props);
    this.state = {
      random: 'random'
    }
  }

  render() {
    return (
      <div>

        <div className="wrapper">
          <div className="category"> RANDOM STORY </div>
            <div className="item-container">
              <div className="single-item">
                <button className="item-title button3 round-left"> R@ND()M $T()Rie! </button>
                <div className="item-menu">
                  <button className="button3"> ADD </button>
                  <button className="button3 round-right"> DELETE </button>
                </div>
              </div>
            </div>
          <div className="button-bar">
          <button className="button2"> RESET </button>
          <button className="button2"> START </button>
          </div>
        </div>
        <div className="taper"></div>

      </div>
    )
  }
}