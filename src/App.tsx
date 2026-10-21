import { useLayoutEffect } from 'react';
import { Routes, Route, Link, Navigate, useLocation, useNavigationType } from 'react-router-dom';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import { PROJECTS_SCROLL_KEY } from './pages/Projects';

// we handle scroll ourselves so the browser doesn't fight us on back/forward
if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';

// new pages start at the top; going back to /projects returns to where you left it
function ScrollManager() {
  const location = useLocation();
  const navType = useNavigationType();
  const restore = (location.state as { restoreScroll?: boolean } | null)?.restoreScroll;

  useLayoutEffect(() => {
    let y = 0;
    if (location.pathname === '/projects' && (navType === 'POP' || restore)) {
      try {
        y = Number(sessionStorage.getItem(PROJECTS_SCROLL_KEY)) || 0;
      } catch {
        // storage blocked: fall back to the top
      }
    }
    window.scrollTo(0, y);
  }, [location.key, location.pathname, navType, restore]);

  return null;
}


export default function App() {
  return (
    <>
      <ScrollManager />
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
