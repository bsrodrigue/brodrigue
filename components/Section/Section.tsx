import style from "./style.module.css";

interface Props {
  title: string;
  description?: string;
  children?: any;
}
const Section: React.FC<Props> = (props: Props) => {
  const { title, description } = props;
  return (
    <section className="simple-section">
      <div className="wrapper">
        <h1 className={style.title}>{title}</h1>
        <p className={style.description}>{description || ""}</p>
        <div className="section-content">{props.children}</div>
      </div>
    </section>
  );
};

export default Section;
