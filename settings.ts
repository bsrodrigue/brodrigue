import { PortfolioProject } from "./interfaces";

const portfolioProjects: PortfolioProject[] = [
  {
    cover: "",
    title: "AfroSound",
    description:
      "Une page d'accueil pour une plateforme fictive de streaming et de téléchargement de musique africaine.",
    link: "https://badini-afrosound.netlify.app/",
    stack: "vanilla",
  },
  {
    cover: "",
    title: "Hire A Dev",
    description:
      "Une page d'accueil pour une plateforme fictive de publications d'offres et de demandes d'emploi pour développeurs.",
    link: "https://hire1dev.netlify.app/",
    stack: "vanilla",
  },
  {
    cover: "",
    title: "Gameyaar",
    description:
      "Il s'agit d'un site web purement fictif de ventes de consoles de jeux. Je l'ai fait sans utiliser aucun framework css.",
    link: "https://gameyaar.netlify.app/",
    stack: "vanilla",
  },
];

const settings = {
  portfolioProjects,
  navbar_links: [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "Portfolio",
      to: "/portfolio",
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
