import React from 'react';
import './Header.css'; // Ensure to import your CSS file

const Header = () => {
  return (
    <div className="header-container"> 
      <header className="navbar">
        <nav>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#hobbies">Hobbies</a></li>
            <li><a href="#family">Family</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#achievements">Achievements</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
