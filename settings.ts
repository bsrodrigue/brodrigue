import { PortfolioProject, Service } from "./interfaces";
const services: Service[] = [
  {
    icon: "django",
    title: "Fullstack Development",
    description:
      "Most serious businesses need a clean and beautiful web site. I can build you one with Django.",
  },
  {
    icon: "react",
    title: "Frontend Development",
    description:
      "Need a frontend for your project? Do not worry, I will make you a beautiful and elegant website with React or Vanilla technologies.",
  },
  {
    icon: "flutter",
    title: "Mobile Development",
    description:
      "I can build for you a nice looking mobile application for your business with Flutter and Dart.",
  },
];

const portfolioProjects: PortfolioProject[] = [
  {
    cover: require("./public/images/projects/afrosound.webp"),
    title: "AfroSound",
    description:
      "Une page d'accueil pour une plateforme fictive de streaming et de téléchargement de musique africaine.",
    link: "https://badini-afrosound.netlify.app/",
    stack: "vanilla",
  },
  {
    cover: require("./public/images/projects/hiredev.webp"),
    title: "Hire A Dev",
    description:
      "Une page d'accueil pour une plateforme fictive de publications d'offres et de demandes d'emploi pour développeurs.",
    link: "https://hire1dev.netlify.app/",
    stack: "vanilla",
  },
  {
    cover: require("./public/images/projects/gameyaar.webp"),
    title: "Gameyaar",
    description:
      "Il s'agit d'un site web purement fictif de ventes de consoles de jeux. Je l'ai fait sans utiliser aucun framework css.",
    link: "https://gameyaar.netlify.app/",
    stack: "vanilla",
  },
  {
    cover: require("./public/images/projects/otapic.png"),
    title: "Otapic",
    description:
      "Ce jeu s'inpire du celebre 4 Images 1 Mot. Vous devez deviner le nom du personnage de Manga en vous guidant des quatre images.",
    link: "https://otapic.netlify.app/",
    stack: "react",
  },
  {
    cover: require("./public/images/projects/stalnov.png"),
    title: "Stallion Novels",
    description:
      "Stallion Novels est une plateforme de lecture, de redaction et de partage de romans en ligne.",
    link: "http://stalnov.click:8000/",
    stack: "fullstack",
  },
];

const settings = {
  portfolioProjects,
  services,
  navbar_links: [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "Portfolio",
      to: "/#portfolio",
    },
    {
      title: "My Services",
      to: "/#services",
    },
    {
      title: "Blog",
      to: "/blog",
    },
    {
      title: "Contact",
      to: "/#contact",
    },
    {
      title: "Social Network",
      to: "/#social",
    },
    {
      title: "Github",
      to: "https://github.com/bsrodrigue",
    },
  ],
};

export default settings;
