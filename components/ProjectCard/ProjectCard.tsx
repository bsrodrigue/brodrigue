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
    <div className="project-card">
      <div className="project-overlay">
        <p className="project-title">{title}</p>
        <p className="project-description">{description}</p>
        <div className="">
          <FontAwesomeIcon icon="html5" size="sm" />
          <FontAwesomeIcon icon="css3" size="sm" />
          <FontAwesomeIcon icon="js" size="sm" />
        </div>
        <a className="project-open fill-button" href={link}>
          Check Project
        </a>
      </div>
      <Image className="project-Image" src={cover} alt="project-cover" />
    </div>
  );
};

export default ProjectCard;
