import React, {Component} from 'react';
import './../_NewForm.scss';

import {Button2} from './../../Button/Button.js';

export default class NewStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      charTitle: '',
      charAge: '',
      charGender: '',
      charRace: '',
      charAlign: '',
      charMantra: '',
      charTemp: '',
      charRole: [],
      charValues: [],
      charAbility: [],
      charDesc: '',
      charStory: ''
    }
    this.updateFirstName = this.updateFirstName.bind(this);
    this.updateLastName = this.updateLastName.bind(this);
    this.updateCharTitle = this.updateCharTitle.bind(this);
    this.updateCharAge = this.updateCharAge.bind(this);
    this.updateCharGender = this.updateCharGender.bind(this);
    this.updateCharRace = this.updateCharRace.bind(this);
    this.updateCharAlign = this.updateCharAlign.bind(this);
    this.updateCharMantra = this.updateCharMantra.bind(this);
    this.updateCharTemp = this.updateCharTemp.bind(this);
  }

  updateFirstName(event) {
    this.setState({firstName: event});
  }
  updateLastName(event) {
    this.setState({lastName: event});
  }
  updateCharTitle(event) {
    this.setState({charTitle: event});
  }
  updateCharAge(event) {
    this.setState({charAge: event});
  }
  updateCharGender(event) {
    this.setState({charGender: event});
  }
  updateCharRace(event) {
    this.setState({charRace: event});
  }
  updateCharAlign(event) {
    this.setState({charAlign: event});
  }
  updateCharMantra(event) {
    this.setState({charMantra: event});
  }
  updateCharTemp(event) {
    this.setState({charTemp: event});
  }
  updateCharRole(event) {
    let index = this.state.charRole.indexOf(event);
    if(index > -1) {
      let newArray = [...this.state.charRole]
      newArray.splice(index, 1);
      this.setState({charRole: newArray})
    } else {
      this.setState(prev => ({charRole: [...prev.charRole, event]}));
    }
  }
  updateCharValues(event) {
    let index = this.state.charValues.indexOf(event);
    if(index > -1) {
      let newArray = [...this.state.charValues]
      newArray.splice(index, 1);
      this.setState({charValues: newArray})
    } else {
      this.setState(prev => ({charValues: [...prev.charValues, event]}));
    }
  }
  updateCharAbility(event) {
    let index = this.state.charAbility.indexOf(event);
    if(index > -1) {
      let newArray = [...this.state.charAbility]
      newArray.splice(index, 1);
      this.setState({charAbility: newArray})
    } else {
      this.setState(prev => ({charAbility: [...prev.charAbility, event]}));
    }
  }
  updateCharDesc(event) {
    this.setState({charDesc: event});
  }
  updateCharStory(event) {
    this.setState({charStory: event});
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
                  onChange={ (e) => this.updateFirstName(e.target.value) }/>
                <input className="descriptor" placeholder="Volume"
                  onChange={ (e) => this.updateLastName(e.target.value) }/>
                <input className="descriptor" placeholder="Genre"
                  onChange={ (e) => this.updateCharTitle(e.target.value) }/>
              </form>

              <form className="sixty">
                <div className="caption"> WORLDS
                  <div className="checkform"><input type="checkbox" className="checkbox" value="World"
                    onChange={ (e) => this.updateCharRole(e.target.value) }/> World </div>
                </div>

                <div className="caption"> FACTIONS
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Factions"
                    onChange={ (e) => this.updateCharValues(e.target.value) }/> Factions </div>
                </div>
 
                <div className="caption"> PLACES
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Places"
                    onChange={ (e) => this.updateCharAbility(e.target.value) }/> Places </div>
                </div>

                <div className="caption"> PEOPLE
                  <div className="checkform"><input type="checkbox" className="checkbox" value="People"
                    onChange={ (e) => this.updateCharAbility(e.target.value) }/> People </div>
                </div>
              </form>
            </div>

            <div className="lineup">
              <textarea className="shortform" placeholder="Synopsis"
                onChange={ (e) => this.updateCharDesc(e.target.value) }/>
            </div>
          </div>

          <div className="button-bar">
            <Button2 value="ADD"/>
            <Button2 value="START"/>
          </div>

        </div>
              <div className="taper"></div>
      </div>
    )
  }
}