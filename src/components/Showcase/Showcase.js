import React from 'react';
import './_Showcase.scss'

export default function Showcase() {
  return (
    <div className="showcase">

      <div className="full">
        <div className="tall"></div>
        <div className="half"> 
          <div className="wide top"></div>
          <div className="wide"></div>
        </div>
        <div className="tall"></div>
      </div>

      {/* <div>
        <div className="mobile"></div>
        <div className="mobile"></div>
      </div> */}

    </div>
  )
}