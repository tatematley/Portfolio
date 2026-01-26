export default function About() {
  return (
    <section className="about">
      <div className="about-inner">
        <p className="about-eyebrow">About</p>

        <div className="about-photoWrap">
          <img
            className="about-photo"
            src="/images/headshot3.png"
            alt="Photo of Tate Matley"
          />
        </div>

        <h1>Hi, I’m Tate.</h1>

        <p className="about-lede">
          I’m passionate about building web experiences that feel clear, human,
          and genuinely helpful.
        </p>

        <div className="about-body">
          <p>
            I care a lot about people — how they think, what they need, and what
            gets in the way when they’re trying to get something done. That’s
            why I’m drawn to web design and UX: it’s the perfect intersection of
            creativity and problem-solving, with real impact on real humans.
          </p>

          <p>
            Outside of school and projects, I love trying new experiences. I’m 
            happiest when I’m traveling, meeting new people, and learning about 
            different cultures. I also love being outdoors — especially skiing — 
            and I’m known to bake for just about any excuse, especially when it 
            means sharing something with others.
          </p>

          <p>
            At the core of everything I do is a desire to serve people well.
            Whether I’m building a site, designing a flow, or collaborating with
            a team, I want the end result to feel intentional — and to make
            someone’s day a little easier.
          </p>
        </div>

        <div className="about-cta">
          <a className="resume-btn" href="/Tate-Matley-Resume.pdf" download>
            Download Resume
          </a>
          <a className="resume-btn resume-btn-secondary" href="/contact">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
