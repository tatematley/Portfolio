import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section className="projects">
      <div className="projects-inner">
        <p className="projects-eyebrow">Selected Work</p>
        <h1>Projects</h1>
        <p className="projects-subtitle">
          A few projects I’ve worked on. <br>
          </br>Focused on people-first design and clear experiences.
        </p>

        <div className="project-grid">
          {projects.map((p) => (
            <Link to={`/projects/${p.slug}`} key={p.slug} className="project-card">
                {p.coverImage && (
                    <div className="project-card-imageWrap">
                    <img
                        src={p.coverImage}
                        alt={`${p.title} cover`}
                        className="project-card-image"
                    />
                    </div>
                )}

                <div className="project-card-top">
                    <h3>{p.title}</h3>
                    <p className="project-card-sub">{p.subtitle}</p>
                </div>


              <span className="project-arrow">View →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
