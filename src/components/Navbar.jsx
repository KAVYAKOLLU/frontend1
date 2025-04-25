
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">My Project</div>
      <ul className="navbar-nav">
        <li className="nav-item"><a href="#home">Home</a></li>
        <li className="nav-item"><a href="#posts">Posts</a></li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
