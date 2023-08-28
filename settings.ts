import { PortfolioProject, Service } from "./interfaces";
const services: Service[] = [

  {
    icon: "react",
    title: "Next.js & React Frontend Development",
    description:
      "I have a solid foundation in React.js and can help you build nice looking websites. No matter how challenging your UI, just trust me.",
  },

  {
    icon: "mobile",
    title: "React Native Mobile Development",
    description:
      "With this awesome tool, I can build for you beautiful mobile apps with crisp UI, very quickly and so, with limited cost.",
  },

  {
    icon: "nest",
    title: "Typescript Nest.js Backend Development",
    description:
      "Nest.js became my backend framework of choice for my projects. Whether you want a REST or GraphQL API, I can build one for you.",
  },

];

const portfolioProjects: PortfolioProject[] = [
  // Vanilla (HTML, CSS, Javascript)
  {
    cover: require("./public/images/projects/afrosound.webp"),
    title: "AfroSound",
    description:
      "I built this single page in vanilla html, some bootstrap and javascript to get a better grasp of the base web technologies. I believe this was the foundation of my current frontend skills.",
    link: "https://badini-afrosound.netlify.app/",
    stack: "vanilla",
  },
  {
    cover: require("./public/images/projects/hiredev.webp"),
    title: "Hire A Dev",
    description:
      "After building Afrosound, I wanted some new challenge by building a better looking static website. It led to this fun project where I built a nice looking page with bootstrap and jquery.",
    link: "https://hire1dev.netlify.app/",
    stack: "vanilla",
  },
  {
    cover: require("./public/images/projects/gameyaar.webp"),
    title: "Gameyaar",
    description:
      "I am a huge fan of video games, and this is probably my favourite static web page. For this one, I wanted an even bigger challenge, and decided not to rely on bootstrap. I am proud of the result and even used a library called 'Tilt.js' to add an awesome tilting effect on hover.",
    link: "https://gameyaar.netlify.app/",
    stack: "vanilla",
  },


  // React
  {
    cover: require("./public/images/projects/otapix.png"),
    title: "Otapix",
    description:
      "This is an online game to play a variant of 4Images1Word, a famous mobile game where you have to guess the correct word by looking the four hint images. This one took me a lot of work and taught me the importance of clean code and planning. I use firebase as the backend and Next.js on the UI side",
    link: "https://dev-otapix.netlify.app/",
    stack: "react",
  },
  {
    cover: require("./public/images/projects/pomodoomer.png"),
    title: "Pomodoomer",
    description:
      "I sometimes use the Pomodoro technique while coding, and I wondered if I could build my own. It made me realize that working with timers can be tricky, but it turned out fine.",
    link: "https://pomodoomer.netlify.app/",
    stack: "react",
  },
  {
    cover: require("./public/images/projects/brodrigue.png"),
    title: "BRodrigue",
    description:
      "Some developers prefer using a prebuilt website or template for their portfolio. I prefer quality handmade goods with ❤️",
    link: "https://b-rodrigue.com/",
    stack: "react",
  },
  {
    cover: require("./public/images/projects/gamosyaar.png"),
    title: "Gamos Yaar",
    description:
      "A fun little project: A car searching web application leveraging a complete public car API. It is built using Next.js 13 and Tailwind",
    link: "https://gamosyaar.netlify.app/",
    stack: "react",
  },
  {
    cover: require("./public/images/projects/gandyam.png"),
    title: "Gandyam Pay",
    description:
      "This is a website I've built for an employer at Gandyam Ligdi, a fintech company based in Burkina Faso. They wanted a nice looking website for their latest money transfer mobile application. I built it with React and Material UI along with Framer Motion for animations.",
    link: "https://gandyampay.netlify.app/",
    stack: "react",
  },
  {
    cover: require("./public/images/projects/dyswis.png"),
    title: "Dyswis Web",
    description:
      "DYSWIS (Do You See What I See) was my first projects at N7-Studio, a canadian software company. The crux of my work was to implement the UI of the registration pages, integrate a Stripe payment process and a customer dashboard to manage their subscriptions",
    link: "https://dyswis.tv/en/dyswis-2/",
    stack: "react",
  },


  // React Native
  {
    cover: require("./public/images/projects/dyswis-mobile.png"),
    title: "Dyswis Mobile",
    description:
      "This is the mobile version of the Dyswis platform I worked on during my days at N7-Studio. It was a very interesting project and we leveraged Expo to make the development process faster. I learned about GraphQL and NX monorepos",
    link: "https://play.google.com/store/apps/details?id=tv.dyswis.dyswis&hl=fr",
    stack: "react-native",
  },
  {
    cover: require("./public/images/projects/bibliobooks-mobile.png"),
    title: "Bibliobooks Mobile",
    description:
      "Not only am I a technology enthusiast, but I am also an avid reader. I wanted to develop my own book writing and reading application. I took inspiration from Wattpad. Here again, I use Expo. My backend is written in Nest.js and file upload and storage is handled by firebase firestore.",
    link: "https://github.com/bsrodrigue/bibliobooks-mobile",
    stack: "react-native",
  },


  // C/c++ 
  {
    cover: require("./public/images/projects/beanlang.png"),
    title: "Beanlang",
    description:
      "I've always wondered how programming languages are made. I didn't shy away and took a deep plunge in the compiler and interpreter design world. It really changed my perspective about programming and motivated me to learn even more. Here is a simple interpreter written in C",
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
  "I deepen my knowledge about React Native's internals",
  "I am building my own shell for fun: https://github.com/bsrodrigue/beanshell",
  "I currently work at Gandyam Ligdi and am building a mobile wallet in React Native",
  "I enjoy life",
];

const settings = {
  portfolioProjects,
  services,
  navbar_links,
  actuality,
};

export default settings;
