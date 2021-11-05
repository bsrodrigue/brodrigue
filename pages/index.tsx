import ProfilePicture from "../components/ProfilePicture";
import Welcome from "../components/Welcome";
import Section from "../components/Section";
import Portfolio from "../components/Portfolio";

export default function Home() {
  return (
    <>
      <section className="">
        <div className="wrapper">
          <div className="center">
            <ProfilePicture />
          </div>
          <Welcome />
        </div>
      </section>

      <Section title="Portfolio" description="Here is a glimpse of my work">
        <Portfolio />
      </Section>
    </>
  );
}
