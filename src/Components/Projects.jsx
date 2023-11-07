import { useState } from "react";

const Projects = () => {
  const [data, setData] = useState([
    {
      name: "Glossier",
      image: "/Projects/Glossier.jpg",
      link: `https://6509a45460bc91008781faa8--incredible-baklava-73dc03.netlify.app/index.html`,
      description: "Ecommerce Website, where you can buy diff things",
      tech: [" HTML ", " CSS ", " JavaScript "],
      github: `https://github.com/Sushil1603/Project-Choice-Rice`,
      netlify: `https://6509a45460bc91008781faa8--incredible-baklava-73dc03.netlify.app/index.html`,
    },
    {
      name: "Big-Basket",
      image: "/Projects/Glossier.jpg",
      link: `https://6509a45460bc91008781faa8--incredible-baklava-73dc03.netlify.app/index.html`,
      description: "Ecommerce Website, where you can buy diff things",
      tech: [" HTML ", " CSS ", " JavaScript "],
      github: `https://github.com/Sushil1603/Project-Choice-Rice`,
      netlify: `https://6509a45460bc91008781faa8--incredible-baklava-73dc03.netlify.app/index.html`,
    },
    {
      name: "OminiFood",
      image: "/Projects/Glossier.jpg",
      link: `https://6509a45460bc91008781faa8--incredible-baklava-73dc03.netlify.app/index.html`,
      description: "Ecommerce Website, where you can buy diff things",
      tech: [" HTML ", " CSS ", " JavaScript "],
      github: `https://github.com/Sushil1603/Project-Choice-Rice`,
      netlify: `https://6509a45460bc91008781faa8--incredible-baklava-73dc03.netlify.app/index.html`,
    },
    {
      name: "Calculator",
      image: "/Projects/Glossier.jpg",
      link: `https://6509a45460bc91008781faa8--incredible-baklava-73dc03.netlify.app/index.html`,
      description: "Ecommerce Website, where you can buy diff things",
      tech: [" HTML ", " CSS ", " JavaScript "],
      github: `https://github.com/Sushil1603/Project-Choice-Rice`,
      netlify: `https://6509a45460bc91008781faa8--incredible-baklava-73dc03.netlify.app/index.html`,
    },
  ]);
  return (
    <>
      <section id="projects">
        <div id="projectCard">Projects</div>
        <div id="projectContainer">
          {data.map((element) => {
            return (
              <div key={element.name} className="project-card">
                <img src={element.image} />
                <h4 className="project-title">Title : {element.name}</h4>
                <h5 className="project-description">
                  Description : {element.description}
                </h5>
                <h5 className="project-tech-stack">
                  Tech : {element.tech.join(", ")}
                </h5>

                <div className="links-buttons">
                  <a
                    href={element.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-github-link"
                  >
                    Github
                  </a>

                  <a
                    href={element.netlify}
                    target="_blank"
                    rel="noreferrer"
                    className="project-deployed-link"
                  >
                    Netlify
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Projects;
