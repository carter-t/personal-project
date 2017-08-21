import React, {Component} from 'react';
import {setPerson} from './../../../dux/reducer.js';
import {connect} from 'react-redux';

class NewCharacter extends Component {
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
          <div className="category"> NEW CHARACTER </div>

          <div className="container">
            <div>
              <form className="lineup">
                <input className="descriptor" placeholder="First Name"
                  onChange={ (e) => this.updateFirstName(e.target.value) }/>
                <input className="descriptor" placeholder="Last Name"
                  onChange={ (e) => this.updateLastName(e.target.value) }/>
                <input className="descriptor" placeholder="Title"
                  onChange={ (e) => this.updateCharTitle(e.target.value) }/>
              </form>
              <form className="lineup">
                <input className="descriptor" placeholder="Age"
                  onChange={ (e) => this.updateCharAge(e.target.value) }/>
                <input className="descriptor" placeholder="Gender"
                  onChange={ (e) => this.updateCharGender(e.target.value) }/>
                <input className="descriptor" placeholder="Race"
                  onChange={ (e) => this.updateCharRace(e.target.value) }/>
              </form>
              <form className="lineup">
                <input className="descriptor" placeholder="Alignment"
                  onChange={ (e) => this.updateCharAlign(e.target.value) }/>
                <input className="descriptor" placeholder="Mantra"
                  onChange={ (e) => this.updateCharMantra(e.target.value) }/>
                <input className="descriptor" placeholder="Temperment"
                  onChange={ (e) => this.updateCharTemp(e.target.value) }/>
              </form>

              <div className="sixty">
                <form className="caption"> ROLE
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Everyman"
                    onChange={ (e) => this.updateCharRole(e.target.value) }/> Everyman </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Comic/Jester"
                    onChange={ (e) => this.updateCharRole(e.target.value) }/> Comic/Jester </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Rebel/Outlaw"
                    onChange={ (e) => this.updateCharRole(e.target.value) }/> Rebel/Outlaw </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Soldier/Enforcer"
                    onChange={ (e) => this.updateCharRole(e.target.value) }/> Soldier/Enforcer </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Detective/Criminal"
                    onChange={ (e) => this.updateCharRole(e.target.value) }/> Detective/Criminal </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Champion/Mercenary"
                    onChange={ (e) => this.updateCharRole(e.target.value) }/> Champion/Mercenary </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="General/Warlord"
                    onChange={ (e) => this.updateCharRole(e.target.value) }/> General/Warlord </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Leader/Tyrant"
                    onChange={ (e) => this.updateCharRole(e.target.value) }/> Leader/Tyrant </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Mentor/Mastermind"
                    onChange={ (e) => this.updateCharRole(e.target.value) }/> Mentor/Mastermind </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Guardian/Shadow"
                    onChange={ (e) => this.updateCharRole(e.target.value) }/> Guardian/Shadow </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Uberman"
                    onChange={ (e) => this.updateCharRole(e.target.value) }/> Uberman </div>
                </form>

                <div className="caption"> VALUES
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Truth"
                    onChange={ (e) => this.updateCharValues(e.target.value) }/> Truth </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Peace"
                    onChange={ (e) => this.updateCharValues(e.target.value) }/> Peace </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Honesty"
                    onChange={ (e) => this.updateCharValues(e.target.value) }/> Honesty </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Equality"
                    onChange={ (e) => this.updateCharValues(e.target.value) }/> Equality </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Power"
                    onChange={ (e) => this.updateCharValues(e.target.value) }/> Power </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Money"
                    onChange={ (e) => this.updateCharValues(e.target.value) }/> Money </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Status"
                    onChange={ (e) => this.updateCharValues(e.target.value) }/> Status </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Freedom"
                    onChange={ (e) => this.updateCharValues(e.target.value) }/> Freedom </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Responsibility"
                    onChange={ (e) => this.updateCharValues(e.target.value) }/> Responsibility </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Fulfillment"
                    onChange={ (e) => this.updateCharValues(e.target.value) }/> Fulfillment </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Freedom"
                    onChange={ (e) => this.updateCharValues(e.target.value) }/> Honor </div>
                </div>
 
                 <div className="caption"> ABILITIES
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Combat"
                    onChange={ (e) => this.updateCharAbility(e.target.value) }/> Combat </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Manipulation"
                    onChange={ (e) => this.updateCharAbility(e.target.value) }/> Manipulation </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Strategy"
                    onChange={ (e) => this.updateCharAbility(e.target.value) }/> Strategy </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Intelligence"
                    onChange={ (e) => this.updateCharAbility(e.target.value) }/> Intelligence </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Charisma"
                    onChange={ (e) => this.updateCharAbility(e.target.value) }/> Charisma </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Intimidation"
                    onChange={ (e) => this.updateCharAbility(e.target.value) }/> Intimidation </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Superpowers"
                    onChange={ (e) => this.updateCharAbility(e.target.value) }/> Superpowers </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Supernatural"
                    onChange={ (e) => this.updateCharAbility(e.target.value) }/> Supernatural </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Temporal"
                    onChange={ (e) => this.updateCharAbility(e.target.value) }/> Temporal </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Magic"
                    onChange={ (e) => this.updateCharAbility(e.target.value) }/> Magic </div>
                </div>
              </div>
            </div>

              <div className="lineup">
                <textarea className="shortform" placeholder="Character Description"
                  onChange={ (e) => this.updateCharDesc(e.target.value) }/>
              </div>

              <div className="lineup">
                <textarea className="longform" placeholder="Backstory"
                  onChange={ (e) => this.updateCharStory(e.target.value) }/>
              </div>
          </div>

          <div className="button-bar">
            <button className="button2"
              onClick={ () => this.props.setPerson(
                this.props.authID,
                this.state.firstName,
                this.state.lastName,
                this.state.charTitle,
                this.state.charAge,
                this.state.charGender,
                this.state.charRace,
                this.state.charAlign,
                this.state.charMantra,
                this.state.charTemp,
                this.state.charRole,
                this.state.charValues,
                this.state.charAbility,
                this.state.charDesc,
                this.state.charStory
              )}> SAVE </button>
          </div>

        </div>
      </div>
    )
  }
}

export default connect((state) => {
  return {
    authID: state.userData.authid
  }
}, {setPerson})(NewCharacter);