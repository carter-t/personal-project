import React, {Component} from 'react';
import {setPlace} from './../../../dux/reducer.js';
import {connect} from 'react-redux';

class NewPlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeName: '',
      placeEra: '',
      placeLocation: '',
      placeType: [],
      placeLand: [],
      placeContext: [],
      placeDesc: '',
      placeOrigin: ''
    }
    this.updatePlaceName = this.updatePlaceName.bind(this);
    this.updatePlaceEra = this.updatePlaceEra.bind(this);
    this.updatePlaceLocation = this.updatePlaceLocation.bind(this);
    this.updatePlaceType = this.updatePlaceType.bind(this);
    this.updatePlaceLand = this.updatePlaceLand.bind(this);
    this.updatePlaceContext = this.updatePlaceContext.bind(this);
    this.updatePlaceDesc = this.updatePlaceDesc.bind(this);
    this.updatePlaceOrigin = this.updatePlaceOrigin.bind(this);
  }

  updatePlaceName(event) {
    this.setState({placeName: event});
  }
  updatePlaceEra(event) {
    this.setState({placeEra: event});
  }
  updatePlaceLocation(event) {
    this.setState({placeLocation: event});
  }
  updatePlaceType(event) {
    let index = this.state.placeType.indexOf(event);
    if(index > -1) {
      let newArray = [...this.state.placeType]
      newArray.splice(index, 1);
      this.setState({placeType: newArray})
    } else {
      this.setState(prev => ({placeType: [...prev.placeType, event]}));
    }
  }
  updatePlaceLand(event) {
    let index = this.state.placeLand.indexOf(event);
    if(index > -1) {
      let newArray = [...this.state.placeLand]
      newArray.splice(index, 1);
      this.setState({placeLand: newArray})
    } else {
      this.setState(prev => ({placeLand: [...prev.placeLand, event]}));
    }
  }
  updatePlaceContext(event) {
    let index = this.state.placeContext.indexOf(event);
    if(index > -1) {
      let newArray = [...this.state.placeContext]
      newArray.splice(index, 1);
      this.setState({placeContext: newArray})
    } else {
      this.setState(prev => ({placeContext: [...prev.placeContext, event]}));
    }
  }
  updatePlaceDesc(event) {
    this.setState({placeDesc: event});
  }
  updatePlaceOrigin(event) {
    this.setState({placeOrigin: event});
  }

  render() {
    return (
      <div>

        <div className="wrapper">
          <div className="category"> NEW PLACE </div>

          <div className="container">
            <div>
              <form className="lineup">
                <input className="descriptor" placeholder="Name of Place"
                  onChange={ (e) => this.updatePlaceName(e.target.value) }/>
                <input className="descriptor" placeholder="Era/Time Period"
                  onChange={ (e) => this.updatePlaceEra(e.target.value) }/>
                <input className="descriptor" placeholder="Location"
                  onChange={ (e) => this.updatePlaceLocation(e.target.value) }/>
              </form>

              <div className="sixty">
                <form className="caption"> TYPE
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Country"
                    onChange={ (e) => this.updatePlaceType(e.target.value) }/> Country </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Region/State"
                    onChange={ (e) => this.updatePlaceType(e.target.value) }/> Region/State </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="City"
                    onChange={ (e) => this.updatePlaceType(e.target.value) }/> City </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Town"
                    onChange={ (e) => this.updatePlaceType(e.target.value) }/> Town </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Building"
                    onChange={ (e) => this.updatePlaceType(e.target.value) }/> Building </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Wilderness"
                    onChange={ (e) => this.updatePlaceType(e.target.value) }/> Wilderness </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Scene"
                    onChange={ (e) => this.updatePlaceType(e.target.value) }/> Scene </div>
                </form>

                <div className="caption"> LANDSCAPE
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Urban"
                    onChange={ (e) => this.updatePlaceLand(e.target.value) }/> Urban </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Coast"
                    onChange={ (e) => this.updatePlaceLand(e.target.value) }/> Coast </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Hills/Mountains"
                    onChange={ (e) => this.updatePlaceLand(e.target.value) }/> Hills/Mountains </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Valley"
                    onChange={ (e) => this.updatePlaceLand(e.target.value) }/> Valley </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Dessert"
                    onChange={ (e) => this.updatePlaceLand(e.target.value) }/> Dessert </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Tropics"
                    onChange={ (e) => this.updatePlaceLand(e.target.value) }/> Tropics </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Marshlands"
                    onChange={ (e) => this.updatePlaceLand(e.target.value) }/> Marshlands </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Arctic"
                    onChange={ (e) => this.updatePlaceLand(e.target.value) }/> Arctic </div>
                </div>
 
                 <div className="caption"> CONTEXT
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Secure"
                    onChange={ (e) => this.updatePlaceContext(e.target.value) }/> Secure </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Dangerous"
                    onChange={ (e) => this.updatePlaceContext(e.target.value) }/> Dangerous </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Orderly"
                    onChange={ (e) => this.updatePlaceContext(e.target.value) }/> Orderly </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Chaotic"
                    onChange={ (e) => this.updatePlaceContext(e.target.value) }/> Chaotic </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Abundant/Wealthy"
                    onChange={ (e) => this.updatePlaceContext(e.target.value) }/> Abundant/Wealthy </div>
                  <div className="checkform"><input type="checkbox" className="checkbox" value="Scarce/Impoverished"
                    onChange={ (e) => this.updatePlaceContext(e.target.value) }/> Scarce/Impoverished </div>
                </div>  
              </div>
            </div>

              <div className="lineup">
                <textarea className="shortform" placeholder="Place Description"
                  onChange={ (e) => this.updatePlaceDesc(e.target.value) }/>
              </div>

              <div className="lineup">
                <textarea className="longform" placeholder="Origin & History"
                  onChange={ (e) => this.updatePlaceOrigin(e.target.value) }/>
              </div>

          </div>

          <div className="button-bar">
            <button className="button2"
              onClick={ () => this.props.setPlace(
                this.props.authID,
                this.state.placeName,
                this.state.placeEra,
                this.state.placeLocation,
                this.state.placeType,
                this.state.placeLand,
                this.state.placeContext,
                this.state.placeDesc,
                this.state.placeOrigin
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
}, {setPlace})(NewPlace);