import { useRef, useEffect } from "react";
import useStyles from "./style";
import img from "../../assets/img/404.jpg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NotFound = () => {
    const style = useStyles();
    const { t } = useTranslation();
    const notFoundRef = useRef<HTMLDivElement>(null);
    const lang = localStorage.getItem("lang");
    if (lang) {
        document.body.classList.add(lang);
    }
    useEffect(() => {
        document.body.classList.add(localStorage.getItem("lang") || "hy");
        return () => {
            document.body.classList.remove(localStorage.getItem("lang") || "hy");
        };
    }, []);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(style.fadeIn);
                    } else {
                        entry.target.classList.remove(style.fadeIn);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const currentNotFound = notFoundRef.current;
        if (currentNotFound) {
            observer.observe(currentNotFound);
        }

        return () => {
            if (currentNotFound) {
                observer.unobserve(currentNotFound);
            }
        };
    }, [style.fadeIn]);

    return (
        <div className={`${style.notfound}`} ref={notFoundRef}>
            <img src={img} alt="Not Found | 404" />
            <Link to="/">{t("NotFound")}</Link>
        </div>
    );
};

export default NotFound;