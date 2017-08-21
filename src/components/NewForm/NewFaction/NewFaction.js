import React, {Component} from 'react';
import {setFaction} from './../../../dux/reducer.js';
import {connect} from 'react-redux';

class NewFaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      factionName: '',
      factionAlign: '',
      factionMantra: '',
      factionType: [],
      factionPowers: [],
      factionHold: [],
      factionDesc: '',
      factionOrigin: ''
    }
    this.updateFactionName = this.updateFactionName.bind(this);
    this.updateFactionAlign = this.updateFactionAlign.bind(this);
    this.updateFactionMantra = this.updateFactionMantra.bind(this);
    this.updateFactionType = this.updateFactionType.bind(this);
    this.updateFactionPowers = this.updateFactionPowers.bind(this);
    this.updateFactionHold = this.updateFactionHold.bind(this);
    this.updateFactionDesc = this.updateFactionDesc.bind(this);
    this.updateFactionOrigin = this.updateFactionOrigin.bind(this);
  }

  updateFactionName(event) {
    this.setState({factionName: event});
  }
  updateFactionAlign(event) {
    this.setState({factionAlign: event});
  }
  updateFactionMantra(event) {
    this.setState({factionMantra: event});
  }
  updateFactionType(event) {
    let index = this.state.factionType.indexOf(event);
    if(index > -1) {
      let newArray = [...this.state.factionType]
      newArray.splice(index, 1);
      this.setState({factionType: newArray})
    } else {
      this.setState(prev => ({factionType: [...prev.factionType, event]}));
    }
  }
  updateFactionPowers(event) {
    let index = this.state.factionPowers.indexOf(event);
    if(index > -1) {
      let newArray = [...this.state.factionPowers]
      newArray.splice(index, 1);
      this.setState({factionPowers: newArray})
    } else {
      this.setState(prev => ({factionPowers: [...prev.factionPowers, event]}));
    }
  }
  updateFactionHold(event) {
    let index = this.state.factionHold.indexOf(event);
    if(index > -1) {
      let newArray = [...this.state.factionHold]
      newArray.splice(index, 1);
      this.setState({factionHold: newArray})
    } else {
      this.setState(prev => ({factionHold: [...prev.factionHold, event]}));
    }
  }
  updateFactionDesc(event) {
    this.setState({factionDesc: event});
  }
  updateFactionOrigin(event) {
    this.setState({factionOrigin: event});
  }

  render() {
    return (
      <div>

        <div className="wrapper">
          <div className="category"> NEW FACTION </div>

          <div className="container">
            <div>
              <form className="lineup">
                <input className="descriptor" placeholder="Name of Faction"
                  onChange={ (e) => this.updateFactionName(e.target.value) }/>
                <input className="descriptor" placeholder="Alignment"
                  onChange={ (e) => this.updateFactionAlign(e.target.value) }/>
                <input className="descriptor" placeholder="Mantra"
                  onChange={ (e) => this.updateFactionMantra(e.target.value) }/>
              </form>

              <div className="sixty">
                <form className="caption"> TYPE
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Democracy"
                    onChange={ (e) => this.updateFactionType(e.target.value) }/> Democracy </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Empire/Dictatorship"
                    onChange={ (e) => this.updateFactionType(e.target.value) }/> Empire/Dictatorship </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Religion/Cult"
                    onChange={ (e) => this.updateFactionType(e.target.value) }/> Religion/Cult </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Corportation"
                    onChange={ (e) => this.updateFactionType(e.target.value) }/> Corportation </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Gang/Mob"
                    onChange={ (e) => this.updateFactionType(e.target.value) }/> Gang/Mob </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Tribe"
                    onChange={ (e) => this.updateFactionType(e.target.value) }/> Tribe </div>
                </form>

                <div className="caption"> POWERS
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Political"
                    onChange={ (e) => this.updateFactionPowers(e.target.value) }/> Political </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="War/Violence"
                    onChange={ (e) => this.updateFactionPowers(e.target.value) }/> War/Violence </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Tradition/Dogma"
                    onChange={ (e) => this.updateFactionPowers(e.target.value) }/> Tradition/Dogma </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Divine Right"
                    onChange={ (e) => this.updateFactionPowers(e.target.value) }/> Divine Right </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Kinship"
                    onChange={ (e) => this.updateFactionPowers(e.target.value) }/> Kinship </div>
                </div>
 
                 <div className="caption"> HOLDINGS
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Infrastructure"
                    onChange={ (e) => this.updateFactionHold(e.target.value) }/> Infrastructure </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Military"
                    onChange={ (e) => this.updateFactionHold(e.target.value) }/> Military </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Capital"
                    onChange={ (e) => this.updateFactionHold(e.target.value) }/> Capital </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Technology"
                    onChange={ (e) => this.updateFactionHold(e.target.value) }/> Technology </div>
                </div>  
              </div>
            </div>

              <div className="lineup">
                <textarea className="shortform" placeholder="Faction Description"
                  onChange={ (e) => this.updateFactionDesc(e.target.value) }/>
              </div>

              <div className="lineup">
                <textarea className="longform" placeholder="Origin & History"
                  onChange={ (e) => this.updateFactionOrigin(e.target.value) }/>
              </div>

          </div>

          <div className="button-bar">
            <button className="button2"
              onClick={ () => this.props.setFaction(
                this.props.authID,
                this.state.factionName,
                this.state.factionAlign,
                this.state.factionMantra,
                this.state.factionType,
                this.state.factionPowers,
                this.state.factionHold,
                this.state.factionDesc,
                this.state.factionOrigin
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
}, {setFaction})(NewFaction);