import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import settings from "../../settings";
import Section from "../Section";


const links = settings.navbar_links;

const Header: React.FC = () => {
    return (
        <footer>
            <Section>
                <h1 id="social">Thanks for visiting!</h1>
                <small>Follow me on social media:</small>
                <div className="social-links">
                    <Link passHref href="https://www.linkedin.com/in/rachid-rodrigue-badini-688a92186/">
                        <BsLinkedin />
                    </Link>
                    <Link passHref href="https://web.facebook.com/profile.php?id=100074024144935">
                        <BsFacebook />
                    </Link>
                    <Link passHref href="https://www.instagram.com/halloweeeeb/">
                        <BsInstagram />
                    </Link>
                </div>
                <p>© 2020-2021 b-rodrigue.com · All Rights Reserved </p>
            </Section>
        </footer>
    );
};

export default Header;
