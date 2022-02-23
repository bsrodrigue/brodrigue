import Image from "next/image";
import style from "./style.module.css";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { DiDjango, DiReact } from "react-icons/di";

import { PortfolioProject } from "../../interfaces";

const DjangoProjectLogos: React.FC = () => {
  return (
    <div className="icon-row">
      <DiDjango />
    </div>
  );
};

const ReactProjectLogos: React.FC = () => {
  return (
    <div className="icon-row">
      <DiReact />
    </div>
  );
};

const VanillaProjectLogos: React.FC = () => {
  return (
    <div className="icon-row">
      <IoLogoHtml5 />
      <IoLogoCss3 />
      <IoLogoJavascript />
    </div>
  );
};

interface Props {
  project: PortfolioProject;
}
const ProjectCard: React.FC<Props> = (props: Props) => {
  const { project } = props;
  const { title, description, cover, link, stack } = project;
  return (
    <div className={style.project_card}>
      <div className={style.project_overlay}>
        <p className={style.project_title}>{title}</p>
        <p className={style.project_description}>{description}</p>
        {stack === 'vanilla' && <VanillaProjectLogos />}
        {stack === 'react' && <ReactProjectLogos />}
        {stack === 'fullstack' && <DjangoProjectLogos />}
        <a className={`${style.project_open} fill-button`} href={link} target="_blank" rel="noreferrer">
          Check Project
        </a>
      </div>
      <Image className={style.project_img} src={cover} alt="project-cover" />
    </div>
  );
};

export default ProjectCard;
