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
      <div id="top"></div>
      <Section title="">
        <div className="center">
          <ProfilePicture />
        </div>
        <Welcome />
      </Section>

      <Section background="bg-white" title="">
        <h1 id="services">Vanilla Projects</h1>
        <Portfolio />
      </Section>

      <Section>
        <h1 id="services">My Services</h1>
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

      <Section id="contact" background="bg-white">
        <h1 id="services">Contact Me</h1>
        <small>Want to get in touch with me? Send me an email!</small>
        <form id="contact-form" action="">
          <div className="input-container">
            <label htmlFor="name">Full Name </label>
            <input type="text" name="name" id="" required />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email </label>
            <input type="email" name="email" id="" required />
          </div>
          <div className="input-container">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id=""
              cols={30}
              rows={10}
              required
            ></textarea>
          </div>
          <input type="submit" value="Send me a message" />
        </form>
      </Section>

      <Section>
        <h1 id="social">Social Media</h1>
        <small>Follow me on social media!</small>
        <div className="x-flex"></div>
      </Section>

      <a href="#top" className="back-to-top material-shadow">
        Back to top
      </a>
    </>
  );
}
