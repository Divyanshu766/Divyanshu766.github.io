const Contact = () => {
  return (
    <section id="contact">
      <div id="contactHeading">Contact</div>
      <div id="contact-details">
        <div className="personal-info">
          <ul>
            <li className="gmail">
              <img
                src="https://img.icons8.com/fluency/144/gmail-new.png"
                width="30"
                height="30"
              />{" "}
              <span>
                <a
                  href="https://mail.google.com/mail/u/0/?to=divyanshu76688@gmail.com&su=SUBJECT&body=BODY&fs=1&tf=cm"
                  target="_blank"
                  rel="noreferrer"
                  id="contact-email"
                >
                  Divyanshu76688@gmail.com
                </a>
              </span>
            </li>
            <li className="contact-footer">
              <img
                src="https://img.icons8.com/dusk/64/000000/phone-disconnected.png"
                width="30"
                height="30"
              />{" "}
              <span>
                <a
                  id="contact-phone"
                  href="https://mail.google.com/mail/u/0/?to=divyanshu76688@gmail.com&su=SUBJECT&body=BODY&fs=1&tf=cm"
                >
                  7668855882
                </a>
              </span>{" "}
            </li>
            <li className="home-footer">
              <img
                src="https://img.icons8.com/office/250/home--v1.png"
                width="30"
                height="30"
              />{" "}
              <span>
                <a href="#">Deheradun</a>
              </span>{" "}
            </li>
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
