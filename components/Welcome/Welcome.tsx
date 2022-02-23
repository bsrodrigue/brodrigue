import style from "./style.module.css";

const Welcome: React.FC = () => {
  return (
    <div className={style.welcome}>
      <h1>
        {" "}
        <span className="primary-bg">Fullstack</span> Web Developer
      </h1>
      <p>
        Hello! I am Rachid BADINI. I am a 23 years old Fullstack Web Developper.
        I specialize in <span style={{ color: "mediumturquoise" }}>React</span>{" "}
        and <span style={{ color: "mediumseagreen" }}>Django</span>, but I am
        also open to other technologies.
        When I am not building websites, I work on personal projects like mobile apps, command line tools, etc.
      </p>
    </div>
  );
};

export default Welcome;
