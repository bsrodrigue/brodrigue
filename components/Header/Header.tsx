import React from "react";
import style from "./style.module.css";

import settings from "../../settings";

const links = settings.navbar_links;

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <div className="wrapper">
        <nav>
          {links.map((link: any, index: number) => (
            <a
              className={`${style.link} fill-button`}
              key={index}
              href={link.to}
            >
              {link.title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
