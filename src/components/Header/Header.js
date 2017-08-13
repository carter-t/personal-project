import React from 'react';
import {Link} from 'react-router-dom';
import './_Header.scss';

export default function Header() {
  return (
    <div>

      <div className="header">
        <Link to="/" className="title"> VIDYO </Link>

        <ul className="nav">
          <div className="navtab"><li className="mag"> &#9906; </li></div>
          <div className="navtab"><li> &#9776; </li></div>

          <Link to="/auth/signup" className="navbar"><li> SIGN UP </li></Link>
          <Link to="/auth/login" className="navbar"><li> LOGIN </li></Link>
          <Link to="/settings" className="navbar"><li> SETTINGS </li></Link>
        </ul>
      </div>
      <div className="lowline"></div>

    </div>
  )
}