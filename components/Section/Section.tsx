import style from "./style.module.css";

interface Props {
  id?: string;
  title?: string;
  background?: string;
  description?: string;
  children?: any;
}
const Section: React.FC<Props> = (props: Props) => {
  const { id, title, description, background } = props;
  return (
    <section id={id} className={background}>
      <div className="wrapper">
        <h1 className={style.title}>{title}</h1>
        <p className={style.description}>{description || ""}</p>
        <div className="section-content">{props.children}</div>
      </div>
    </section>
  );
};

export default Section;
