import { useState, useEffect, useMemo } from "react";
import useStyles from "./style";
import am from "../../assets/img/am.jpg";
import ru from "../../assets/img/ru.jpg";
import en from "../../assets/img/en.jpg";
import favicon from "../../assets/img/favicon.ico";
import { useTranslation } from "react-i18next";
import i18n from "../../locales/lang";
import { NavLink } from "react-router-dom";

const languages = [
    { code: "hy", name: "Հայ", img: am },
    { code: "ru", name: "Рус", img: ru },
    { code: "en", name: "Eng", img: en }
];

const Nav = () => {
    const style = useStyles();
    const [isActiveMenu, setIsActiveMenu] = useState(false);
    const [activeLang, setActiveLang] = useState("hy");
    const { t } = useTranslation();
    document.title = t("Title");

    const changeLanguage = (lang: string) => {
        document.body.classList.remove(...languages.map(l => l.code));
        document.body.classList.add(lang);

        localStorage.setItem("lang", lang);
        i18n.changeLanguage(lang);
        setActiveLang(lang);
        document.documentElement.lang = lang;
    };

    useEffect(() => {
        const savedLang = localStorage.getItem("lang");
        if (savedLang) {
            setActiveLang(savedLang);
            i18n.changeLanguage(savedLang);
            document.documentElement.lang = savedLang;
            document.body.classList.add(savedLang);
        }
    }, []);

    const toggleActiveMenu = () => {
        setIsActiveMenu(prevState => !prevState);
    };

    const getFlagImage = (lang: string) => {
        return languages.find((e) => e.code === lang)?.img || am;
    };

    const languageOptions = useMemo(() => {
        return languages
            .filter((language) => language.code !== activeLang)
            .map((language) => (
                <li key={language.code} onClick={() => changeLanguage(language.code)}>
                    <img src={language.img} alt={language.name} />
                    <p>{language.name}</p>
                </li>
            ));
    }, [activeLang]);

    return (
        <header>
            <nav className={style.nav}>
                <div className={style.logo}><img src={favicon} style={{ width: "40px", height: "40px" }} /></div>
                <ul className={isActiveMenu ? `${style.ul} active` : `${style.ul}`}>
                    <li>
                        <NavLink to="/">{t("Home")}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">{t("Aboutus")}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services">{t("Services")}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects">{t("Projects")}</NavLink>
                    </li>
                    <li className={style.lang}>
                        <div><img src={getFlagImage(activeLang)} alt={activeLang} /></div>
                        <ul>{languageOptions}</ul>
                    </li>
                </ul>
                <div className={isActiveMenu ? `${style.btn} active` : style.btn} onClick={toggleActiveMenu}>
                    <span></span>
                </div>
            </nav>
        </header>
    );
};

export default Nav;