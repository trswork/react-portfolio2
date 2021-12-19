import React from 'react';

function Nav() {

  return (
    <nav className="navbar">
        <li className="mx-2">
          <Link to="/about">About Me</Link>
        </li>
        <li className="mx-2">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="mx-2">
          <Link to="/contact">Contact</Link>
        </li>
    </nav>
  );
}

export default Nav;