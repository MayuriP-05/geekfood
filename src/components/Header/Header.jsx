import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <nav>
        <div className="container">
          <a href="/" className="logo">
            <img src="https://flowbite.com/docs/images/logo.svg" alt="Flowbite Logo" />
            <span className="title">GeekFoods</span>
          </a>
         
          <div className="nav" id="navbar">
        
          <ul>
              <li>
                <a href="/" aria-current="page">Home</a>
              </li>
              <li>
                <a href="/quote">Quote</a>
              </li>
              <li>
                <a href="/restaurant">Restaurants</a>
              </li>
              <li>
                <a href="/food">Foods</a>
              </li>
              <li>
                <a href="/about">Contact</a>
              </li>
            </ul>
            </div>
         
            <button className="button">Get started</button>
                    
        </div>
      </nav>
    </div>
  );
}

export default Header;
