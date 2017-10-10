import React, {Component} from 'react';
import {connect} from 'react-redux';
import {postCube} from './../../../dux/data.js';

class CubeForm extends Component {
  constructor(props) {
    super(props);

    this.updateName = this.updateName.bind(this);
    this.updateFace = this.updateFace.bind(this);
    this.updateType = this.updateType.bind(this);
    this.updateURL = this.updateURL.bind(this);
    this.addFace = this.addFace.bind(this);

    this.state = {
      name: false,
      face: "front",
      type: "photo",
      url: false,
      front: [],
      back: [],
      left: [],
      right: [],
      top: [],
      bottom: []
    }
  }

  updateName(event) {
    console.log(event.target.value);
    this.setState({name: event.target.value});
  }

  updateFace(event) {
    console.log(event.target.value);
    this.setState({face: event.target.value});
  }

  updateType(event) {
    console.log(event.target.value);
    this.setState({type: event.target.value});
  }

  updateURL(event) {
    console.log(event.target.value);
    this.setState({url: event.target.value});
  }

  addFace() {
    switch(this.state.face) {
      case "front": this.setState({front: [this.state.type, this.state.url]}); console.log('Front', this.state.front); break;
      case "back": this.setState({back: [this.state.type, this.state.url]}); console.log('Back', this.state.back); break;
      case "left": this.setState({left: [this.state.type, this.state.url]}); console.log('Left', this.state.left); break;
      case "right": this.setState({right: [this.state.type, this.state.url]}); console.log('Right', this.state.right); break;
      case "top": this.setState({top: [this.state.type, this.state.url]}); console.log('Top', this.state.top); break;
      case "bottom": this.setState({bottom: [this.state.type, this.state.url]}); console.log('Bottom', this.state.bottom); break;
      default: console.log("Wrong Face!");
    }
  }

  render() {
    return (
      <main className="cube-form">
        <form className="form">
          <aside className="left"></aside>
          <aside className="right"></aside>

          <section className="creator">
            <h1 className="form-title"> Create-A-Cube </h1>
            <input className="name" placeholder="Cube Name"
              onChange={ (e) => this.updateName(e) }/>
          </section>


          <section className="form-wrap">
            <div className="form-block">

              <div className="selector">
                <div className="type"> Face </div>
                <select name="cube" className="dropdown"
                  onChange={ (e) =>  this.updateFace(e) }>
                  <option value="front"> 1 - Front </option>
                  <option value="back"> 2 - Back </option>
                  <option value="left"> 3 - Left </option>
                  <option value="right"> 4 - Right </option>
                  <option value="top"> 5 - Top </option>
                  <option value="bottom"> 6 - Bottom </option>
                </select>
              </div>

              <div className="selector">
                <div className="type"> Type </div>
                <select name="cube" className="dropdown"
                  onChange={ (e) =>  this.updateType(e) }>
                  <option value="photo"> Photo </option>
                  <option value="video"> Video </option>
                  <option value="music"> Music </option>
                </select>
              </div>

              <div className="selector">
                <div className="type"> URL </div>
                <input className="dropdown" onChange={ (e) => this.updateURL(e) }/>
              </div>

              <div className="selector">
                <div className="markers">
                  <div className={this.state.front.length?"mark-on":"mark"}> 1 </div>
                  <div className={this.state.back.length?"mark-on":"mark"}> 2 </div>
                  <div className={this.state.left.length?"mark-on":"mark"}> 3 </div>
                  <div className={this.state.right.length?"mark-on":"mark"}> 4 </div>
                  <div className={this.state.top.length?"mark-on":"mark"}> 5 </div>
                  <div className={this.state.bottom.length?"mark-on":"mark"}> 6 </div>
                </div>
                <button type="button" className="small-save" disabled={this.state.url?false:true} onClick={() => this.addFace()}> Add </button>
              </div>

            </div>
          </section>

          <div className="submit">
            <button className="save" disabled={this.state.name&&this.state.front.length&&this.state.back.length&&this.state.left.length&&this.state.right.length&&this.state.top.length&&this.state.bottom.length?false:true}
              onClick={ () => this.props.postCube(
                "tag-ur-it",
                this.state.name,
                this.state.front,
                this.state.back,
                this.state.left,
                this.state.right,
                this.state.top,
                this.state.bottom
              )}> Create </button>
          </div>

        </form>
      </main>
    )
  }
}

export default connect((state) => {
  return {
    
  }
}, {postCube})(CubeForm);