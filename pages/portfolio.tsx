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

const fullstackProjects = portfolioProjects.filter((project) => {
    return project.stack === 'fullstack';
})

const PortfolioPage: React.FC = () => {
    return (
        <>
            <Section background="bg-white" >
                <h1>Mon portfolio</h1>
                <small>En tant que développeur web fullstack, je me spécialise en Typescript et Python avec les framework React et Django.</small>
                <small>Voici certains de mes projets:</small>
            </Section>
            <Section background="bg-white">
                <Portfolio title="Projets Vanilla" 
                    description="Ce sont de simples pages avec l'intention de démontrer mes compétences en développement frontend."
                    projects={vanillaProjects} />
            </Section>

            <Section background="bg-white">
                <Portfolio title="Projets React"
                    description="Pour ces projets, j'ai voulu approfondir mes connaissances en React et comment organiser mon code source dessus."
                    projects={reactProjects} />
            </Section>

            <Section background="bg-white">
                <Portfolio title="Projets Fullstack"
                    description="Il s'agit là de projets plus complets avec le framework Django."
                    projects={fullstackProjects} />
            </Section>
        </>
    );
};

export default PortfolioPage;
