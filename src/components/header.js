import React, { useState } from 'react';
import '../css/header.css';

export function Header() {
  const [openMen, setOpenMen] = useState(false);

  const handleItemClick = () => {
    if (openMen) {
      setOpenMen(false);
    }
  }

  return (
    <header>
      <div className="logo">
        <img alt="" src="images/logo.svg" width="64" />
        <a href="/">The Holy Cross Brewing Society</a>
      </div>

      <div className={`menu ${openMen ? 'absolute' : ''}`}>
        <a href='#about-us' onClick={handleItemClick}>About Us</a>
        <a href='#find-us' onClick={handleItemClick}>Find Us</a>
      </div>

      <a className="menu-icon" onClick={() => setOpenMen(prev => !prev)}>
        <i className="fa fa-bars"></i>
      </a>
    </header>
  )
}