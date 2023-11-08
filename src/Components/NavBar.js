import React from 'react';
import './style/NavBar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Aadhar Card</Link></li>
        <li><Link to="/pancard">Pan Card</Link></li>
        <li><Link to="/electioncard">Election card</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
