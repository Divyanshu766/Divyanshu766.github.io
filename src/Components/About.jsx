const About = () => {
  return (
    <>
      <section id="about" className="about section">
        <div id="intro">
          <div id="myImage">
            <img
              src="https://avatars.githubusercontent.com/u/144535826?v=4"
              alt="Me"
              className="home-img"
            />
          </div>
          <div id="data">
            <h1>About</h1>
            <div>
              <h3 id="user-detail-intro">
                Hey, I'm Divyanshu Rawat, and I'm learning to create cool stuff
                on the internet at <span>Masai School</span>. I'm really into
                tech and know my way around <span>MongoDB</span>,{" "}
                <span>Express.js</span>, <span>React</span>, and{" "}
                <span>Node.js</span>. I like keeping up with the latest tech
                trends because I want to use the coolest tools. Let's team up
                and make awesome things happen with code – making the internet
                more awesome !!! 💻✨
              </h3>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
};

export default About;
