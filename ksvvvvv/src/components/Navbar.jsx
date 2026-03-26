
import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="ksv-navbar">
      <ul className="ksv-navbar-list">
        <li className="ksv-navbar-item">
          Academics <span className="ksv-navbar-arrow">&#9662;</span>
        </li>
        <li className="ksv-navbar-item">
          Admission <span className="ksv-navbar-arrow">&#9662;</span>
        </li>
        <li className="ksv-navbar-item">
          Cells <span className="ksv-navbar-arrow">&#9662;</span>
        </li>
        <li className="ksv-navbar-item">
          Research <span className="ksv-navbar-arrow">&#9662;</span>
        </li>
        <li className="ksv-navbar-item">
          <div style={{display:'flex',flexDirection:'column',alignItems:'center',lineHeight:'1.1'}}>
            <span>Our</span>
            <span>Institute <span className="ksv-navbar-arrow">&#9662;</span></span>
          </div>
        </li>
        <li className="ksv-navbar-item">
          <div style={{display:'flex',flexDirection:'column',alignItems:'center',lineHeight:'1.1'}}>
            <span>Our</span>
            <span>Alumni <span className="ksv-navbar-arrow">&#9662;</span></span>
          </div>
        </li>
      </ul>
    </nav>
  );
}
