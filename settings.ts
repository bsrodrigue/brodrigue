import { PortfolioProject, Service } from "./interfaces";
const services: Service[] = [
  {
    icon: "django",
    title: "Dévéloppement Fullstack",
    description:
      "Vous avez besoin d'un site web élégant et complet? Laissez-moi faire avec l'aide de Django.",
  },
  {
    icon: "react",
    title: "Dévéloppement Frontend",
    description:
      "Beaucoup de dévéloppeurs web négligent les compétences en implémentation d'interfaces pour les pages web. Confiez-moi ce travail.",
  },
  // {
  //   icon: "react-native",
  //   title: "Mobile Development",
  //   description:
  //     "I can build for you a nice looking mobile application for your business with React Native.",
  // },
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
  {
    cover: require("./public/images/projects/stalnov.png"),
    title: "Stallion Novels",
    description:
      "Stallion Novels est une plateforme de lecture, de redaction et de partage de romans en ligne.",
    link: "http://stalnov.click:8000/",
    stack: "fullstack",
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
    title: "Blog",
    to: "/blog",
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
    title: "Mes revues",
    to: "/reviews",
  },
  {
    title: "Github",
    to: "https://github.com/bsrodrigue",
  },
];

const actuality = [
  "Je suis étudiant en Master I de Management de Système d'Informations.",
  "Je travaille en tant que dévéloppeur web chez Nine7soft.",
  "J'apprends le langage de programmation C",
  "J'étudie la conception d'interpréteurs pour créer mon propre langage de programmation.",
  "J'approfondis mes connaissances en Linux.",
  "Je rassemble des idées pour la rédaction d'un éventuel roman.",
  "Je lis le manga 'Vagabond' (j'adore).",
  "Je profite de la vie.",
];

const settings = {
  portfolioProjects,
  services,
  navbar_links,
  actuality,
};

export default settings;
