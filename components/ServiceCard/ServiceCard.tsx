import React from "react";
import { DiDjango, DiReact } from "react-icons/di";
import { Service } from "../../interfaces";

const ServiceCard: React.FC<Service> = (props: Service) => {
  const { icon, title, description } = props;
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-icon">
          {icon === "django" && <DiDjango />}
          {icon === "react" && <DiReact />}
          {icon === "react-native" && <DiReact />}
        </div>
        <p className="card-title">{title}</p>
      </div>

      <div className="card-body">
        <p className="card-description">{description}</p>
      </div>

      <div className="card-footer">
        <a className="card-link" href="#contact">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
