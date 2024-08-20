import { useState } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const [data] = useState([
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
    {
      Image: "https://img.icons8.com/color/250/amazon-web-services.png",
      name: "AWS",
    },
    {
      Image:"https://img.icons8.com/color/480/cloudflare.png",
      name:"Cloudflare"
    },
    {
      Image:"https://i0.wp.com/community.nodemailer.com/wp-content/uploads/2015/10/n2-2.png?fit=422%2C360&ssl=1",
      name:"Nodemailer"
    },{
      Image:"https://img.icons8.com/color/480/bullish.png",
      name:"SEO"
    }
  ]);

  return (
    <>
      <section id="skills">
        <div id="skill-heading">Skills</div>
        <div id="skillContainer">
          {data.map((element) => (
            <motion.div
              className="skills-card"
              key={element.name}
              whileHover={{ scale: 1.1, cursor: "pointer" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={element.Image}
                className="skills-card-img"
                alt={element.name}
              />
              <h4 className="skills-card-name">{element.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>
      <hr />
    </>
  );
};

export default Skills;
