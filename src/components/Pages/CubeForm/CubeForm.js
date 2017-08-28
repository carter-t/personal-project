import React, {Component} from 'react';
import {connect} from 'react-redux';
import {postCube} from './../../../dux/data.js';

class CubeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',

      frontType: '',
      frontFile: '',

      backType: '',
      backFile: '',

      leftType: '',
      leftFile: '',

      rightType: '',
      rightFile: '',

      topType: '',
      topFile: '',

      bottomType: '',
      bottomFile: ''
    }
    this.updateFace = this.updateFace.bind(this);
  }

  updateFace() {
    console.log('Setting Face', this.state.side)
    switch(this.state.side) {
      case 'front':
        return this.setState({frontFace: {
          media: this.state.media,
          file: this.state.file
        }});
      case 'left':
        return this.setState({leftFace: {
          media: this.state.media,
          file: this.state.file
        }});
      case 'right':
        return this.setState({rightFace: {
          media: this.state.media,
          file: this.state.file
        }});
      case 'back':
        return this.setState({backFace: {
          media: this.state.media,
          file: this.state.file
        }});
      case 'top':
        return this.setState({topFace: {
          media: this.state.media,
          file: this.state.file
        }});
      case 'bottom':
        return this.setState({bottomFace: {
          media: this.state.media,
          file: this.state.file
        }});
      default:
        return alert('Please select a file!');
    }
  }

  render() {
    return (
      <main className="cube-form">
        <form className="form">

          <section className="creator">
            <h1 className="form-title"> Create-A-Cube </h1>
            <input className="name" placeholder="Cube Name"
              onChange={ (e) => this.setState({name: e.target.value}) }/>
          </section>


          <div className="form-wrap">
          <div className="column">
            <section className="selector">
              <div className="type"> Front </div>
              <select name="cube" className="dropdown"
                onChange={ (e) =>  this.setState({frontType: e.target.value}) }>
                <option value=""></option>
                <option value="photo"> Photo </option>
                <option value="video"> Video </option>
                <option value="music"> Music </option>
              </select>
            </section>
            <section className="selector">
              <div className="type"> File: </div>
              <input type="file" onChange={ (e) => this.setState({frontFile: e.target.value}) }/>
            </section>


            <section className="selector">
              <div className="type"> Back </div>
              <select name="cube" className="dropdown"
                onChange={ (e) =>  this.setState({backType: e.target.value}) }>
                <option value=""></option>
                <option value="photo"> Photo </option>
                <option value="video"> Video </option>
                <option value="music"> Music </option>
              </select>
            </section>

            <section className="selector">
              <div className="type"> File: </div>
              <input type="file" onChange={ (e) => this.setState({backFile: e.target.value}) }/>
            </section>
          </div>





          <div className="column">
            <section className="selector">
              <div className="type"> Left </div>
              <select name="cube" className="dropdown"
                onChange={ (e) =>  this.setState({leftType: e.target.value}) }>
                <option value=""></option>
                <option value="photo"> Photo </option>
                <option value="video"> Video </option>
                <option value="music"> Music </option>
              </select>
            </section>
            <section className="selector">
              <div className="type"> File: </div>
              <input type="file" onChange={ (e) => this.setState({leftFile: e.target.value}) }/>
            </section>


            <section className="selector">
              <div className="type"> Right </div>
              <select name="cube" className="dropdown"
                onChange={ (e) =>  this.setState({rightType: e.target.value}) }>
                <option value=""></option>
                <option value="photo"> Photo </option>
                <option value="video"> Video </option>
                <option value="music"> Music </option>
              </select>
            </section>
            <section className="selector">
              <div className="type"> File: </div>
              <input type="file" onChange={ (e) => this.setState({rightFile: e.target.value}) }/>
            </section>
          </div>





          <div className="column">
            <section className="selector">
              <div className="type"> Top </div>
              <select name="cube" className="dropdown"
                onChange={ (e) =>  this.setState({topType: e.target.value}) }>
                <option value=""></option>
                <option value="photo"> Photo </option>
                <option value="video"> Video </option>
                <option value="music"> Music </option>
              </select>
            </section>
            <section className="selector">
              <div className="type"> File: </div>
              <input type="file" onChange={ (e) => this.setState({topFile: e.target.value}) }/>
            </section>


            <section className="selector">
              <div className="type"> Bottom </div>
              <select name="cube" className="dropdown"
                onChange={ (e) =>  this.setState({bottomType: e.target.value}) }>
                <option value=""></option>
                <option value="photo"> Photo </option>
                <option value="video"> Video </option>
                <option value="music"> Music </option>
              </select>
            </section>
            <section className="selector">
              <div className="type"> File: </div>
              <input type="file" onChange={ (e) => this.setState({bottomFile: e.target.value}) }/>
            </section>
          </div>
          </div>

          <div className="submit">
            <button className="save"
              onClick={ () => this.props.postCube(

                'tag-ur-it',
                this.state.name,

                this.state.frontType,
                this.state.frontFile,

                this.state.leftType,
                this.state.leftFile,

                this.state.rightType,
                this.state.rightFile,

                this.state.backType,
                this.state.backFile,

                this.state.topType,
                this.state.topFile,

                this.state.bottomType,
                this.state.bottomFile

              ) }> Create </button>
          </div>
        </form>
      </main>
    )
  }
}

export default connect((state) => {
  console.log("State User:", state.user)
  return {
    user: state.user,
    // tag: state.user.tag
  }
}, {postCube})(CubeForm);