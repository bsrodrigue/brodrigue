import React from "react";
import settings from '../../settings';
import Section from "../Section";
import style from "./style.module.css";


const actuality = settings.actuality;

const Actuality: React.FC = () => {
    return (
        <Section background="bg-white">
            <h1 id="my-actuality">Mon actualité</h1>
            <ul>
                {
                    actuality.map((entry: string, index: number) => {
                        return (<li className={style.actuality_item} key={index}>{entry}</li>);
                    })
                }
            </ul>
        </Section>
    );
};

export default Actuality;
