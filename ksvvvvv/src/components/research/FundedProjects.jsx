import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const projects = [
  {
    title: 'IoT-Based Smart Agriculture Monitoring System',
    agency: 'DST – Science & Engineering Research Board (SERB)',
    amount: '₹24.5 Lakhs',
    duration: '2022 – 2025',
    pi: 'Dr. Ravi Patel, Dept. of Electronics',
    status: 'Ongoing',
    description: 'Development of a low-cost IoT sensor network for real-time monitoring of soil moisture, temperature, and crop health, enabling precision farming in semi-arid regions of Gujarat.',
  },
  {
    title: 'Machine Learning Models for Drug Discovery in Rare Diseases',
    agency: 'ICMR – Indian Council of Medical Research',
    amount: '₹38.2 Lakhs',
    duration: '2023 – 2026',
    pi: 'Dr. Neha Shah, Dept. of Pharmacy',
    status: 'Ongoing',
    description: 'Application of deep learning and molecular docking techniques to accelerate identification of novel therapeutic compounds targeting rare genetic disorders prevalent in the Indian population.',
  },
  {
    title: 'Sustainable Composite Materials from Agricultural Waste',
    agency: 'GUJCOST – Gujarat Council on Science & Technology',
    amount: '₹15.8 Lakhs',
    duration: '2021 – 2024',
    pi: 'Dr. Amit Desai, Dept. of Mechanical Engineering',
    status: 'Completed',
    description: 'Research into converting agro-waste (sugarcane bagasse, rice husk) into high-strength composite panels for low-cost rural housing, reducing environmental burden and construction costs.',
  },
  {
    title: 'Blockchain-Enabled Academic Credential Verification',
    agency: 'AICTE – All India Council for Technical Education',
    amount: '₹12.0 Lakhs',
    duration: '2022 – 2024',
    pi: 'Dr. Priya Mehta, Dept. of Computer Engineering',
    status: 'Completed',
    description: 'A decentralised system for issuing and verifying academic degrees and transcripts using Ethereum smart contracts, eliminating document fraud and enabling instant verification by employers globally.',
  },
  {
    title: 'Community-Based Mental Health Intervention in Rural Gujarat',
    agency: 'NIMHANS & UGC Joint Research Grant',
    amount: '₹19.6 Lakhs',
    duration: '2023 – 2026',
    pi: 'Dr. Sonal Joshi, Dept. of Social Work',
    status: 'Ongoing',
    description: 'Designing and evaluating culturally adapted mental health screening and peer-support programs for rural communities, with a focus on women and adolescent populations in North Gujarat.',
  },
];

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);
  const isOngoing = project.status === 'Ongoing';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="bg-white border rounded-radius-md overflow-hidden"
      style={{ borderColor: '#DDE3EE', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
    >
      <div className="p-6">
        {/* Status + Agency */}
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <span className="font-heading font-semibold text-xs uppercase tracking-widest" style={{ color: '#C8973A' }}>
            {project.agency}
          </span>
          <span
            className="text-xs font-heading font-bold px-2.5 py-1 rounded-full"
            style={
              isOngoing
                ? { background: '#dcfce7', color: '#16a34a' }
                : { background: '#f3f4f6', color: '#6b7280' }
            }
          >
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-lg leading-snug mb-3" style={{ color: '#1A3A6B' }}>
          {project.title}
        </h3>

        {/* Meta row */}
        <div className="flex flex-wrap gap-4 text-xs font-body mb-4" style={{ color: '#6b7280' }}>
          <span><span className="font-semibold" style={{ color: '#0D1B2A' }}>PI:</span> {project.pi}</span>
          <span><span className="font-semibold" style={{ color: '#0D1B2A' }}>Duration:</span> {project.duration}</span>
          <span><span className="font-semibold" style={{ color: '#0D1B2A' }}>Grant:</span> {project.amount}</span>
        </div>

        {/* Expandable description */}
        {expanded && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="font-body text-sm leading-relaxed mb-4"
            style={{ color: '#4b5563' }}
          >
            {project.description}
          </motion.p>
        )}

        <button
          onClick={() => setExpanded(e => !e)}
          className="flex items-center gap-1 font-heading font-semibold text-xs transition-colors"
          style={{ color: '#1A3A6B' }}
        >
          {expanded ? 'Show less' : 'Read more'}
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
      </div>
    </motion.div>
  );
}

export default function FundedProjects() {
  return (
    <section className="py-20" style={{ background: '#F8F9FC' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-heading font-bold text-xs uppercase tracking-widest mb-3" style={{ color: '#C8973A' }}>
            Externally Funded
          </p>
          <h2 className="font-display font-bold text-4xl mb-4" style={{ color: '#1A3A6B' }}>
            Research Projects
          </h2>
          <p className="font-body text-base leading-relaxed max-w-2xl" style={{ color: '#4b5563' }}>
            KSV faculty and researchers are engaged in nationally funded projects across disciplines, supported by agencies like DST, ICMR, GUJCOST, AICTE, and UGC.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://ksv.ac.in/research"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-heading font-semibold text-sm px-6 py-3 rounded-radius-md transition-colors"
            style={{ background: '#1A3A6B', color: '#fff' }}
          >
            View All Projects <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
