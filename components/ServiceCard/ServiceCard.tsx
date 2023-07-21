import React from "react";
import { SiFlutter, SiNextdotjs, SiReact, SiSpringboot } from "react-icons/si";
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
          {icon === "flutter" && <SiFlutter />}
        </div>
        <p className="card-title">{title}</p>
      </div>

      <div className="card-body">
        <p className="card-description">{description}</p>
      </div>

      <div className="card-footer">
        <a className="card-link" href="#contact">Contactez-moi</a>
      </div>
    </div>
  );
};

export default ServiceCard;
