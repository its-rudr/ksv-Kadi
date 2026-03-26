import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';

const conferences = [
  {
    name: 'Gyanotsav',
    full: 'National Conference on Engineering, Management & Sciences',
    description: 'KSV\'s flagship annual national conference bringing together researchers, academicians, and industry experts across engineering, management, and science disciplines.',
    frequency: 'Annual',
    venue: 'KSV Gandhinagar Campus',
    link: '/journals',
  },
  {
    name: 'COMCON',
    full: 'Conference on Management & Computing',
    description: 'A focused conference on the convergence of management practices and computing technologies, featuring paper presentations, workshops, and keynote sessions.',
    frequency: 'Annual',
    venue: 'KSV Kadi Campus',
    link: '/journals',
  },
  {
    name: 'NCFN',
    full: 'National Conference on Frontiers of Nano-science',
    description: 'An interdisciplinary conference exploring cutting-edge research in nano-science, nano-technology, and their applications in medicine, materials, and energy.',
    frequency: 'Biennial',
    venue: 'KSV Gandhinagar Campus',
    link: '/journals',
  },
  {
    name: 'JEMS Symposium',
    full: 'Journal of Engineering, Management & Sciences Symposium',
    description: 'An annual symposium aligned with the JEMS journal, providing a platform for paper authors and reviewers to present, discuss, and advance published research.',
    frequency: 'Annual',
    venue: 'KSV Campus',
    link: '/journals',
  },
];

export default function Conferences() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-heading font-bold text-xs uppercase tracking-widest mb-3" style={{ color: '#C8973A' }}>
            Academic Events
          </p>
          <h2 className="font-display font-bold text-4xl mb-4" style={{ color: '#1A3A6B' }}>
            Conferences & Symposia
          </h2>
          <p className="font-body text-base leading-relaxed max-w-2xl" style={{ color: '#4b5563' }}>
            KSV hosts national and international conferences that foster research collaboration, knowledge exchange, and academic dialogue across disciplines.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {conferences.map((conf, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="border rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-200"
              style={{ borderColor: '#DDE3EE', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
            >
              <div>
                <span
                  className="inline-block font-heading font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-3"
                  style={{ background: '#EEF2FF', color: '#1A3A6B' }}
                >
                  {conf.name}
                </span>
                <h3 className="font-display font-bold text-lg leading-snug" style={{ color: '#1A3A6B' }}>
                  {conf.full}
                </h3>
              </div>

              <p className="font-body text-sm leading-relaxed" style={{ color: '#6b7280' }}>
                {conf.description}
              </p>

              <div className="flex flex-wrap gap-4 text-xs font-body" style={{ color: '#9ca3af' }}>
                <span className="flex items-center gap-1">
                  <Calendar size={12} /> {conf.frequency}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={12} /> {conf.venue}
                </span>
              </div>

              <Link
                to={conf.link}
                className="inline-flex items-center gap-1.5 font-heading font-semibold text-xs mt-auto transition-colors"
                style={{ color: '#C8973A' }}
              >
                View Details <ExternalLink size={13} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
