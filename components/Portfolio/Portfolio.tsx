import { PortfolioProject } from "../../interfaces";
import ProjectCard from "../../components/ProjectCard";

interface Props {
  title: string;
  projects: PortfolioProject[];
}

const Portfolio: React.FC<Props> = (props: Props) => {
  const { title, projects } = props;
  return (
    <>
      <h1 id="services">{title}</h1>
      <div id="portfolio" className="grid">
        {projects.map((project: PortfolioProject, index: number) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </>
  );
};

export default Portfolio;
