import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import Lightbox from '../components/Lightbox';

function Paragraphs({ text }: { text: string }) {
  return text.split('\n\n').map((para) => <p key={para}>{para}</p>);
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [lightbox, setLightbox] = useState<{ slug?: string; index: number } | null>(null);
  // only show the popup for the project it was opened on
  const lightboxIndex = lightbox && lightbox.slug === slug ? lightbox.index : null;

  if (!project) {
    return (
      <section className="projects">
        <div className="projects-inner">
          <h1>Project not found</h1>
          <Link className="resume-btn" to="/projects" state={{ restoreScroll: true }}>
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="case">
      <div className="case-inner">
        <p className="case-eyebrow">Case Study</p>
        <h1>{project.title}</h1>
        <p className="case-subtitle">{project.subtitle}</p>

        {project.status === 'in-progress' && (
          <div className="case-status">
            <span className="case-statusBadge">In Progress</span>
            <p className="case-statusText">
              This project is currently in development. Here are a few early screens, and a live link is coming soon.
            </p>
          </div>
        )}

        {project.notice && (
          <div className="case-status">
            <span className="case-statusBadge">{project.notice.label}</span>
            <p className="case-statusText">{project.notice.text}</p>
          </div>
        )}

        <div className="case-actions">
          <Link className="resume-btn resume-btn-secondary" to="/projects" state={{ restoreScroll: true }}>
            Back to Projects
          </Link>

          {(project.links ?? []).map((l) => (
            <a
              key={l.href}
              className="resume-btn"
              href={l.href}
              target={l.href.startsWith('/') ? undefined : '_blank'}
              rel={l.href.startsWith('/') ? undefined : 'noreferrer'}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* BEFORE / AFTER */}
        {project.beforeAfter && (
          <div className="case-beforeAfter">
            <div className="case-baCard">
              <p className="case-baLabel">
                {project.beforeAfter.beforeLabel ?? 'Before'}
              </p>
              <img
                className="case-baImg"
                src={project.beforeAfter.beforeImage}
                alt={`${project.title} before`}
              />
            </div>

            <div className="case-baCard">
              <p className="case-baLabel">
                {project.beforeAfter.afterLabel ?? 'After'}
              </p>
              <img
                className="case-baImg"
                src={project.beforeAfter.afterImage}
                alt={`${project.title} after`}
              />
            </div>
          </div>
        )}

        {/* VIDEO / WALKTHROUGH */}
        {project.heroVideo && (
          <div className="case-media">
            {project.heroVideo.type === 'file' ? (
              <video className="case-video" controls playsInline>
                <source src={project.heroVideo.src} />
              </video>
            ) : (
              <div className="case-embedWrap">
                <iframe
                  className="case-embed"
                  src={project.heroVideo.src}
                  title={`${project.title} walkthrough`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </div>
        )}

        {project.demoVideos && project.demoVideos.length > 0 && (
            <div className="case-section">
                <h2>Feature Demos</h2>

                <div className="case-demoGrid">
                {project.demoVideos.map((d) => (
                    <div key={d.title} className="case-demoCard">
                    <h3 className="case-demoTitle">{d.title}</h3>
                    {d.description && <p className="case-demoDesc">{d.description}</p>}

                    <div className="case-media">
                        {!d.video ? (
                        <div className="case-embedWrap case-videoPlaceholder">
                            <span>Video coming soon</span>
                        </div>
                        ) : d.video.type === 'file' ? (
                        <video className="case-video" controls playsInline>
                            <source src={d.video.src} />
                        </video>
                        ) : (
                        <div className="case-embedWrap">
                            <iframe
                            className="case-embed"
                            src={d.video.src}
                            title={d.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            />
                        </div>
                        )}
                    </div>
                    </div>
                ))}
                </div>
            </div>
            )}

            {/* DOCUMENTS */}
                {project.documents && project.documents.length > 0 && (
                <div className="case-section">
                    <h2>Documents</h2>

                    <div className="case-actions">
                    {project.documents.map((doc) => (
                        <a
                        key={doc.href}
                        className="resume-btn"
                        href={doc.href}
                        target="_blank"
                        rel="noreferrer"
                        >
                        {doc.label}
                        </a>
                    ))}
                    </div>
                </div>
                )}

                {project.gallery && project.gallery.length > 0 && (
                    <div className="case-section">
                        <h2>Gallery</h2>

                        <div className="case-gallery">
                        {project.gallery.map((img, i) => (
                            <figure key={img.src} className={`case-galleryItem${img.size === 'third' ? ' case-galleryItem--third' : ''}`}>
                            <button
                                type="button"
                                className="case-galleryButton"
                                onClick={() => setLightbox({ slug, index: i })}
                                aria-label={`View larger: ${img.alt}`}
                            >
                                <img className="case-galleryImg" src={img.src} alt={img.alt} />
                            </button>
                            {img.caption && <figcaption className="case-galleryCaption">{img.caption}</figcaption>}
                            </figure>
                        ))}
                        </div>

                        {lightboxIndex !== null && (
                            <Lightbox
                                images={project.gallery}
                                index={lightboxIndex}
                                onClose={() => setLightbox(null)}
                                onChange={(index) => setLightbox({ slug, index })}
                            />
                        )}
                    </div>
                    )}




        {/* CONTENT */}
        {project.overview && (
          <div className="case-section">
            <h2>Overview</h2>
            <Paragraphs text={project.overview} />
          </div>
        )}

        {project.challenge && (
          <div className="case-section">
            <h2>The Challenge</h2>
            <Paragraphs text={project.challenge} />
          </div>
        )}

        {project.process && project.process.length > 0 && (
          <div className="case-section">
            <h2>What I Built</h2>
            <ol className="case-list">
              {project.process.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        )}

        {project.impact ? (
          <div className="case-section">
            <h2>Impact</h2>
            <Paragraphs text={project.impact} />
          </div>
        ) : project.results && project.results.length > 0 && (
          <div className="case-section">
            <h2>Impact</h2>
            <ul className="case-list">
              {project.results.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        )}

        {project.reflection && (
          <div className="case-section case-reflection">
            <h2>What I Learned</h2>
            <Paragraphs text={project.reflection} />
          </div>
        )}

        <div className="case-actions case-actions-bottom">
          <Link className="resume-btn resume-btn-secondary" to="/projects" state={{ restoreScroll: true }}>
            Back to Projects
          </Link>

          {(project.links ?? []).map((l) => (
            <a
              key={l.href}
              className="resume-btn"
              href={l.href}
              target={l.href.startsWith('/') ? undefined : '_blank'}
              rel={l.href.startsWith('/') ? undefined : 'noreferrer'}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
