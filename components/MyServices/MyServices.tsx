import React from "react";
import { Service } from "../../interfaces";
import settings from "../../settings";
import Section from "../Section";
import ServiceCard from "../ServiceCard";

const services = settings.services;

const MyService: React.FC = () => {
    return (
        <Section>
            <h1 id="services">My services</h1>
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
    );
};

export default MyService;
