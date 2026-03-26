import React from 'react';
import { Link } from 'react-router-dom';

const announcements = [
  { id: 1, type: 'urgent', text: 'Admissions Open 2026 — Apply Now for UG & PG programmes', link: '/admission' },
  { id: 2, type: 'notice', text: 'Winter Examination Time-Table Published — Check your schedule', link: '/examination' },
  { id: 3, type: 'notice', text: 'JEMS Journal — Call for Research Papers (Vol. 12)', link: '/journals' },
  { id: 4, type: 'urgent', text: 'PhD Entrance Test Registration Closes on 15 Feb 2026', link: '/admission' },
  { id: 5, type: 'notice', text: 'Gyanotsav 2026 — National Conference on Engineering & Management', link: '/journals' },
  { id: 6, type: 'notice', text: 'Campus Placements: TCS, Infosys & Wipro visiting — Register now', link: '/placements' },
  { id: 7, type: 'notice', text: 'PARAM Shavak Supercomputer facility now open for research scholars', link: '/research' },
];

export default function AnnouncementTicker() {
  return (
    <div className="w-full overflow-hidden flex items-stretch" style={{ background: '#1A3A6B', height: '36px' }}>
      {/* Label */}
      <div
        className="shrink-0 flex items-center px-4 font-heading font-bold text-xs uppercase tracking-widest text-white z-10"
        style={{ background: '#C8973A' }}
      >
        Announcements
      </div>

      {/* Scrolling track */}
      <div className="flex-1 overflow-hidden relative flex items-center">
        <div className="ticker-track flex gap-16 whitespace-nowrap">
          {[...announcements, ...announcements].map((a, i) => (
            <Link
              key={i}
              to={a.link}
              className="inline-flex items-center gap-2 font-body text-xs text-white/90 hover:text-white shrink-0 transition-colors"
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: a.type === 'urgent' ? '#ef4444' : '#C8973A' }}
              />
              {a.text}
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .ticker-track {
          animation: ticker-scroll 40s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
