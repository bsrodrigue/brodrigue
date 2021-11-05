import { PortfolioProject, Service } from "./interfaces";

const services: Service[] = [
  {
    title: "Fullstack Developpement",
    description:
      "I will build you a complete website with Django. I can even build an API with a React frontend for you.",
  },
  {
    title: "Frontend Developpement",
    description:
      "Need a frontend for your project? Do not worry, I will make you a beautiful and elegant website with React.",
  },
  {
    title: "Mobile Developpement",
    description:
      "I can build for you a complete mobile application for your business.",
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
      title: "Personal Projects",
      to: "/personal-projects",
    },
    {
      title: "Blog",
      to: "/blog",
    },
    {
      title: "Contact",
      to: "/contact",
    },
    {
      title: "Resume",
      to: "/resume",
    },
  ],
};

export default settings;
