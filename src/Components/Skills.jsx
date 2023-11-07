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
  ]);
  return (
    <>
      <section id="skills" className="skills-card">
        <div id="skill-heading">Skills</div>
        <div id="skillContainer">
          {data.map((element) => {
            return (
              <div key={element.name}>
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
