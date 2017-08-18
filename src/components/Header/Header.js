import React from 'react';
import './_Header.scss';

export default function Header() {
  return (
    <div>

      <div className="header">
        <a href="/" className="title"> Scribl <h1 className="sign"> 3 </h1> </a>

        <div className="nav">
          <div className="navtab"><li className="mag"> &#9906; </li></div>
          <div className="navtab"><li> &#9776; </li></div>

          <a href="http://localhost:3000/auth/" className="navbar sign up"> SIGN UP </a>
          <a href="http://localhost:3000/auth/callback" className="navbar"> LOGIN </a>
          <a href="/" className="navbar"> LOGOUT </a>
        </div>
      </div>
      <div className="lowline"></div>

    </div>
  )
}