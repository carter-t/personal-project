import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCube, getAllCubes} from './../../../dux/data.js';

class Cube extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '',
      front: '',
      left: '',
      right: '',
      back: '',
      top: '',
      bottom: ''
    }
  }

  componentDidMount() {
    this.props.getAllCubes();
  }

  renderCubeSelect() {
    return (
      <select className="cube-select" onChange={ (e) => this.setState({current: e.target.value})}>
        <option value=""></option>
        <option value="cubeOne"> Cube One </option>
        <option value="cubeTwo"> Cube Two </option>
      </select>
    )
  }

  // buildCube() {
  //   switch(this.state.current) {
  //     case 'cubeOne':
  //       return this.setState({
  //         front: "https://www.youtube.com/embed/RxgughFKB48",
  //         left: "https://www.youtube.com/embed/Zi3Nq6l0H28",
  //         right: "https://www.youtube.com/embed/aAlXfs3Ta_A",
  //         back: "https://www.youtube.com/embed/aAlXfs3Ta_A",
  //         top: "https://www.youtube.com/embed/NUC2EQvdzmY",
  //         bottom: "https://www.youtube.com/embed/ti73SgrLadU"
  //       });
  //   }
  // }  

  render() {
    
    const rotateUp =() => {
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
  
    const rotateDown = () => {
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

        <div className="cube-name"> CUB3 </div>
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
                  {/* <iframe className="media" src={this.state.front} title="video" frameborder="0" allowfullscreen></iframe> */}
                </section>
              </div>

              <div className="left">
                <section className="face">
                  {/* <iframe className="media" src={this.state.left} title="video" frameborder="0" allowfullscreen></iframe> */}
                </section>
              </div>

              <div className="right">
                <section className="face">
                {/* <iframe className="media" src={this.state.right} title="video" frameborder="0" allowfullscreen></iframe> */}
                </section>
              </div>

              <div className="back">
                <section className="face">
                  {/* <iframe className="media" src={this.state.back} title="video" frameborder="0" allowfullscreen></iframe> */}
                </section>
              </div>

              <div className="top">
                <section className="face">
                  {/* <iframe className="media" src={this.state.top} title="video" frameborder="0" allowfullscreen></iframe> */}
                </section>
              </div>

              <div className="bottom">
                <section className="face">
                  {/* <iframe className="media" src={this.state.bottom} title="video" frameborder="0" allowfullscreen></iframe> */}
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
  console.log('CUBE:', state.cube);
  return {
    cube: state.cube
  }
}, {getCube, getAllCubes})(Cube);