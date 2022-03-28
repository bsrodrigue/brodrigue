import Image from "next/image";
import style from "./style.module.css";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { DiDjango, DiReact } from "react-icons/di";

import { ContentInformation, PortfolioProject } from "../../interfaces";

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
  content: ContentInformation;
}
const ContentCard: React.FC<Props> = (props: Props) => {
  const { content } = props;
  const { title, description, cover, link, stack } = content;
  return (
    <div className={style.content_card}>
      <div className={style.content_overlay}>
        <p className={style.content_title}>{title}</p>
        <p className={style.content_description}>{description}</p>
        {stack === 'vanilla' && <VanillaProjectLogos />}
        {stack === 'react' && <ReactProjectLogos />}
        {stack === 'fullstack' && <DjangoProjectLogos />}
        <a className={`${style.content_open} fill-button`} href={link} target="_blank" rel="noreferrer">Découvrir</a>
      </div>
      <Image className={style.content_img} src={cover} layout='fill' alt="project-cover" />
    </div>
  );
};

export default ContentCard;
