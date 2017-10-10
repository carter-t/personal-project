import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCubes} from './../../../dux/data.js';

class Cube extends Component {
  constructor(props) {
    super(props);

    this.loopCubes = this.loopCubes.bind(this);
    this.renderCubeSelect = this.renderCubeSelect.bind(this);
    this.buildCube = this.buildCube.bind(this);
    this.buildFace = this.buildFace.bind(this);

    this.state = {
      cubes: false,
      cube: false,
      front: false,
      left: false,
      right: false,
      back: false,
      top: false,
      bottom: false
    }
  }

  componentDidMount() {
    this.props.getCubes().then(cubes => {
      this.setState({cubes: cubes.action.payload.data});
    });
  }

  loopCubes() {
    let options = [];
    for(let id in this.state.cubes) {
      let cube = this.state.cubes[id].name
      let option = (
        <option key={cube} value={cube}> {cube} </option>
      )
      options.push(option);
    }
    return options;
  }

  renderCubeSelect() {
    return (
      <select className="cube-select" onChange={ (e) => this.buildCube(e)}>
        <option value=''> Select A Cube </option>
        {this.loopCubes()}
      </select>
    )
  }

  buildCube(event) {
    this.setState({cube: event.target.value});
    for(let id in this.state.cubes) {
      let cube = this.state.cubes[id];
      if(this.state.cube === cube.name) {
        this.setState({
          front: cube.frontface.split('').slice(1, -1).join('').split(','),
          left: cube.backface.split('').slice(1, -1).join('').split(','),
          right: cube.leftface.split('').slice(1, -1).join('').split(','),
          back: cube.rightface.split('').slice(1, -1).join('').split(','),
          top: cube.topface.split('').slice(1, -1).join('').split(','),
          bottom: cube.bottomface.split('').slice(1, -1).join('').split(','),
        });
      }
    }
  }

  buildFace(face) {
    switch(face[0]) {
      case 'photo': console.log('wrong'); return (
        <img className="media" src={face[1]} alt=""></img>
      );
      case 'video': console.log('face', face[0], face[1]); return (
        <video className="media" src={face[1]} title="">
          <source src={face[1]}/>
        </video>
      );
      case 'music': console.log('wrong again', face[1]); return (
        <div>
          <img className="media" src="./audio-default.jpg" alt=""></img>
          <iframe src="http://techslides.com/demos/sample-videos/small.mp4" title="oops! no file here :("></iframe>
        </div>
      );
      default: return null;
    }
  }

  render() {
    
    const rotateUp = () => {
      let cube = document.getElementById("cube");
      let deg = 0;
      let time = setInterval(frame, 15);
  
      function frame() {
        if(deg === -90) {
          clearInterval(time);
        }
        else {
          deg--;
          cube.style.transform = 'rotateX('+deg+'deg)';
        }
      }
    }
  
    const rotateDown = () => {
      let cube = document.getElementById("cube");
      let deg = 0;
      let time = setInterval(frame, 15);
  
      function frame() {
        if(deg === 90) {
          clearInterval(time);
        }
        else {
          deg++;
          cube.style.transform = 'rotateX('+deg+'deg)';
        }
      }
    }
  
    const rotateLeft = () => {
      let cube = document.getElementById("cube");
      let deg = 0;
      let time = setInterval(frame, 15);
  
      function frame() {
        if(deg === 90) {
          clearInterval(time);
        }
        else {
          deg++;
          cube.style.transform = 'rotateY('+deg+'deg)';
        }
      }
    }
  
    const rotateRight = () => {
      let cube = document.getElementById("cube");
      let deg = 0;
      let time = setInterval(frame, 15);
  
      function frame() {
        if(deg === -90) {
          clearInterval(time);
        }
        else {
          deg--;
          cube.style.transform = 'rotateY('+deg+'deg)';
        }
      }
    }                                         

    return (
      <main className="showcase">
        <aside className="left-side"></aside>
        <aside className="right-side"></aside>

        <div className="cube-name"> {this.state.cube?this.state.cube.toUpperCase():"CUB3"} </div>
        {this.renderCubeSelect()}

        <div className="control">
          <div className="stack">
            <button onClick={ () => rotateUp()}
              className="click"> &#9650; </button>

            <button onClick={ () => rotateLeft()}
              className="click"> &#9664; </button>
          </div>

          <section className="shape">
            <figure className="cube" id="cube">

              <div className="front">
                <section className="face">
                  {this.state.cube?this.buildFace(this.state.front):"Select A Cube Above"}
                </section>
              </div>

              <div className="left">
                <section className="face">
                  {this.state.cube?this.buildFace(this.state.front):"Select A Cube Above"}
                </section>
              </div>

              <div className="right">
                <section className="face">
                  {this.state.cube?this.buildFace(this.state.front):"Select A Cube Above"}
                </section>
              </div>

              <div className="back">
                <section className="face">
                {this.state.cube?this.buildFace(this.state.front):"Select A Cube Above"}
                </section>
              </div>

              <div className="top">
                <section className="face">
                  {this.state.cube?this.buildFace(this.state.front):"Select A Cube Above"}
                </section>
              </div>

              <div className="bottom">
                <section className="face">
                  {this.state.cube?this.buildFace(this.state.front):"Select A Cube Above"}
                </section>
              </div>

            </figure>
          </section>

          <div className="stack">
            <button onClick={ () => rotateDown()}
              className="click"> &#9660; </button>

            <button onClick={ () => rotateRight()}
              className="click"> 	&#9654; </button>
          </div>

        </div>
      </main>
    )
  }
}

export default connect((state) => {
  return {
    
  }
}, {getCubes})(Cube);