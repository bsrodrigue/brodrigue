
import React from "react";
import {
    BsEmojiSmile
} from "react-icons/bs";
import settings from "../../settings";
import Section from "../Section";


const links = settings.navbar_links;

const ContactForm: React.FC = () => {
    return (

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
    );
};

export default ContactForm;
