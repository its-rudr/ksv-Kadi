import { motion } from 'framer-motion';
import { FlaskConical, Cpu, Leaf, Shield, HeartPulse } from 'lucide-react';

const projects = [
  {
    icon: Cpu,
    area: 'Computer Science & AI',
    title: 'Explainable AI for Clinical Decision Support',
    team: 'Dr. Priya Mehta et al.',
    status: 'Ongoing',
  },
  {
    icon: HeartPulse,
    area: 'Pharmacy & Life Sciences',
    title: 'Nanoparticle Drug Delivery Systems for Cancer Therapy',
    team: 'Dr. Neha Shah et al.',
    status: 'Ongoing',
  },
  {
    icon: Leaf,
    area: 'Environmental Engineering',
    title: 'Phytoremediation of Heavy Metal Contaminated Soils',
    team: 'Dr. Amit Desai et al.',
    status: 'Completed',
  },
  {
    icon: FlaskConical,
    area: 'Chemistry & Materials',
    title: 'Synthesis of Bio-degradable Polymers from Agro Waste',
    team: 'Dr. Kavita Joshi et al.',
    status: 'Ongoing',
  },
  {
    icon: Shield,
    area: 'Cyber Security',
    title: 'Intrusion Detection Using Federated Learning on IoT Networks',
    team: 'Dr. Ravi Patel et al.',
    status: 'Ongoing',
  },
  {
    icon: Cpu,
    area: 'Electronics & Communication',
    title: 'Low-Power VLSI Design for Wearable Health Monitors',
    team: 'Dr. Suresh Vora et al.',
    status: 'Completed',
  },
];

export default function ResearchProjectsList() {
  return (
    <section className="py-20" style={{ background: '#F8F9FC' }}>
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-heading font-bold text-xs uppercase tracking-widest mb-3" style={{ color: '#C8973A' }}>
            In-House
          </p>
          <h2 className="font-display font-bold text-4xl mb-4" style={{ color: '#1A3A6B' }}>
            Research Projects
          </h2>
          <p className="font-body text-base leading-relaxed max-w-2xl" style={{ color: '#4b5563' }}>
            Ongoing and completed research initiatives by KSV faculty across engineering, sciences, pharmacy, and social disciplines.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => {
            const Icon = p.icon;
            const isOngoing = p.status === 'Ongoing';
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="bg-white border rounded-2xl p-5 flex flex-col gap-3"
                style={{ borderColor: '#DDE3EE', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: '#EEF2FF' }}
                  >
                    <Icon size={18} style={{ color: '#1A3A6B' }} />
                  </div>
                  <span
                    className="text-xs font-heading font-bold px-2.5 py-1 rounded-full shrink-0"
                    style={
                      isOngoing
                        ? { background: '#dcfce7', color: '#16a34a' }
                        : { background: '#f3f4f6', color: '#6b7280' }
                    }
                  >
                    {p.status}
                  </span>
                </div>

                <div>
                  <p className="font-heading font-semibold text-xs uppercase tracking-wide mb-1" style={{ color: '#C8973A' }}>
                    {p.area}
                  </p>
                  <h4 className="font-heading font-bold text-sm leading-snug" style={{ color: '#1A3A6B' }}>
                    {p.title}
                  </h4>
                </div>

                <p className="font-body text-xs mt-auto" style={{ color: '#9ca3af' }}>
                  {p.team}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
