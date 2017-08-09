import React from 'react';
import {Link} from 'react-router-dom';
import './_Header.scss'

export default function Header() {
  return (
    <div>

      <ul className="navbar">
        <Link to="/showcase" className="nav"><li> SHOWCASE </li></Link>
        <Link to="/about" className="nav"><li> ABOUT </li></Link>
        <Link to="/archive" className="nav"><li> ARCHIVE </li></Link>
        <Link to="/contact" className="nav"><li> CONTACT </li></Link>
      </ul>

      <div className="header">
        <h1 className="title"> VID|YO </h1>
        <ul className="sessionbar">
          <li className="session"> SIGN UP </li>
          <li className="session"> LOGIN </li>
        </ul>
      </div>

      <div className="breakline"></div>

      <ul className="navtab">
        <li className="menu"> ||| </li>
      </ul>

    </div>
  )
}