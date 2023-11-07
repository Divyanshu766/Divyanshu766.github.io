import { useState } from "react";
const Skills = () => {
  const [data, setData] = useState([
    {
      Image: `Skills/logo-html5.svg`,
      name: "HTML",
    },
    {
      Image: `/Skills/logo-css3.svg`,
      name: "CSS",
    },
    {
      Image: `/Skills/logo-nodejs.svg`,
      name: "JS",
    },
    {
      Image: "/Skills/logo-react.svg",
      name: "React",
    },
    {
      Image: "/Skills//121152.png",
      name: "Java",
    },
  ]);
  return (
    <>
      <section id="skills">
        <div id="skill-heading">Skills</div>
        <div id="skillContainer">
          {data.map((element) => {
            return (
              <div key={element.name}>
                <img src={element.Image} className="skills-card-img" />
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
