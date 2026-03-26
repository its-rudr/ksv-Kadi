import React from 'react';
import ResearchHero          from '../components/research/ResearchHero';
import SupercomputerFacility from '../components/research/SupercomputerFacility';
import FundedProjects        from '../components/research/FundedProjects';

export default function Research() {
  return (
    <div>
      <ResearchHero />
      <SupercomputerFacility />
      <FundedProjects />
    </div>
  );
}
