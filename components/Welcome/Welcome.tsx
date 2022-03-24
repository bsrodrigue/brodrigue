import style from "./style.module.css";

const Welcome: React.FC = () => {
  return (
    <div className={style.welcome}>
      <h1>
        {" "}
        <span className="primary-bg">BADINI</span> Rachid Rodrigue
      </h1>
      <p>
        Salut et bienvenue sur mon site! Je me présente, je réponds au nom de BADINI Rachid Rodrigue. J'ai 23 ans et je
        vis au Burkina Faso. Je suis dévéloppeur web fullstack mais je suis également passionné par d'autres domaines de
        la programmation. Mes plus grandes passions sont la lecture, les jeux vidéos, apprendre de nouvelles technologies
        et découvrir comment les choses fonctionnent.
      </p>
    </div>
  );
};

export default Welcome;
