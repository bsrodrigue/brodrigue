import { PortfolioProject, Service } from "./interfaces";
const services: Service[] = [

  {
    icon: "react",
    title: "Next.js & React Frontend Development",
    description:
      "Permettez-moi d'utiliser l'un des frameworks les plus populaires et efficaces pour concevoir vos interfaces utilisateurs.",
  },

  {
    icon: "mobile",
    title: "React Native Mobile Development",
    description:
      "Avec React Native, je peux rapidement vous développer une application mobile, utilisable à la fois sur Android et iOS",
  },

  {
    icon: "nest",
    title: "Typescript Nest.js Backend Development",
    description:
      "Flutter est rapidement devenu un framework très appréciés auprès des développeurs, et ce pour d'excellentes raisons. Laissez-moi donner vie à vos plus gros projets mobiles avec Flutter",
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
  {
    cover: require("./public/images/projects/gamosyaar.png"),
    title: "Gamos Yaar",
    description:
      "J'ai réalisé ce site pour l'entreprise Gandyam Ligdi",
    link: "https://gamosyaar.netlify.app/",
    stack: "react",
  },
  {
    cover: require("./public/images/projects/gandyam.png"),
    title: "Gandyam Pay",
    description:
      "J'ai réalisé ce site pour l'entreprise Gandyam Ligdi",
    link: "https://gandyampay.netlify.app/",
    stack: "react",
  },
  {
    cover: require("./public/images/projects/dyswis.png"),
    title: "Dyswis Web",
    description:
      "J'ai réalisé ce site pour l'entreprise Gandyam Ligdi",
    link: "https://dyswis.tv/en/dyswis-2/",
    stack: "react",
  },

  // React Native
  {
    cover: require("./public/images/projects/dyswis-mobile.png"),
    title: "Dyswis Mobile",
    description:
      "J'ai réalisé ce site pour l'entreprise Gandyam Ligdi",
    link: "https://play.google.com/store/apps/details?id=tv.dyswis.dyswis&hl=fr",
    stack: "react-native",
  },
  {
    cover: require("./public/images/projects/bibliobooks-mobile.png"),
    title: "Bibliobooks Mobile",
    description:
      "This is one of my favourite personal projects with React Native and Expo",
    link: "https://github.com/bsrodrigue/bibliobooks-mobile",
    stack: "react-native",
  },

  // C/c++ 
  {
    cover: require("./public/images/projects/beanlang.png"),
    title: "Beanlang",
    description:
      "J'ai réalisé ce site pour l'entreprise Gandyam Ligdi",
    link: "https://github.com/bsrodrigue/beanlang",
    stack: "c",
  },
];

const navbar_links = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Portfolio",
    to: "/portfolio",
  },
  {
    title: "My services",
    to: "/#services",
  },
  {
    title: "Contact",
    to: "/#contact",
  },
  {
    title: "Social networks",
    to: "/#social",
  },
  {
    title: "Github",
    to: "https://github.com/bsrodrigue",
  },
];

const actuality = [
  "J'approfondis mes connaissances en Django",
  "J'approfondis mes connaissances en programmation OOP",
  "J'ameliore mon anglais oral",
  "Je travaille sur une nouvelle application mobile en React Native",
  "Je profite de la vie.",
];

const settings = {
  portfolioProjects,
  services,
  navbar_links,
  actuality,
};

export default settings;
