import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#003366', color: '#fff' }}>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', margin: 0 }}>
        <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
        <li><Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link></li>
        <li><Link to="/courses" style={{ color: '#fff', textDecoration: 'none' }}>Courses</Link></li>
        <li><Link to="/admissions" style={{ color: '#fff', textDecoration: 'none' }}>Admissions</Link></li>
        <li><Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link></li>
      </ul>
    </nav>
  );
}
