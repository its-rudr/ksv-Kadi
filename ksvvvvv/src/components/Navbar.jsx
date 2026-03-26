import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/',           label: 'Home'       },
  { to: '/about',      label: 'About'      },
  { to: '/courses',    label: 'Courses'    },
  { to: '/admissions', label: 'Admissions' },
  { to: '/contact',    label: 'Contact'    },
];

export default function Navbar() {
  const [open,      setOpen]      = useState(false);
  const [scrolled, setScrolled]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-shadow duration-300 ${
        scrolled ? 'shadow-lg' : ''
      }`}
      style={{ background: '#003366' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* ── Logo ── */}
        <Link to="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-display font-bold text-sm"
            style={{ background: '#C8973A', color: '#003366' }}
          >
            KSV
          </div>
          <div className="text-white leading-tight hidden sm:block">
            <p className="font-display font-bold text-sm">Kadi Sarva</p>
            <p className="font-display font-bold text-sm">Vishwavidyalaya</p>
          </div>
          <div className="text-white leading-tight sm:hidden">
            <p className="font-display font-bold text-sm">KSV</p>
          </div>
        </Link>

        {/* ── Desktop Links ── */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `px-4 py-2 rounded-md font-heading font-medium text-sm transition-all duration-200 ${
                  isActive
                    ? 'text-ksv-primary font-semibold'
                    : 'text-white/85 hover:text-white hover:bg-white/10'
                }`
              }
              style={({ isActive }) => isActive ? { background: '#C8973A' } : {}}
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile Dropdown ── */}
      {open && (
        <div className="md:hidden border-t border-white/10 px-4 pb-4 pt-2 flex flex-col gap-1" style={{ background: '#002855' }}>
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-md font-heading font-medium text-sm transition-all duration-200 ${
                  isActive
                    ? 'text-ksv-primary font-semibold'
                    : 'text-white/85 hover:text-white hover:bg-white/10'
                }`
              }
              style={({ isActive }) => isActive ? { background: '#C8973A' } : {}}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
