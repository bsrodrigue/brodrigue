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
                <Portfolio
                    title="Vanilla Projects"
                    description="This is the entrypoint of my career as a developer, I started out building a solid foundation of basic frontend technologies used on the web.
                    I quickly absorbed documentation about HTML, CSS and Javascript and tried to apply what I learned by building simple, but beautiful static web pages.
                    All of the projects here are personal and not related to any employer or client.
                    "
                    projects={vanillaProjects} />
            </Section>

            <Section background="bg-white">
                <Portfolio
                    title="React & Next.js Projects"
                    description="This is where the real fun actually starts. I deeply learned the workings of the famous React library and started building more complex projects.
                    This is what got me hired and got me started as a Frontend developer. Very soon I picked up the excellent React Meta Framework called Next.js! I've already built
                    impressive projects with it."
                    projects={reactProjects} />
            </Section>

            <Section background="bg-white" >
                <Portfolio
                    title="React Native Mobile Projects"
                    description="After working a lot with web technologies, I wished to become a mobile developer. React Native was the perfect choice for me and my employers. I have worked on complex enough UI screens and components and leverage the powerful Expo tool to streamline my app development process."
                    projects={reactNativeProjects} />
            </Section>

            <Section background="bg-white" >
                <Portfolio
                    title="C/C++ Projects"
                    description="As a developer I am conviced that in the long run, those who have a solid foundation of the inner workings of their tools and computer science will have more exciting opportunities, also, I was always passionate by learning how things work under the hood. 
                    I just do not wish to be a simple user of higher level tools, I want to contribute to the industry and have the freedom of choice to build my own tools when needed. Therefore I am learning more complex topics and building tools for my own curiosity and use.
                    "
                    projects={cProjects} />
            </Section>
        </>
    );
};

export default PortfolioPage;
