import React from "react";
import { SiNestjs, SiNextdotjs, SiReact, SiSpringboot } from "react-icons/si";
import { Service } from "../../interfaces";

const ServiceCard: React.FC<Service> = (props: Service) => {
  const { icon, title, description } = props;
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-icon">
          {icon === "spring" && <SiSpringboot />}
          {icon === "react" && <SiNextdotjs />}
          {icon === "mobile" && <SiReact />}
          {icon === "nest" && <SiNestjs />}
        </div>
        <p className="card-title">{title}</p>
      </div>

      <div className="card-body">
        <p className="card-description">{description}</p>
      </div>

      <div className="card-footer">
        <a className="card-link" href="#contact">Contact Me</a>
      </div>
    </div>
  );
};

export default ServiceCard;
