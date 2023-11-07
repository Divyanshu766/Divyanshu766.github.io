const Home = () => {
  return (
    <section id="home">
      <div id="port-img">
        <div id="type-info">
          <h1>Hi,</h1>
          <h1 id="user-detail-name">I'm Divyanshu Rawat,</h1>
          <h1>
            <span className="auto-type">I'm a software developer</span>
          </h1>
        </div>
        <div id="contact-container">
          <button id="resume-button-2" onClick="Download()">
            Resume
          </button>
        </div>
        <div id="contact-links">
          <a
            id="contact-github"
            href="https://github.com/Divyanshu766"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://i.ibb.co/TvVrP3C/icons8-github-30.png"
              alt="github"
            />
          </a>
          <a
            id={"contact-linkedin"}
            href={"https://www.linkedin.com/in/divyanshu-rawat-28348826b"}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://i.ibb.co/fvCGQmx/icons8-linkedin-30-1.png"
              alt="linkedin"
            />
          </a>
          <a href="#">
            <img
              src="https://i.ibb.co/qg3Gh7c/icons8-instagram-30.png"
              alt="instagram"
              target="_blank"
            />
          </a>
          <a href="#">
            <img
              src="https://i.ibb.co/ph1stHw/icons8-twitter-circled-30.png"
              alt="twitter"
              target="_blank"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
