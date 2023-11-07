import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div id="contactHeading">Contact</div>
      <div id="contact-details">
        <div className="personal-info">
          <ul>
            <li>Email : divyanshu76688@gmail.com</li>
            <li>Mobile : 7668855882</li>
            <li>Residence : Ranipokhari - Dehradun</li>
          </ul>
        </div>

        <div className="personal-links">
          <ul>
            <li>
              {" "}
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
            </li>
            <li>
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
            </li>
            <li>
              {" "}
              <a href="#">
                <img
                  src="https://i.ibb.co/qg3Gh7c/icons8-instagram-30.png"
                  alt="instagram"
                  target="_blank"
                />
              </a>
            </li>
            <li>
              {" "}
              <a href="#">
                <img
                  src="https://i.ibb.co/ph1stHw/icons8-twitter-circled-30.png"
                  alt="twitter"
                  target="_blank"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
