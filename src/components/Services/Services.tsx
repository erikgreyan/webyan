import { useTranslation } from "react-i18next";
import useStyles from "./style";
import { useRef, useEffect } from "react";

const Services = () => {
    const style = useStyles();
    const { t } = useTranslation();
    const servicesRef = useRef<HTMLDivElement | null>(null);
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const path = window.location.pathname;

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(style.animate);
                        entry.target.classList.remove(style.itemHidden);
                    } else {
                        entry.target.classList.remove(style.animate);
                        entry.target.classList.add(style.itemHidden);
                    }
                });
            },
            { threshold: 0.2 }
        );

        const items = servicesRef.current?.querySelectorAll(`.${style.item}`);
        items?.forEach((item) => observer.observe(item));

        const currentHeading = headingRef.current;
        if (currentHeading) {
            observer.observe(currentHeading);
        }

        return () => {
            items?.forEach((item) => observer.unobserve(item));
            if (currentHeading) {
                observer.unobserve(currentHeading);
            }
        };
    }, [style.animate, style.itemHidden, style.item]);

    const services = [
        { id: 1, title: t("ServiceTitle1"), description: t("ServiceTxt1") },
        { id: 2, title: t("ServiceTitle2"), description: t("ServiceTxt2") },
        { id: 3, title: t("ServiceTitle3"), description: t("ServiceTxt3") },
        { id: 4, title: t("ServiceTitle4"), description: t("ServiceTxt4") },
    ];

    return (
        <section ref={servicesRef} className={`${style.services} ${path === "/services" ? `${style.margin}` : ""}`}>
            <h1 ref={headingRef} className={style.itemHidden}>{t("Services")}</h1>
            <div className={style.items}>
                {services.map((service) => (
                    <div key={service.id} className={`${style.item} ${style.itemHidden}`}>
                        <h4>🤩 {service.title}</h4>
                        <div>
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;