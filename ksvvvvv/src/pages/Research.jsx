import Conferences   from '../components/research/Conferences';
import FundedProjects from '../components/research/FundedProjects';
import ResearchProjectsList from '../components/research/ResearchProjectsList';

export default function Research() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <Conferences />
      <FundedProjects />
      <ResearchProjectsList />
    </div>
  );
}
