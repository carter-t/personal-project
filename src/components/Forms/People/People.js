import React, {Component} from 'react';
import {Button2} from './../../Button/Button.js'

export default class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: ''
    }
    this.updateFirstName = this.updateFirstName.bind(this);
  }

  updateFirstName(event) {
    this.setState({firstName: event});
  }

  render() {
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
            <Button2 value="NEW"/>
          </div>

        </div>
              <div className="taper"></div>
      </div>
    )
  }
}