import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import ScrollToTop from './components/shared/ScrollToTop';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import FreshOutPage from './pages/FreshOutPage';
import BabyThriftPage from './pages/BabyThriftPage';
import BonderCaseStudy from './pages/BonderCaseStudy';
import RecordzPage from './pages/RecordzPage';
import TestProject from './pages/TestProject';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/fresh-out" element={<FreshOutPage />} />
          <Route path="/projects/baby-thrift" element={<BabyThriftPage />} />
          <Route path="/projects/bonder" element={<BonderCaseStudy />} />
          <Route path="/projects/1331-recordz" element={<RecordzPage />} />
          <Route path="/test-project" element={<TestProject />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
