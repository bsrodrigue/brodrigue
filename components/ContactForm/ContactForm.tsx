import React from "react";
import {
    BsEmojiSmile
} from "react-icons/bs";
import Section from "../Section";


const ContactForm: React.FC = () => {
    return (

      <Section id="contact" background="bg-white">
        <h1 id="services">Contactez-moi <BsEmojiSmile /> </h1>
        <form name="contact">
          <div className="input-container">
            <label htmlFor="name">Nom complet</label>
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
              cols={30}
              rows={10}
              required
            ></textarea>
          </div>
          <input
            type="submit"
            style={{ fontSize: 20 }}
            value="Envoyer le message"
          />
        </form>
      </Section>
    );
};

export default ContactForm;
