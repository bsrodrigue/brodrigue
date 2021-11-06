import React from "react";
import Link from "next/link";
import {
  BsEmojiSmile,
  BsLinkedin,
  BsFacebook,
  BsInstagram,
  BsGithub,
} from "react-icons/bs";
import ProfilePicture from "../components/ProfilePicture";
import Welcome from "../components/Welcome";
import Section from "../components/Section";
import Portfolio from "../components/Portfolio";
import ServiceCard from "../components/ServiceCard";
import { Service } from "../interfaces";

import axios from "axios";

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

      <Section background="bg-white" title="">
        <h1 id="services">Vanilla Projects</h1>
        <Portfolio />
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
        <form id="contact-form" name="contact" method="POST" data-netlify="true">
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

      <footer>
        <Section>
          <h1 id="social">Thanks for visiting!</h1>
          <small>Follow me on social media:</small>
          <div className="social-links">
            <Link href="https://www.linkedin.com/in/rachid-rodrigue-badini-688a92186/">
              <BsLinkedin />
            </Link>
            <Link href="https://web.facebook.com/profile.php?id=100074024144935">
              <BsFacebook />
            </Link>
            <Link href="https://www.instagram.com/halloweeeeb/">
              <BsInstagram />
            </Link>
          </div>
          <p>© 2020-2021 b-rodrigue.com · All Rights Reserved </p>
        </Section>
      </footer>

      <a href="#top" className="back-to-top material-shadow">
        Back to top
      </a>
    </>
  );
}
