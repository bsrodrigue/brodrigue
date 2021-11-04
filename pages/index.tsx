import ProfilePicture from "../components/ProfilePicture";
import Welcome from "../components/Welcome";
import ProjectCard from "../components/ProjectCard";

import settings from "../settings";
const { portfolioProjects } = settings.portfolioProjects;

export default function Home() {
  return (
    <>
      <div className="wrapper">
        <div className="center">
          <ProfilePicture />
        </div>
        <Welcome />
      </div>
      <div>
      </div>
    </>
  );
}
