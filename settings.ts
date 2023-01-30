import { PortfolioProject, Service } from "./interfaces";
const services: Service[] = [

  {
    icon: "react",
    title: "Dévéloppement Frontend",
    description:
      "Beaucoup de dévéloppeurs web négligent les compétences en implémentation d'interfaces pour les pages web. Confiez-moi ce travail.",
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
    title: "Mes projets",
    to: "/my-projects",
  },
  {
    title: "Github",
    to: "https://github.com/bsrodrigue",
  },
];

const actuality = [
  "Je suis étudiant en Master I de Management de Système d'Informations.",
  "Je travaille en tant que dévéloppeur web et mobile chez Nine7soft depuis plus d'un an maintenant.",
  "J'apprends le langage de programmation C.",
  "J'étudie la conception d'interpréteurs et de compilateurs en Java et C.",
  "J'apprends a faire la cuisine.",
  "Je cherche de nouveaux jeux marquants à essayer.",
  "Je profite de la vie.",
];

const settings = {
  portfolioProjects,
  services,
  navbar_links,
  actuality,
};

export default settings;
