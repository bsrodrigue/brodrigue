import Link from "next/link";
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import settings from "../../settings";
import Section from "../Section";


const links = settings.navbar_links;

const Header: React.FC = () => {
    return (
        <footer>
            <Section>
                <h1 id="social">Merci pour la visite!</h1>
                <small>Suivez-moi sur les réseaux sociaux</small>
                <div className="social-links">
                    <Link passHref href="https://www.linkedin.com/in/rachid-rodrigue-badini-688a92186/">
                        <BsLinkedin />
                    </Link>
                    <Link passHref href="https://github.com/bsrodrigue">
                        <BsGithub />
                    </Link>
                </div>
                <p>© 2021-2023 b-rodrigue.com · Tous droits réservés </p>
            </Section>
        </footer>
    );
};

export default Header;
