import React from 'react';
import {Link} from 'react-router-dom';

export default function Slider() {
  return (
    <main className="slider">

      <section className="column">
        <h3 className="title"> Menu </h3>
        <Link to="/"><div className="row"> Home </div></Link>
        <Link to="/new"><div className="row"> New Cube </div></Link>
        <Link to="/cubes"><div className="row"> Your Cubes </div></Link>
        <Link to="/"><div className="row"> Profile </div></Link>
      </section>

      {/* <section className="column">
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
      </section> */}

    </main>
  )
}