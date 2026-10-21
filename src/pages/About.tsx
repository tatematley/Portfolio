export default function About() {
  return (
    <section className="about">
      <div className="about-inner">
        <p className="about-eyebrow">About</p>

        <div className="about-top">
          <div className="about-text">
            <h1>Hi, I’m Tate.</h1>

            <p className="about-lede">
              I design and build websites and apps with a focus on making them
              simple, thoughtful, and enjoyable to use.
            </p>
          </div>

          <div className="about-photoWrap">
            <img
              className="about-photo"
              src="/images/headshot3.png"
              alt="Photo of Tate Matley"
            />
          </div>
        </div>

        <div className="about-body">
          <p>
            I’m working on my master’s in Information Systems at BYU, and I
            spend a lot of my time building things, from web and mobile apps to
            internal tools and websites for small businesses. My favorite part
            of the process comes before the code. I love talking with people,
            understanding what they’re trying to accomplish, and figuring out
            what might be getting in their way. Once I understand that, I can
            start designing and building something that actually makes their
            experience better.
          </p>

          <p>
            Outside of school and work, I love to travel. I’ve studied in
            Jerusalem and Italy and traveled through Fiji, Samoa, New Zealand,
            and Australia. Getting to experience new places and meet people from
            different backgrounds is one of my favorite things. I also love
            being outside, especially skiing, road biking, and playing
            pickleball. I love to read, I’ll watch just about any movie, and
            I’ll take almost any excuse to bake something and share it with
            people.
          </p>
        </div>

        <div className="about-cta">
          <a className="resume-btn" href="/TateMatleyResume.pdf" download>
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