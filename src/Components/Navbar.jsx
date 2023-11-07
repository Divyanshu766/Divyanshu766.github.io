const Navbar = () => {
  return (
    <div>
      <div>
        <nav>
          <h1>- Divyanshu -</h1>
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
              onClick="Download()"
            >
              Resume
            </button>
          </div>
        </nav>
        <hr />
      </div>
    </div>
  );
};

export default Navbar;
