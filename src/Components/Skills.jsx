import { useState } from "react";
const Skills = () => {
  const [data, setData] = useState([
    {
      Image: `https://img.icons8.com/wired/250/html-5.png`,
      name: "HTML",
    },
    {
      Image: `https://img.icons8.com/wired/250/css3.png`,
      name: "CSS",
    },
    {
      Image: `https://img.icons8.com/wired/250/javascript-logo.png`,
      name: "JS",
    },
    {
      Image: "https://img.icons8.com/wired/250/react.png",
      name: "React",
    },
    {
      Image: "https://img.icons8.com/quill/250/java-coffee-cup-logo.png",
      name: "Java",
    },
    {
      Image: "https://img.icons8.com/windows/250/node-js.png",
      name: "Node JS",
    },
    {
      Image: "https://img.icons8.com/ios/250/database-options.png",
      name: "Mongo DB",
    },
    {
      Image: "https://img.icons8.com/ios/250/express-js.png",
      name: "Express JS",
    },
    {
      Image:
        "https://img.icons8.com/external-tal-revivo-bold-tal-revivo/250/external-redux-an-open-source-javascript-library-for-managing-application-state-logo-bold-tal-revivo.png",
      name: "Redux",
    },
    {
      Image: "https://img.icons8.com/carbon-copy/250/python.png",
      name: "Python",
    },
  ]);
  return (
    <>
      <section id="skills">
        <div id="skill-heading">Skills</div>
        <div id="skillContainer">
          {data.map((element) => {
            return (
              <div className="skills-card" key={element.name}>
                <img
                  src={element.Image}
                  className="skills-card-img"
                  width="140"
                  height="140"
                />
                <h4 className="skills-card-name">{element.name}</h4>
              </div>
            );
          })}
        </div>
      </section>
      <hr />
    </>
  );
};

export default Skills;
