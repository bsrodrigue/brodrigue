import style from "./style.module.css";

const Welcome: React.FC = () => {
  return (
    <div className={style.welcome}>
      <h1>
        {" "}
        <span className="primary-bg">BADINI</span> Rachid Rodrigue
      </h1>
      <p style={{textAlign: "justify"}}>
        Bienvenue sur mon site professionel! Je réponds au nom de BADINI Rachid Rodrigue. 
        J'ai 25 ans et je suis un développeur fullstack, vivant actuellement au Burkina Faso.
        Mes outils de base sont React, React Native et Next.js
        Mais j'essaie de rester flexible en apprenant les concepts fondamentaux et en expérimentant avec d'autres technologies.
      </p>
    </div>
  );
};

export default Welcome;
