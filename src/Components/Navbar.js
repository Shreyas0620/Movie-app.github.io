import React from 'react'
import {NavLink} from "react-router-dom";
import img from './final-unscreen.gif'


function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-warning ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src= {img} height={"80px"} width={"200px"}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
          <NavLink to = '/Home' className ='nav-link active'>Home</NavLink>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">About</a> */}
          <NavLink to = '/About' className ='nav-link'>About</NavLink>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Movies</a> */}
          <NavLink to = '/Movies' className ='nav-link'>Movies</NavLink>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  );
}

export default Navbar;