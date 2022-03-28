import { PortfolioProject } from "../../interfaces";
import ContentCard from "../ContentCard";

interface Props {
  title: string;
  description?: string;
  projects: PortfolioProject[];
}

const Portfolio: React.FC<Props> = (props: Props) => {
  const { title, description, projects } = props;
  return (
    <>
      <h1>{title}</h1>
      {description && <small>{description}</small>}
      <div id="portfolio" className="grid">
        {projects.map((project: PortfolioProject, index: number) => (
          <ContentCard key={index} content={project} />
        ))}
      </div>
    </>
  );
};

export default Portfolio;
