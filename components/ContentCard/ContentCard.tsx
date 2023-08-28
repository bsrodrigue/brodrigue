import Image from "next/image";
import style from "./style.module.css";

import { ContentInformation } from "../../interfaces";

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
        <a className={`${style.content_open} fill-button`} href={link} target="_blank" rel="noreferrer">
          Discover
        </a>
      </div>
      <Image className={style.content_img} src={cover} fill alt="project-cover" />
    </div>
  );
};

export default ContentCard;
