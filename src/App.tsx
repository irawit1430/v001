import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavigationWrapper from './components/layout/NavigationWrapper';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import PageTransition from './components/layout/PageTransition';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import FreshOutPage from './pages/FreshOutPage';
import BabyThriftPage from './pages/BabyThriftPage';
import BonderCaseStudy from './pages/BonderCaseStudy';
import RecordzPage from './pages/RecordzPage';
import TestProject from './pages/TestProject';
import ContactPage from './pages/ContactPage';

// Inner component to access useLocation
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <PageTransition key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/fresh-out" element={<FreshOutPage />} />
        <Route path="/projects/baby-thrift" element={<BabyThriftPage />} />
        <Route path="/projects/bonder" element={<BonderCaseStudy />} />
        <Route path="/projects/1331-recordz" element={<RecordzPage />} />
        <Route path="/test-project" element={<TestProject />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </PageTransition>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <NavigationWrapper />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
