import React from "react";
import greenParadise from "./projectImages/GreenParadise.png";
import woodFans from "./projectImages/WoodFans.png";
import bewakoof from "./projectImages/Bewakoof.png";
import myPortfolio from "./projectImages/myPortfolio.png";
import chatapp from "./projectImages/chatapp.png";
import "./Project.css";

const data = [
  {
    img: woodFans,
    projectTitle: "Wood Fans",
    techStack: ["React", "Redux Toolkit", "Google Auth", "CSS", "RazorPay"],
    description:
      " Welcome to Wood Fans, your premier destination for exquisite and sustainable furniture solutions that transform your living spaces into havens of comfort and style.",
    githubLink: "https://github.com/1ashutoshverma/wood-fans",
    appLink: "https://wood-fans.vercel.app/",
    // backendLink: "https://github.com/1ashutoshverma/wood-fans-backend"
  },
  {
    img: "https://i.ibb.co/bQB3bn0/Screenshot-2024-08-20-at-1-55-07-PM.png",
    projectTitle: "E-Comm",
    techStack: [
      "ReduxJS",
      "ChakraUI",
      "Node.js",
      "Express",
      "MongoDB",
      "TailwindCSS",
      "NodeMailer",
      "Cloudinary",
    ],
    description:
      "E-Comm is a full-featured e-commerce platform with email verification, profile picture upload, product purchase, and robust authentication.",
    githubLink: "https://github.com/DivyanshuRawatDev/ecomm-frontend",
    appLink: "https://ecomm-frontend-ecru.vercel.app/",
    // backendLink: "https://github.com/1ashutoshverma/chat-app-backend",
  },
  {
    img: "https://i.ibb.co/pv229h0/Glossier.jpg",
    projectTitle: "Glossier",
    techStack: ["HTML", "CSS", "JavaScript", "Firebase", "RazorPay"],
    description:
      "Glossier, a premier beauty products website, offers a curated selection of luxury beauty items that enhance your natural beauty, leaving you looking and feeling your best. Explore our collection for a transformative experience in skincare and makeup.",
    githubLink: "https://github.com/Sushil1603/Online-Beauty-Shop",
    appLink: "https://6509a45460bc91008781faa8--incredible-baklava-73dc03.netlify.app/index.html",
  },
  {
    img: "https://i.ibb.co/Zmfp0yd/bigbasket.jpg",
    projectTitle: "Big-Basket",
    techStack: ["HTML", "CSS", "JavaScript"],
    description:
      "Discover unbeatable deals on grocery products at BigBasket, your ultimate online platform for affordable shopping. Experience convenience and savings as you browse and purchase a wide range of grocery items at budget-friendly prices.",
    githubLink: "https://github.com/AkshaykumarLilani/big-basket-clone",
    appLink: "https://visionary-smakager-639150.netlify.app/",
  },
  // {
  //     img: myPortfolio,
  //     projectTitle: "My Portfolio",
  //     techStack: ["React", "CSS", "JavaScript"],
  //     description: "I am proud to present my personal portfolio website, built using React, a powerful JavaScript library for building user interfaces. This project reflects my skills, experiences, and the projects I've undertaken.",
  //     githubLink: "https://github.com/1ashutoshverma/1ashutoshverma.github.io",
  //     appLink: "https://1ashutoshverma.github.io/"
  // }
];

function Projects() {
  return (
    <div id="projects">
      <h1>Projects</h1>

      {data.map((e, index) => {
        return index % 2 == 0 ? (
          <div className="project-card proCard1" key={index}>
            <div className="projectImg">
              <img src={e.img} alt="" />
            </div>
            <div className="projectDetails">
              <h2 className="project-title">
                {index + 1 + ". " + e.projectTitle}
              </h2>
              <div className="project-tech-stack">
                {e.techStack.map((ele, ind) => {
                  return <span key={ind}>{ele}</span>;
                })}
              </div>
              <p className="project-description">{e.description}</p>
              <div
                className={
                  e.backendLink ? "projectButtons2" : "projectButtons1"
                }
              >
                <a
                  href={e.githubLink}
                  target="_blank"
                  className="project-github-link"
                >
                  {e.backendLink ? "Frontend Code" : "View Code"}
                </a>
                {e.backendLink ? (
                  <a
                    href={e.backendLink}
                    target="_blank"
                    className="project-github-link"
                  >
                    Backend Code
                  </a>
                ) : (
                  <></>
                )}
                <a
                  href={e.appLink}
                  target="_blank"
                  className="project-deployed-link"
                >
                  View Live App
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="project-card proCard2" key={index}>
            <div className="projectDetails">
              <h2 className="project-title">
                {index + 1 + ". " + e.projectTitle}
              </h2>
              <div className="project-tech-stack">
                {e.techStack.map((ele, ind) => {
                  return <span key={ind}>{ele}</span>;
                })}
              </div>
              <p className="project-description">{e.description}</p>
              <div
                className={
                  e.backendLink ? "projectButtons2" : "projectButtons1"
                }
              >
                <a
                  href={e.githubLink}
                  target="_blank"
                  className="project-github-link"
                >
                  {e.backendLink ? "Frontend Code" : "View Code"}
                </a>
                {e.backendLink ? (
                  <a
                    href={e.backendLink}
                    target="_blank"
                    className="project-github-link"
                  >
                    Backend Code
                  </a>
                ) : (
                  <></>
                )}
                <a
                  href={e.appLink}
                  target="_blank"
                  className="project-deployed-link"
                >
                  View Live App
                </a>
              </div>
            </div>
            <div className="projectImg">
              <img src={e.img} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
