import { useState } from "react";

const Navbar = () => {
  return (
    <>
      <div>
        <div>
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
            <div>
              <button
                className="nav-link resume"
                id="resume-button-1"
                onClick={() => {
                  const url =
                    "https://drive.google.com/file/d/1GcI8icfrjd0ANwx_cVyWq1IKwv1gTM3U/view?usp=sharing";

                  window.open(url);
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
      </div>
    </>
  );
};

export default Navbar;
