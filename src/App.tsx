import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';


export default function App() {
  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-left">
            <Link to="/about">Tate Matley</Link>
          </div>

          <div className="nav-right">
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/resume">Resume</Link>

          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </>
  );
}
