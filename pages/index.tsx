import React from "react";
import Link from "next/link";
import {
  BsEmojiSmile,
  BsLinkedin,
  BsFacebook,
  BsInstagram,
} from "react-icons/bs";
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

      <Section background="bg-white">
        <h1 id="my-actuality">Mon actualité</h1>
        <small>Dans cette section je décris en gros mes activités et projets du moment: </small>
        <ul>
          <li>Je suis étudiant en Master I de Management de Système d'Informations.</li>
          <li>Je travaille en tant que dévéloppeur web chez Nine7soft.</li>
          <li>J'apprends le langage de programmation C</li>
          <li>J'étudie la conception d'interpréteurs pour créer mon propre langage de programmation.</li>
          <li>J'approfondis mes connaissances en Linux.</li>
          <li>Je rassemble des idées pour la rédaction d'un éventuel roman.</li>
          <li>Je lis le manga 'Vagabond' (j'adore).</li>
          <li>Je profite de la vie.</li>
        </ul>
      </Section>



      <Section>
        <h1 id="services">My Services</h1>
        <small>Check out the different services I can provide you</small>
        <div className="x-flex">
          {services.map((service: Service, index: number) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Section>

      <Section id="contact" background="bg-white">
        <h1 id="services">Contact Me</h1>
        <small>
          Need my expertise for a project? Or do you just want to say hello?
          Email me! <BsEmojiSmile />
        </small>
        <form name="contact">
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
          <input
            type="submit"
            value="Send me a message"
          />
        </form>
      </Section>


      <a href="#top" className="back-to-top material-shadow">
        Back to top
      </a>
    </>
  );
}
