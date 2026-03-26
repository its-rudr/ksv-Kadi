
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function ResearchMegaMenu() {
  return (
    <div className="ksv-megamenu">
      {/* Left — description */}
      <div className="ksv-megamenu-desc">
        <h3 className="ksv-megamenu-title">Research</h3>
        <p className="ksv-megamenu-text">
          Explore the diverse opportunities and dedicated facilities provided by Kadi Sarva Vishwavidyalaya in the field of research.
        </p>
        <Link to="/research" className="ksv-megamenu-cta">
          Explore full overview &rarr;
        </Link>
      </div>

      {/* Divider */}
      <div className="ksv-megamenu-divider" />

      {/* Middle — Research */}
      <div className="ksv-megamenu-col">
        <p className="ksv-megamenu-col-heading">Research</p>
        <ul className="ksv-megamenu-links">
          <li><Link to="/research#conferences">Conferences</Link></li>
          <li><Link to="/research/funded-projects">Funded Projects</Link></li>
          <li><Link to="/research/projects">Research Projects</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const closeTimer = useRef(null);

  function open(name) {
    clearTimeout(closeTimer.current);
    setOpenMenu(name);
  }

  function close() {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  }

  return (
    <nav className="ksv-navbar">
      <ul className="ksv-navbar-list">
        <li className="ksv-navbar-item">
          <Link to="/academics">Academics <span className="ksv-navbar-arrow">&#9662;</span></Link>
        </li>
        <li className="ksv-navbar-item">
          <Link to="/admission">Admission <span className="ksv-navbar-arrow">&#9662;</span></Link>
        </li>
        <li className="ksv-navbar-item">
          <Link to="/cells-centers">Cells <span className="ksv-navbar-arrow">&#9662;</span></Link>
        </li>

        {/* Research — with mega menu */}
        <li
          className="ksv-navbar-item"
          onMouseEnter={() => open('research')}
          onMouseLeave={close}
        >
          <Link to="/research" className={openMenu === 'research' ? 'ksv-navbar-active' : ''}>
            Research <span className="ksv-navbar-arrow">&#9662;</span>
          </Link>
          {openMenu === 'research' && (
            <div onMouseEnter={() => open('research')} onMouseLeave={close}>
              <ResearchMegaMenu />
            </div>
          )}
        </li>

        <li className="ksv-navbar-item">
          <Link to="/about">
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',lineHeight:'1.1'}}>
              <span>Our</span>
              <span>Institute <span className="ksv-navbar-arrow">&#9662;</span></span>
            </div>
          </Link>
        </li>
        <li className="ksv-navbar-item">
          <Link to="/alumni">
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',lineHeight:'1.1'}}>
              <span>Our</span>
              <span>Alumni <span className="ksv-navbar-arrow">&#9662;</span></span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
