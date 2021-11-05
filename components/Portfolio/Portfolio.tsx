import { PortfolioProject } from "../../interfaces";
import ProjectCard from "../../components/ProjectCard";
import settings from "../../settings";
const { portfolioProjects } = settings;

const Portfolio: React.FC = () => {
  return (
    <div id="portfolio" className="grid">
      {portfolioProjects.map((project: PortfolioProject, index: number) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Portfolio;
