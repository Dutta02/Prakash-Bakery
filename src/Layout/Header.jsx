import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div>
        <img src="src\assets\images.jpg" className="logo" />
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="/service">Service</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/Storelocater">StoreLocater</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
