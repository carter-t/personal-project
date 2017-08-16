import React from 'react';
import {Link} from 'react-router-dom';
import './_Header.scss';

export default function Header() {
  return (
    <div>

      <div className="header">
        <Link to="/" className="title"> FICTION<h1 className="sign"> X </h1> </Link>

        <ul className="nav">
          <div className="navtab"><li className="mag"> &#9906; </li></div>
          <div className="navtab"><li> &#9776; </li></div>

          <Link to="/auth" className="navbar sign"> SIGN UP </Link>
          <Link to="/auth/callback" className="navbar"><li> LOGIN </li></Link>
          <Link to="/settings" className="navbar"><li> LOGOUT </li></Link>
        </ul>
      </div>
      <div className="lowline"></div>

    </div>
  )
}