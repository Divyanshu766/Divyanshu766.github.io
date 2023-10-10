const skill = document.getElementById("skillContainer");

const skills = [
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
];

skills.map((element) => {
  //Cars element :-
  const card = document.createElement("div");
  card.classList.add("skills-card");

  //Image Element :-
  const image = document.createElement("img");
  image.src = element.Image;
  image.classList.add("skills-card-img");

  //Name Element :-
  const name = document.createElement("h4");
  name.innerText = element.name;
  name.classList.add("skills-card-name");

  //Appending Value :-
  card.append(image, name);
  skill.append(card);
});
