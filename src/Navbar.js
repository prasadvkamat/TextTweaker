import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export default function Navbar(props) {
 const label = props.mode === "light" ? "Light Mode" : "Dark Mode";
 return (
  <>
   <div>
    <nav
     className="navbar navbar-expand-lg bg-body-tertiary"
     data-bs-theme={props.mode}>
     <div className="container-fluid">
      <Link className="navbar-brand" to="/">
       {props.title}
      </Link>
      <button
       className="navbar-toggler"
       type="button"
       data-bs-toggle="collapse"
       data-bs-target="#navbarSupportedContent"
       aria-controls="navbarSupportedContent"
       aria-expanded="false"
       aria-label="Toggle navigation">
       <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <Link className="nav-link active" aria-current="page" to="/">
          Home
         </Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link active" to="/about">
          About Me
         </Link>
        </li>
        <li className="nav-item dropdown">
         <a
          className="nav-link active dropdown-toggle"
          href="/"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false">
          My socials
         </a>
         <ul className="dropdown-menu">
          <li>
           <a className="dropdown-item" href="https://leetcode.com/prasadvkamat/" target="__blank">
            Leetcode
           </a>
          </li>
          <li>
           <a className="dropdown-item" href="https://github.com/prasadvkamat" target="__blank">
            GitHub
           </a>
          </li>
          <li>
           <a className="dropdown-item"  href="mailto:prasadkqmat@gmail.com" target="__blank">
            E-mail me
           </a>
          </li>
          
         </ul>
        </li>
       </ul>
       <div className="form-check form-switch">
        <input
         className="form-check-input"
         type="checkbox"
         role="switch"
         id="flexSwitchCheckDefault"
         onClick={props.togglemode}
        />

        <label
         id="labelmode"
         className={`form-check-label ${
          props.mode === "light" ? "text-black" : "text-white"
         }`}
         htmlFor="flexSwitchCheckDefault">
         {label}
        </label>
       </div>
      </div>
     </div>
    </nav>
   </div>
  </>
 );
}

Navbar.prototype = {
 title: PropTypes.string,
 mode: PropTypes.string,
};
