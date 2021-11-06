import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./style.module.css";

import { PortfolioProject } from "../../interfaces";

interface Props {
  project: PortfolioProject;
}
const ProjectCard: React.FC<Props> = (props: Props) => {
  const { project } = props;
  const { title, description, cover, link } = project;
  return (
    <div className={style.project_card}>
      <div className={style.project_overlay}>
        <p className={style.project_title}>{title}</p>
        <p className={style.project_description}>{description}</p>
        <div className="">
          <FontAwesomeIcon icon={["fas", "html5"]} color="black" />
          <FontAwesomeIcon icon="css3" size="sm" />
          <FontAwesomeIcon icon="js" size="sm" />
        </div>
        <a className={`${style.project_open} fill-button`} href={link}>
          Check Project
        </a>
      </div>
      <Image className={style.project_img} src={cover} alt="project-cover" />
    </div>
  );
};

export default ProjectCard;
