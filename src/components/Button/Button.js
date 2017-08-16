import React from 'react';
import './_Button.scss';

export function Button(props) {
  return (
    <div>

      <button className="button">
        <h1> {props.value} </h1>
      </button>

    </div>
  )
}

export function Button2(props) {
  return (
    <div>

      <button className="button2">
        <h1> {props.value} </h1>
      </button>

    </div>
  )
}