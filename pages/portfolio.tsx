import React from "react";
import Portfolio from "../components/Portfolio";
import Section from "../components/Section";
import settings from "../settings";

const { portfolioProjects } = settings;

const vanillaProjects = portfolioProjects.filter((project) => {
    return project.stack === 'vanilla';
})

const reactProjects = portfolioProjects.filter((project) => {
    return project.stack === 'react';
})

const cProjects = portfolioProjects.filter((project) => {
    return project.stack === 'c';
})

const reactNativeProjects = portfolioProjects.filter((project) => {
    return project.stack === 'react-native';
})

const PortfolioPage: React.FC = () => {
    return (
        <>
            <Section background="bg-white" >
                <h1>My Portfolio</h1>
            </Section>

            <Section background="bg-white">
                <Portfolio title="Vanilla Projects" projects={vanillaProjects} />
            </Section>

            <Section background="bg-white">
                <Portfolio title="React & Next.js Projects" projects={reactProjects} />
            </Section>

            <Section background="bg-white" >
                <Portfolio title="React Native Mobile Projects" projects={reactNativeProjects} />
            </Section>

            <Section background="bg-white" >
                <Portfolio title="C/C++ Projects" projects={cProjects} />
            </Section>
        </>
    );
};

export default PortfolioPage;
