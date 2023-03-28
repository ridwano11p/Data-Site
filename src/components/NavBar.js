import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="topnav">
      <Link to="/" className="topnav-title">
        Berts Wearhouse
      </Link>
      <div className="menu-toggle" onClick={handleMenuToggle}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`topnav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" className="topnav-link">
          Home
        </Link>
        <Link to="/Api" className="topnav-link">
          Api
        </Link>
        <Link to="/Products" className="topnav-link">
          Products
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
