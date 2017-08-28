import React from 'react';

export default function Cube() {

  function rotateUp() {
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

  function rotateDown() {
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

  function rotateLeft() {
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

  function rotateRight() {
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
                FRONT
              </section>
            </div>

            <div className="left">
              <section className="face">
                LEFT
              </section>
            </div>

            <div className="right">
              <section className="face">
                RIGHT
              </section>
            </div>

            <div className="back">
              <section className="face">
                BACK
              </section>
            </div>

            <div className="top">
              <section className="face">
                TOP
              </section>
            </div>

            <div className="bottom">
              <section className="face">
                BOTTOM
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