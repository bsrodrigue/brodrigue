import ProfilePicture from "../components/ProfilePicture";
import Welcome from "../components/Welcome";
import Section from "../components/Section";
import Portfolio from "../components/Portfolio";
import ServiceCard from "../components/ServiceCard";
import { Service } from "../interfaces";

import settings from "../settings";
const { services } = settings;

export default function Home() {
  return (
    <>
      <Section title="">
        <div className="center">
          <ProfilePicture />
        </div>
        <Welcome />
      </Section>

      <Section
        background="bg-white"
        title="Vanilla Projects"
        description="Here are some of my frontend vanilla projects. I just used plain HTML, CSS and Javascript."
      >
        <Portfolio />
      </Section>

      <Section>
        <h1>My Services</h1>
        <div className="x-flex">
          {services.map((service: Service, index: number) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
