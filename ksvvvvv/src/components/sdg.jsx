import React from "react";

const SDG_GOALS = [
  { id: 1, title: "No Poverty", color: "#E5243B" },
  { id: 2, title: "Zero Hunger", color: "#DDA63A" },
  { id: 3, title: "Good Health and Well-being", color: "#4C9F38" },
  { id: 4, title: "Quality Education", color: "#C5192D" },
  { id: 5, title: "Gender Equality", color: "#FF3A21" },
  { id: 6, title: "Clean Water and Sanitation", color: "#26BDE2" },
  { id: 7, title: "Affordable and Clean Energy", color: "#FCC30B" },
  { id: 8, title: "Decent Work and Economic Growth", color: "#A21942" },
  { id: 9, title: "Industry, Innovation and Infrastructure", color: "#FD6925" },
  { id: 10, title: "Reduced Inequalities", color: "#DD1367" },
  { id: 11, title: "Sustainable Cities and Communities", color: "#FD9D24" },
  { id: 12, title: "Responsible Consumption and Production", color: "#BF8B2E" },
  { id: 13, title: "Climate Action", color: "#3F7E44" },
  { id: 14, title: "Life Below Water", color: "#0A97D9" },
  { id: 15, title: "Life on Land", color: "#56C02B" },
  { id: 16, title: "Peace, Justice and Strong Institutions", color: "#00689D" },
  { id: 17, title: "Partnerships for the Goals", color: "#19486A" },
];

function SdgCard({ goal }) {
  return (
    <a
      href={`https://sdgs.un.org/goals/goal${goal.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-2xl border border-ksv-border bg-ksv-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      aria-label={`Learn more about SDG ${goal.id}: ${goal.title}`}
    >
      <span
        className="absolute inset-x-0 top-0 h-1"
        style={{ backgroundColor: goal.color }}
      />

      <div className="mb-3 flex items-start justify-between gap-3">
        <span
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-lg font-bold text-white"
          style={{ backgroundColor: goal.color }}
        >
          {goal.id}
        </span>
        <span className="text-[11px] font-heading uppercase tracking-wide text-ksv-primary/70">
          UNESCO SDG
        </span>
      </div>

      <h3 className="font-heading text-base leading-snug text-ksv-dark">
        {goal.title}
      </h3>

      <p className="mt-2 text-xs font-body text-ksv-dark/70">
        Click to view the official United Nations goal details.
      </p>

      <span className="mt-3 inline-block text-xs font-heading tracking-wide text-ksv-primary transition-colors group-hover:text-ksv-dark">
        Explore Goal
      </span>
    </a>
  );
}

export default function SDGSection() {
  return (
    <section className="bg-gradient-to-b from-ksv-light/30 to-ksv-white py-12 sm:py-16">
      <div className="mx-auto w-[min(1200px,92%)]">
        <div className="mb-8 sm:mb-10">
          <p className="text-xs font-heading uppercase tracking-[0.2em] text-ksv-primary/80">
            Sustainability
          </p>
          <h2 className="mt-2 font-heading text-2xl font-bold text-ksv-dark sm:text-3xl">
            17 Sustainable Development Goals (SDGs)
          </h2>
          <p className="mt-3 max-w-3xl text-sm font-body leading-relaxed text-ksv-dark/80 sm:text-base">
            KSV aligns its academic, social, and research initiatives with the United Nations SDGs to create measurable and lasting impact.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SDG_GOALS.map((goal) => (
            <SdgCard key={goal.id} goal={goal} />
          ))}
        </div>
      </div>
    </section>
  );
}
