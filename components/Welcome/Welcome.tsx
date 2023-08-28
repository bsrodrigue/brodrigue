import style from "./style.module.css";

const Welcome: React.FC = () => {
  return (
    <div className={style.welcome}>
      <h1>
        {" "}
        <span style={{ borderRadius: "0.2em" }} className="primary-bg">{">_"}</span>{" "}Badini Rachid Rodrigue
      </h1>
      <p style={{ textAlign: "center" }}>Fullstack <span className="primary">{"{"}Typescript{"}"}</span> developer</p>
    </div>
  );
};

export default Welcome;
