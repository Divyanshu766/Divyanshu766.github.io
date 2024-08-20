import { Typewriter } from "react-simple-typewriter";
const Home = () => {
  return (
    <section id="home">
      <div id="port-img">
        <div id="type-info">
          <h1 className="type-info-hi">Hi,</h1>
          <h1 id="user-detail-name">{`I'm Divyanshu Rawat,`}</h1>
          <h1>
            <span className="auto-type">
              <div className="App">
                <Typewriter
                  words={[
                    "A MERN Stack Developer",
                    "JavaScript",
                    "React",
                    "Express",
                    "Mongodb",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </div>
            </span>
          </h1>
        </div>
        <div id="contact-container">
          <button
            id="resume-button-2"
            onClick={() => {
              const url =
                "https://drive.google.com/file/d/1r0hc8FCP-0QK7kAkYqcZpr5oe4iKeHfO/view?usp=sharing";
              const download =
                "https://drive.google.com/uc?export=download&id=1r0hc8FCP-0QK7kAkYqcZpr5oe4iKeHfO";
              window.open(url);
              window.location.href = download;
            }}
          >
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
          {/* <a href="#">
            <img
              src="https://i.ibb.co/qg3Gh7c/icons8-instagram-30.png"
              alt="instagram"
              target="_blank"
            />
          </a> */}
          <a href="https://x.com/Divyanshurawat_" target="_blank">
            <img
              src="https://i.ibb.co/ph1stHw/icons8-twitter-circled-30.png"
              alt="twitter"
              
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
