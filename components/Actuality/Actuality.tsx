import React from "react";
import settings from '../../settings';
import Section from "../Section";


const actuality = settings.actuality;

const Actuality: React.FC = () => {
    return (
        <Section background="bg-white">
            <h1 id="my-actuality">Mon actualité</h1>
            <small>Dans cette section je décris en gros mes activités et projets du moment: </small>
            <ul>
                {
                    actuality.map((entry: string, index: number) => {
                        return (<li key={index}>{entry}</li>);
                    })
                }
            </ul>
        </Section>
    );
};

export default Actuality;
