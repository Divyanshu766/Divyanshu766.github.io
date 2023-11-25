import { useState } from "react";
const Skills = () => {
  const [data, setData] = useState([
    {
      Image: `https://img.icons8.com/fluency/250/html-5.png`,
      name: "HTML",
    },
    {
      Image: `https://img.icons8.com/color/250/css3.png`,
      name: "CSS",
    },
    {
      Image: `https://img.icons8.com/color/250/javascript--v1.png`,
      name: "JS",
    },
    {
      Image: "https://img.icons8.com/plasticine/250/react.png",
      name: "React",
    },
    {
      Image: "https://img.icons8.com/color/250/java-coffee-cup-logo--v1.png",
      name: "Java",
    },
    {
      Image: "https://img.icons8.com/fluency/250/node-js.png",
      name: "Node JS",
    },
    {
      Image: "https://img.icons8.com/nolan/250/mongo-db.png",
      name: "Mongo DB",
    },
    {
      Image: "https://img.icons8.com/office/250/express-js.png",
      name: "Express JS",
    },
    {
      Image: "https://img.icons8.com/color/250/redux.png",
      name: "Redux",
    },
    {
      Image: "https://img.icons8.com/color/250/python--v1.png",
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
