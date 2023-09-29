import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export class NavBar extends Component {

  render() {
    return (
      <div>

<nav className="navbar navbar-expand-lg" style={{ background: 'linear-gradient(to right, orange, purple)' }}>
  <div className="container-fluid">
  <a className="navbar-brand text-white"href="/"><b>Finsimple</b></a>
<button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon-white"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <li className="nav-item text-white">
  <a className='nav-link text-white' href="/Home">Home</a>
</li>
        </li>
        
        <li className="nav-item text-white">
  <a className='nav-link text-white' href="/About">About</a>
</li>
        <li className="nav-item">
  <a className='nav-link text-white' href="/Business">Business</a></li>
  <li className="nav-item text-white">
  <a className='nav-link text-white' href="/Entertainment">Entertainment</a>
</li>
<li className="nav-item active text-white">
  <a className='nav-link text-white' href="/General">General</a>
</li>
<li className="nav-item active text-white">
  <a className='nav-link text-white' href="/Health">Health</a>
</li>
<li className="nav-item active text-white">
  <a className='nav-link text-white' href="/Science">Science</a>
</li>
<li className="nav-item active text-white">
  <a className='nav-link text-white' href="/Sports">Sports</a>
</li>
<li className="nav-item active text-white">
  <a className='nav-link text-white' href="/Technology">Technology</a>
</li>
<li className="nav-item active text-white">
  <NavLink className='nav-link text-white' to="/Stock">Stock Market LIVE</NavLink>
</li> 

<li className="nav-item active text-white">
  <a className='nav-link text-white' href="https://www.offerrushdeals.com/" target="_blank" rel="noopener noreferrer">Best Deals</a>
</li>
<li className="nav-item active text-white">
  <a className='nav-link text-white' href="https://www.coprics.com/" target="_blank" rel="noopener noreferrer">Gadgets</a>
</li>


      
      </ul>

    </div>
  </div>
</nav>
      </div>

    )
  }
}

export default NavBar;

