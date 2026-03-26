import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ApplyNowButton() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
      <Link to="/admission">
        <motion.div
          className="relative overflow-hidden flex items-center justify-center font-heading font-bold text-xs uppercase tracking-widest text-white cursor-pointer select-none"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            transform: 'rotate(180deg)',
            background: '#C8973A',
            padding: '18px 10px',
            borderRadius: '8px 0 0 8px',
          }}
          whileHover={{ paddingLeft: 16 }}
          transition={{ duration: 0.2 }}
        >
          {/* Shimmer overlay */}
          <motion.span
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)',
              backgroundSize: '200% 100%',
            }}
            animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          />
          Apply Now
        </motion.div>
      </Link>
    </div>
  );
}
