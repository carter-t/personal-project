import React from 'react';
import './_Button.scss';

export default function Button(props) {
  return (
    <div>

      <div className="button">
        <h1> {props.value} </h1>
      </div>

    </div>
  )
}