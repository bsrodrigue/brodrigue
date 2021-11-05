import React from "react";
import { Service } from "../../interfaces";

const ServiceCard: React.FC<Service> = (props: Service) => {
  const { title, description } = props;
  return (
    <div className="card">
      <div className="card-header">
        <p className="card-title">{title}</p>
      </div>

      <div className="card-body">
        <p className="card-description">{description}</p>
      </div>

      <div className="card-footer">
        <a className="card-link" href="">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
