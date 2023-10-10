const project = document.getElementById("projectContainer");

const projects = [
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
];

projects.map((element) => {
  //Card element :-
  const card = document.createElement("div");
  card.classList.add("project-card");

  //image :-
  const image = document.createElement("img");
  image.src = element.image;

  //Title :-
  const title = document.createElement("h4");
  title.innerText = `Title : ${element.name}`;
  title.classList.add("project-title");

  //Description :-
  const Description = document.createElement("h5");
  Description.classList.add("project-description");
  Description.innerText = `Description : ${element.description} `;

  //Tech :-
  const tech = document.createElement("h5");
  tech.classList.add("project-tech-stack");
  tech.innerText = `Tech : ${element.tech}`;

  //button section :-
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add('links-buttons');

  //Links :-
  const github = document.createElement("a");
  github.innerText = "Github";
  github.href = element.github;
  github.classList.add("project-github-link");

  const netlify = document.createElement("a");
  netlify.innerText = "Netlify";
  netlify.href = element.netlify;
  netlify.classList.add("project-deployed-link");

  //Append :-
  buttonContainer.append(github, netlify);
  card.append(image, title, Description, tech, buttonContainer);
  project.append(card);
});
