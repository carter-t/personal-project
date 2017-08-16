import React, {Component} from 'react';
import './../_NewForm.scss';

import {Button2} from './../../Button/Button.js';

export default class NewWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      worldName: '',
      worldEra: '',
      worldUni: '',
      worldLand: [],
      worldPractice: [],
      worldInhab: [],
      worldDesc: '',
      worldLore: ''
    }
    this.updateWorldName = this.updateWorldName.bind(this);
    this.updateWorldEra = this.updateWorldEra.bind(this);
    this.updateWorldUni = this.updateWorldUni.bind(this);
    this.updateWorldLand = this.updateWorldLand.bind(this);
    this.updateWorldPractice = this.updateWorldPractice.bind(this);
    this.updateWorldInhab = this.updateWorldInhab.bind(this);
    this.updateWorldDesc = this.updateWorldDesc.bind(this);
    this.updateWorldLore = this.updateWorldLore.bind(this);
  }

  updateWorldName(event) {
    this.setState({worldName: event});
  }
  updateWorldEra(event) {
    this.setState({worldEra: event});
  }
  updateWorldUni(event) {
    this.setState({worldUni: event});
  }
  updateWorldLand(event) {
    let index = this.state.worldLand.indexOf(event);
    if(index > -1) {
      let newArray = [...this.state.worldLand]
      newArray.splice(index, 1);
      this.setState({worldLand: newArray})
    } else {
      this.setState(prev => ({worldLand: [...prev.worldLand, event]}));
    }
  }
  updateWorldPractice(event) {
    let index = this.state.worldPractice.indexOf(event);
    if(index > -1) {
      let newArray = [...this.state.worldPractice]
      newArray.splice(index, 1);
      this.setState({worldPractice: newArray})
    } else {
      this.setState(prev => ({worldPractice: [...prev.worldPractice, event]}));
    }
  }
  updateWorldInhab(event) {
    let index = this.state.worldInhab.indexOf(event);
    if(index > -1) {
      let newArray = [...this.state.worldInhab]
      newArray.splice(index, 1);
      this.setState({worldInhab: newArray})
    } else {
      this.setState(prev => ({worldInhab: [...prev.worldInhab, event]}));
    }
  }
  updateWorldDesc(event) {
    this.setState({worldDesc: event});
  }
  updateWorldLore(event) {
    this.setState({worldLore: event});
  }

  render() {
    return (
      <div>

        <div className="wrapper">
          <div className="category"> A BRAVE NEW WORLD </div>

          <div className="container">
            <div>
              <form className="lineup">
                <input className="descriptor" placeholder="Name of World"
                  onChange={ (e) => this.updateWorldName(e.target.value) }/>
                <input className="descriptor" placeholder="Era/Time Period"
                  onChange={ (e) => this.updateWorldEra(e.target.value) }/>
                <input className="descriptor" placeholder="Universe/Dimension"
                  onChange={ (e) => this.updateWorldUni(e.target.value) }/>
              </form>

              <div className="sixty">
                <form className="caption"> LANDMASSES
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Pangaea"
                    onChange={ (e) => this.updateWorldLand(e.target.value) }/> Pangaea </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Continents"
                    onChange={ (e) => this.updateWorldLand(e.target.value) }/> Continents </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Archipelagos"
                    onChange={ (e) => this.updateWorldLand(e.target.value) }/> Archipelagos </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Unknown"
                    onChange={ (e) => this.updateWorldLand(e.target.value) }/> Unknown </div>
                </form>

                <div className="caption"> PRACTICES
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Technology"
                    onChange={ (e) => this.updateWorldPractice(e.target.value) }/> Technology </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Powers"
                    onChange={ (e) => this.updateWorldPractice(e.target.value) }/> Powers </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Magic"
                    onChange={ (e) => this.updateWorldPractice(e.target.value) }/> Magic </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Supernatural"
                    onChange={ (e) => this.updateWorldPractice(e.target.value) }/> Supernatural </div>
                </div>

                <div className="caption"> INHABITANTS
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Humans"
                    onChange={ (e) => this.updateWorldInhab(e.target.value) }/> Humans </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Native Humanoids"
                    onChange={ (e) => this.updateWorldInhab(e.target.value) }/> Native Humanoids </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Foreign Humanoids"
                    onChange={ (e) => this.updateWorldInhab(e.target.value) }/> Foreign Humanoids </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Entities"
                    onChange={ (e) => this.updateWorldInhab(e.target.value) }/> Entities </div>
                </div>
              </div>
            </div>

              <div className="lineup">
                <textarea className="shortform" placeholder="World Description"
                  onChange={ (e) => this.updateWorldDesc(e.target.value) }/>
              </div>

              <div className="lineup">
                <textarea className="longform" placeholder="Lore & History"
                  onChange={ (e) => this.updateWorldLore(e.target.value) }/>
              </div>

          </div>

          <div className="button-bar">
            <Button2 value="ADD"/>
            <Button2 value="CLEAR"/>
            <Button2 value="SAVE"/>
          </div>

        </div>
                    <div className="taper"></div>
      </div>
    )
  }
}