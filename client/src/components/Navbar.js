import React from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
    return(
        <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://sistereis.no">
      <h2>Logo</h2>
    </a>

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

            <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-end">
      <a className="navbar-item">
        Hjem
      </a>

      <a className="navbar-item">
        Om Oss
      </a>

      
        <a className="navbar-item">
          Arrangementer
        </a>
        
        <div className="navbar-item">
        <a className="button is-light">
            Log in
          </a>
          </div>
    </div>


  </div>
</nav>
        
    )
}

export default Navbar;