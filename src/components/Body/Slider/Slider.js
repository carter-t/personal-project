import React from 'react';
import {Link} from 'react-router-dom';

export default function Slider(props) {
  return (
    <main className={props.className}>
      <section className="column">
        <h3 className="title"> Menu </h3>
        <Link to="/"><div onClick={() => props.updateSlider()} className="row"> Home </div></Link>
        <Link to="/new"><div onClick={() => props.updateSlider()} className="row"> New Cube </div></Link>
        <Link to="/cubes"><div onClick={() => props.updateSlider()} className="row"> Your Cubes </div></Link>
        <Link to="/user"><div onClick={() => props.updateSlider()} className="row"> Profile </div></Link>
      </section>
    </main>
  )
}