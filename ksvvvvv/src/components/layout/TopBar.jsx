import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, ExternalLink } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="w-full hidden md:block" style={{ background: '#0D1B2A', height: '36px' }}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Left — contact info */}
        <div className="flex items-center gap-6">
          <a
            href="tel:+917923260210"
            className="flex items-center gap-1.5 font-body text-xs text-white/60 hover:text-white/90 transition-colors"
          >
            <Phone size={11} />
            +91 79 2326 0210
          </a>
          <a
            href="mailto:info@ksv.ac.in"
            className="flex items-center gap-1.5 font-body text-xs text-white/60 hover:text-white/90 transition-colors"
          >
            <Mail size={11} />
            info@ksv.ac.in
          </a>
        </div>

        {/* Right — quick links */}
        <div className="flex items-center gap-5">
          {[
            { label: 'Examination', to: '/examination' },
            { label: 'Results',     to: '/examination' },
            { label: 'Recruitment', to: '/recruitment' },
            { label: 'Alumni',      to: '/alumni'      },
          ].map(({ label, to }) => (
            <Link
              key={to + label}
              to={to}
              className="font-body text-xs text-white/60 hover:text-white/90 transition-colors"
            >
              {label}
            </Link>
          ))}
          <a
            href="https://ksv.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-body text-xs text-white/60 hover:text-white/90 transition-colors"
          >
            Official Portal <ExternalLink size={10} />
          </a>
        </div>
      </div>
    </div>
  );
}
