import { PortfolioProject, Service } from "./interfaces";
const services: Service[] = [

  {
    icon: "react",
    title: "Développement Frontend React",
    description:
      "Permettez-moi d'utiliser l'un des frameworks les plus populaires et efficaces pour concevoir vos interfaces utilisateurs.",
  },

  {
    icon: "mobile",
    title: "Développement Mobile React Native",
    description:
      "Avec React Native, je peux rapidement vous développer une application mobile, utilisable à la fois sur Android et iOS",
  },

  {
    icon: "spring",
    title: "Développement Backend Spring Boot",
    description:
      "J'adore Spring Boot! C'est l'un des frameworks les plus appréciés pour développer des backends solides et efficaces",
  },

];

const portfolioProjects: PortfolioProject[] = [
  // Vanilla (HTML, CSS, Javascript)
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

  // React
  {
    cover: require("./public/images/projects/otapix.png"),
    title: "Otapix",
    description:
      "Ce jeu s'inpire du celebre 4 Images 1 Mot. Vous pouvez créer vos propres niveaux et les partager avec les autres joueurs.",
    link: "https://dev-otapix.netlify.app/",
    stack: "react",
  },
  {
    cover: require("./public/images/projects/pomodoomer.png"),
    title: "Pomodoomer",
    description:
      "Une simple application web pomodoro",
    link: "https://pomodoomer.netlify.app/",
    stack: "react",
  },
  {
    cover: require("./public/images/projects/brodrigue.png"),
    title: "BRodrigue",
    description:
      "Et oui! ce site fait parti de mes conceptions ;')",
    link: "https://b-rodrigue.com/",
    stack: "react",
  },

];

const navbar_links = [
  {
    title: "Accueil",
    to: "/",
  },
  {
    title: "Portfolio",
    to: "/portfolio",
  },
  {
    title: "Mes services",
    to: "/#services",
  },
  {
    title: "Contact",
    to: "/#contact",
  },
  {
    title: "Réseaux sociaux",
    to: "/#social",
  },
  {
    title: "Github",
    to: "https://github.com/bsrodrigue",
  },
];

const actuality = [
  "J'apprends le framework Java Spring Boot",
  "J'approfondis mes connaissances en programmation OOP",
  "Je lis 'The Psychology of Money' de MORGAN HOUSEL",
  "J'ameliore mon anglais",
  "Je travaille sur un nouveau projet personel",
  "Je profite de la vie.",
];

const settings = {
  portfolioProjects,
  services,
  navbar_links,
  actuality,
};

export default settings;
