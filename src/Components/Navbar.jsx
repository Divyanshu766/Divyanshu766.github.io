import { useState } from "react";

const Navbar = () => {
  const [btn, setBtn] = useState(false);

  const links = () => {
    return setBtn(false);
  };
  return (
    <>
      <div>
        <div id="computer">
          <nav>
            <h1> {"< Divyanshu >"} </h1>
            <div id="nav-menu">
              <a href="#home" className="nav-link home">
                Home
              </a>
              <a href="#about" className="nav-link about">
                About
              </a>
              <a href="#skills" className="nav-link skills">
                Skills
              </a>
              <a href="#projects" className="nav-link projects">
                Projects
              </a>
              <a href="#contact" className="nav-link contact">
                Contact
              </a>
            </div>
            <div id="resume-button-1">
              <button
                className="nav-link resume"
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
              <img
                className="navbar-line"
                src="https://img.icons8.com/ios/50/xbox-menu.png"
              />
            </div>
          </nav>
          <hr />
        </div>

        <div id="mobile">
          <div
            className="mobile-heading"
            onClick={() => {
              setBtn(!btn);
            }}
          >
            <h1> {"< Divyanshu >"} </h1>
            <img
              className="navbar-line"
              src="https://img.icons8.com/ios/50/xbox-menu.png"
            />
          </div>
          {btn ? (
            <nav>
              <h1> {"< Divyanshu >"} </h1>
              <div id="nav-menu">
                <a
                  onClick={() => {
                    links();
                  }}
                  href="#home"
                  className="nav-link home"
                >
                  Home
                </a>
                <a
                  onClick={() => {
                    links();
                  }}
                  href="#about"
                  className="nav-link about"
                >
                  About
                </a>
                <a
                  onClick={() => {
                    links();
                  }}
                  href="#skills"
                  className="nav-link skills"
                >
                  Skills
                </a>
                <a
                  onClick={() => {
                    links();
                  }}
                  href="#projects"
                  className="nav-link projects"
                >
                  Projects
                </a>
                <a
                  onClick={() => {
                    links();
                  }}
                  href="#contact"
                  className="nav-link contact"
                >
                  Contact
                </a>
              </div>
              <div id="resume-button-1">
                <button
                  className="nav-link resume"
                  onClick={() => {
                    const url =
                      "https://drive.google.com/file/d/1Hsmec9IAa6QAOYjHD7jLAcAx59sGopoC/view?usp=sharing";
                    const download =
                      "https://drive.google.com/uc?export=download&id=1Hsmec9IAa6QAOYjHD7jLAcAx59sGopoC";
                    window.open(url);
                    window.location.href = download;
                  }}
                >
                  Resume
                </button>
              </div>
            </nav>
          ) : (
            <></>
          )}

          <hr />
        </div>
      </div>
    </>
  );
};

export default Navbar;
