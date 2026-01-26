export default function Resume() {
  const pdfPath = '/Tate-Matley-Resume.pdf';
  const imgPath = '/images/resume.png'; 

  return (
    <section className="resume">
      <div className="resume-inner">
        <h1>Resume</h1>
        <p className="resume-subtitle">
          Download the PDF or view it below.
        </p>

        <div className="resume-actions">
            <a className="resume-btn" href={pdfPath} download>
                Download PDF
            </a>

            <a
                className="resume-btn resume-btn-secondary"
                href={pdfPath}
                target="_blank"
                rel="noreferrer"
            >
                Open in New Tab
            </a>
        </div>


        <div className="resume-page">
          <img src={imgPath} alt="Tate Matley resume" />
        </div>

      </div>
    </section>
  );
}
