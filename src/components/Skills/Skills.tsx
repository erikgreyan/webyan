import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import useStyles from "./style";
import html from "../../assets/img/html.jpg";
import css from "../../assets/img/css.jpg";
import scss from "../../assets/img/scss.jpg";
import javascript from "../../assets/img/javascript.jpg";
import typescript from "../../assets/img/typescript.jpg";
import ejs from "../../assets/img/ejs.jpg";
import node from "../../assets/img/node.jpg";
import express from "../../assets/img/express.jpg";
import mongodb from "../../assets/img/mongodb.jpg";
import mysql from "../../assets/img/mysql.jpg";
import postgressql from "../../assets/img/postgressql.jpg";
import typeorm from "../../assets/img/typeorm.jpg";
import git from "../../assets/img/git.jpg";
import swagger from "../../assets/img/swagger.jpg";
import postman from "../../assets/img/postman.jpg";
import { Skill } from "../../interfaces/interfaces";

const Skills = () => {
    const style = useStyles();
    const { t } = useTranslation();
    const textRef = useRef<HTMLDivElement>(null);
    const skillRefs = useRef<(HTMLDivElement | null)[]>([]);
    const path = window.location.pathname;

    const skills: Skill[] = [
        { id: 1, title: "HTML", image: html },
        { id: 2, title: "CSS", image: css },
        { id: 3, title: "Sass/Scss", image: scss },
        { id: 4, title: "JavaScript", image: javascript },
        { id: 5, title: "TypeScript", image: typescript },
        { id: 6, title: "EJS", image: ejs },
        { id: 7, title: "Node.js", image: node },
        { id: 8, title: "Express.js", image: express },
        { id: 9, title: "MongoDB", image: mongodb },
        { id: 10, title: "TypeORM", image: typeorm },
        { id: 11, title: "MySQL", image: mysql },
        { id: 12, title: "PostgreSQL", image: postgressql },
        { id: 13, title: "Git", image: git },
        { id: 14, title: "Swagger API", image: swagger },
        { id: 15, title: "Postman API", image: postman },
    ];

    const chunkArray = (array: Skill[], chunkSize: number): Skill[][] => {
        const result: Skill[][] = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize));
        }
        return result;
    };

    const skillChunks = chunkArray(skills, 4);

    useEffect(() => {
        const textObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(style.fadeIn);
                } else {
                    entry.target.classList.remove(style.fadeIn);
                }
            },
            { threshold: 0.1 }
        );

        const skillObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(style.slideUp);
                    } else {
                        entry.target.classList.remove(style.slideUp);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (textRef.current) {
            textObserver.observe(textRef.current);
        }

        skillRefs.current.forEach((ref) => {
            if (ref) {
                skillObserver.observe(ref);
            }
        });

        return () => {
            textObserver.disconnect();
            skillObserver.disconnect();
        };
    }, [style.fadeIn, style.slideUp]);

    return (
        <section className={`${style.skills} ${path === "/projects" ? `${style.margin}` : ""}`} >
            <h1>{t("Skills")}</h1>
            <div className={style.items}>
                <div className={style.txt} ref={textRef}>
                    <h2>{t("SkillsTitle")}</h2>
                    <p dangerouslySetInnerHTML={{ __html: t("SkillsTxt") }}></p>
                    <a href="/projects">{t("Projects")}</a>
                </div>

                <div>
                    {skillChunks.map((chunk, index) => (
                        <div key={index} className={style.row}>
                            {chunk.map((skill, idx) => (
                                <div
                                    key={skill.id}
                                    className={style.item}
                                    ref={(el) => {
                                        skillRefs.current[index * 4 + idx] = el;
                                    }}
                                >
                                    <img src={skill.image} alt={skill.title} />
                                    <p>{skill.title}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;