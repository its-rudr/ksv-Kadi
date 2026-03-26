import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar          from './components/Navbar';
import Footer          from './components/layout/Footer';
import TopBar          from './components/layout/TopBar';
import PageLoader      from './components/layout/PageLoader';
import ApplyNowButton  from './components/layout/ApplyNowButton';
import ChatbotWidget   from './components/chatbot/ChatbotWidget';

const Home                   = lazy(() => import('./pages/Home'));
const About                  = lazy(() => import('./pages/About'));
const Academics              = lazy(() => import('./pages/Academics'));
const AcademicsCourses       = lazy(() => import('./pages/AcademicsCourses'));
const Admissions             = lazy(() => import('./pages/Admissions'));
const Placements             = lazy(() => import('./pages/Placements'));
const Alumni                 = lazy(() => import('./pages/Alumni'));
const Campuses               = lazy(() => import('./pages/Campuses'));
const SisterConcerns         = lazy(() => import('./pages/SisterConcerns'));
const CellsCenters           = lazy(() => import('./pages/CellsCenters'));
const Research               = lazy(() => import('./pages/Research'));
const ResearchFundedProjects = lazy(() => import('./pages/ResearchFundedProjects'));
const ResearchProjects       = lazy(() => import('./pages/ResearchProjects'));
const Examination            = lazy(() => import('./pages/Examination'));
const Sustainability         = lazy(() => import('./pages/Sustainability'));
const Journals               = lazy(() => import('./pages/Journals'));
const CampusTour             = lazy(() => import('./pages/CampusTour'));
const NewsEvents             = lazy(() => import('./pages/NewsEvents'));
const Contact                = lazy(() => import('./pages/Contact'));
const Recruitment            = lazy(() => import('./pages/Recruitment'));
const Search                 = lazy(() => import('./pages/Search'));

const pageVariants = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.22, ease: 'easeOut' } },
  exit:    { opacity: 0, scale: 0.98, transition: { duration: 0.15 } },
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} variants={pageVariants} initial="initial" animate="animate" exit="exit">
        <Suspense fallback={<PageLoader />}>
          <Routes location={location}>
            <Route path="/"                         element={<Home />} />
            <Route path="/about"                    element={<About />} />
            <Route path="/academics"                element={<Academics />} />
            <Route path="/academics/courses"        element={<AcademicsCourses />} />
            <Route path="/admission"                element={<Admissions />} />
            <Route path="/placements"               element={<Placements />} />
            <Route path="/alumni"                   element={<Alumni />} />
            <Route path="/campuses"                 element={<Campuses />} />
            <Route path="/sister-concerns"          element={<SisterConcerns />} />
            <Route path="/cells-centers"            element={<CellsCenters />} />
            <Route path="/research"                 element={<Research />} />
            <Route path="/research/funded-projects" element={<ResearchFundedProjects />} />
            <Route path="/research/projects"        element={<ResearchProjects />} />
            <Route path="/examination"              element={<Examination />} />
            <Route path="/sustainability"           element={<Sustainability />} />
            <Route path="/journals"                 element={<Journals />} />
            <Route path="/campus-tour"              element={<CampusTour />} />
            <Route path="/news-events"              element={<NewsEvents />} />
            <Route path="/contact"                  element={<Contact />} />
            <Route path="/recruitment"              element={<Recruitment />} />
            <Route path="/search"                   element={<Search />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <AnimatedRoutes />
      </main>
      <Footer />
      <ApplyNowButton />
      <ChatbotWidget />
    </Router>
  );
}

export default App;
