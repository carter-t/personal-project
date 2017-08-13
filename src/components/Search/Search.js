import React from 'react';
import './_Search.scss';

export default function Search() {
  return (
    <div>

      <div className="search-bar">
        <input className="search-input" placeholder="Search"></input>
        <div className="search-button">
          <div className="mag"> &#9906; </div>
        </div>
      </div>

    </div>
  )
}