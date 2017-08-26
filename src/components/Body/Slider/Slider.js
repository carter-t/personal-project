import React from 'react';
// import {Link} from 'react-router-dom';

export default function Slider() {
  return (
    <main className="slider">

      <section className="column">
        <h3 className="title"> Menu </h3>
        <a href=""><div className="row"> Home </div></a>
        <a href=""><div className="row"> Profile </div></a>
        <a href=""><div className="row"> Projects </div></a>
      </section>

      <section className="column">
        <h3 className="title"> Tools </h3>
        <a href=""><div className="row"> Row </div></a>
        <a href=""><div className="row"> Row </div></a>
        <a href=""><div className="row"> Row </div></a>
      </section>

      <section className="column">
        <h3 className="title"> Settings </h3>
        <a href=""><div className="row"> Row </div></a>
        <a href=""><div className="row"> Row </div></a>
        <a href=""><div className="row"> Row </div></a>
      </section>

    </main>
  )
}