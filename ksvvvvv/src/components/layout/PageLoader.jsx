import React from 'react';
import { motion } from 'framer-motion';

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-white">
      <motion.div
        className="w-12 h-12 rounded-full border-4 border-t-transparent"
        style={{ borderColor: '#DDE3EE', borderTopColor: '#1A3A6B' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
      />
      <p className="mt-4 font-heading font-semibold text-sm" style={{ color: '#1A3A6B' }}>
        Loading…
      </p>
    </div>
  );
}
