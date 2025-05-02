import { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import useStyles from "./style";

const About = () => {
    const style = useStyles();
    const { t } = useTranslation();
    const sectionRef = useRef<HTMLElement | null>(null);
    const path = window.location.pathname;

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(style.animate);
                    } else {
                        entry.target.classList.remove(style.animate);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const currentSection = sectionRef.current;
        if (currentSection) {
            observer.observe(currentSection);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, [style.animate]);

    return (
        <section
            ref={sectionRef}
            className={`${style.about} ${path === "/about" ? `${style.margin}` : ""}`}
        >
            <h1>{t("Aboutus")}</h1>
            <p dangerouslySetInnerHTML={{ __html: t("AboutTxt") }}></p>

        </section>
    );
};

export default About;