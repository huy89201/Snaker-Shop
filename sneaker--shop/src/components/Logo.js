import React from "react";
import "../css/logo.css";
import {Link} from 'react-router-dom'

function Logo() {
  return (
    <div className="logo--wrapper">
      <div className="logo">
        <Link to="/">
          <i className="fa fa-free-code-camp" aria-hidden="true"></i>
        </Link>
      </div>
    </div>
  );
}

export default Logo;
