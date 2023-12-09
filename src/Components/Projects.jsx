import { useState } from "react";

const Projects = () => {
  const [data] = useState([
    {
      name: "Glossier",
      image: "https://i.ibb.co/pv229h0/Glossier.jpg",
      link: `https://6509a45460bc91008781faa8--incredible-baklava-73dc03.netlify.app/index.html`,
      description:
        "Glossier, a premier beauty products website, offers a curated selection of luxury beauty items that enhance your natural beauty, leaving you looking and feeling your best. Explore our collection for a transformative experience in skincare and makeup.",
      tech: [" HTML ", " CSS ", " JavaScript "],
      github: `https://github.com/Sushil1603/Project-Choice-Rice`,
      netlify: `https://6509a45460bc91008781faa8--incredible-baklava-73dc03.netlify.app/index.html`,
    },
    {
      name: "Big-Basket",
      image: "https://i.ibb.co/Zmfp0yd/bigbasket.jpg",
      link: `https://6509a45460bc91008781faa8--incredible-baklava-73dc03.netlify.app/index.html`,
      description:
        "Discover unbeatable deals on grocery products at BigBasket, your ultimate online platform for affordable shopping. Experience convenience and savings as you browse and purchase a wide range of grocery items at budget-friendly prices.",
      tech: [" HTML ", " CSS ", " JavaScript "],
      github: `https://github.com/AkshaykumarLilani/big-basket-clone`,
      netlify: `https://visionary-smakager-639150.netlify.app/`,
    },
    {
      name: "Wood Fans",
      image: "https://i.ibb.co/sC8NG2v/WoodFans.png",
      link: `https://6509a45460bc91008781faa8--incredible-baklava-73dc03.netlify.app/index.html`,
      description:
        "Step into Wood Fans, your foremost destination for premium and sustainable furniture solutions. Elevate your living spaces with our exquisite designs, creating havens of comfort and style that reflect your unique taste. ",
      tech: [" CSS ", " React ", "Firebase"],
      github: `https://github.com/1ashutoshverma/wood-fans`,
      netlify: `https://wood-fans-team.vercel.app/`,
    },
    {
      name: "Dummy Project",
      image: "https://i.ibb.co/pv229h0/Glossier.jpg",
      link: `https://6509a45460bc91008781faa8--incredible-baklava-73dc03.netlify.app/index.html`,
      description:
        "Step into Wood Fans, your foremost destination for premium and sustainable furniture solutions. Elevate your living spaces with our exquisite designs, creating havens of comfort and style that reflect your unique taste. ",
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
                <h4 className="project-title">
                  <span className="project-heading">Title :</span>{" "}
                  <span className="description">{element.name}</span>
                </h4>
                <h5 className="project-description">
                  <span className="project-heading">Description</span> :{" "}
                  <span className="description">{element.description}</span>
                </h5>
                <h5 className="project-tech-stack">
                  <span className="project-heading">Tech :</span>{" "}
                  <span className="description">{element.tech.join(", ")}</span>
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
