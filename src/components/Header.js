import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  return(
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand text-info">Ranch Properties App</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
// <Link to="/"><h1>Ranch Properties App</h1></Link>






export default Header;