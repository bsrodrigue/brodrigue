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
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "3em" }}>{title}</h1>
      <h3 style={{ opacity: 0.5 }}>{description}</h3>
      <div id="portfolio" className="grid">
        {projects.map((project: PortfolioProject, index: number) => (
          <ContentCard key={index} content={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
