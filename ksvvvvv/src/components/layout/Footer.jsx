import React from 'react';
import { Link } from 'react-router-dom';

const quickLinks = [
  { to: '/',           label: 'Home'       },
  { to: '/about',      label: 'About'      },
  { to: '/courses',    label: 'Courses'    },
  { to: '/admissions', label: 'Admissions' },
  { to: '/contact',    label: 'Contact'    },
];

export default function Footer() {
  return (
    <footer style={{ background: '#002855' }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm shrink-0"
              style={{ background: '#C8973A', color: '#003366' }}
            >
              KSV
            </div>
            <div className="leading-tight">
              <p className="font-display font-bold text-sm">Kadi Sarva</p>
              <p className="font-display font-bold text-sm">Vishwavidyalaya</p>
            </div>
          </div>
          <p className="font-body text-white/65 text-sm leading-relaxed">
            Established under Gujarat State Government Act 21 of 2007. Approved by UGC. Managed by Sarva Vidyalaya Kelavani Mandal since 1919.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold text-sm uppercase tracking-widest mb-4" style={{ color: '#C8973A' }}>
            Quick Links
          </h4>
          <ul className="space-y-2">
            {quickLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="font-body text-sm text-white/70 hover:text-white transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold text-sm uppercase tracking-widest mb-4" style={{ color: '#C8973A' }}>
            Contact
          </h4>
          <ul className="space-y-2 font-body text-sm text-white/70">
            <li>Kadi Sarva Vishwavidyalaya</li>
            <li>Sector 15, Gandhinagar – 382 015</li>
            <li>Gujarat, India</li>
            <li className="pt-1">
              <a href="mailto:info@ksv.ac.in" className="hover:text-white transition-colors">
                info@ksv.ac.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center font-body text-xs text-white/40">
        © {new Date().getFullYear()} Kadi Sarva Vishwavidyalaya. All rights reserved.
      </div>
    </footer>
  );
}
