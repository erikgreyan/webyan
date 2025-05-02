import { useTranslation } from "react-i18next";
import useStyles from "./style";
import { Home, Email, LocationIcon, Projects, Services, User, PrivacyPolicy } from "../../assets/svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
    const { t } = useTranslation();
    const style = useStyles();

    return (
        <footer className={style.footer}>
            <section className={style.info}>
                <div>
                    <p>{t("Name")}</p>
                    <div>{t("Text")}</div>
                </div>
                <div>
                    <h4>{t("Quick")}</h4>
                    <ul>
                        <li>
                            <NavLink to="/">
                                <Home />
                                <span>{t("Home")}</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">
                                <User />
                                <span>{t("Aboutus")}</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/services">
                                <Services />
                                <span>{t("Services")}</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects">
                                <Projects />
                                <span>{t("Projects")}</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/privacy-policy">
                                <PrivacyPolicy />
                                <span>{t("PrivacyPolicy")}</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h4>{t("Address")}</h4>
                        <li>
                            <NavLink to="/address" className={style.disabled}>
                                <LocationIcon />
                                <span>{t("Location")}</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="mailto: webyan@webyan.am" target="_blank">
                                <Email />
                                <span>webyan@webyan.am</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </section>
            <section className={style.copyright}>
                <div>{t("Copyright")}</div>
                <div>
                    <NavLink to="https://www.instagram.com/web__yan/" target="_blank">Instagram</NavLink>
                    <NavLink to="mailto:mailto:webyan@webyan.am" target="_blank">Gmail</NavLink>
                    <NavLink to="https://www.facebook.com/profile.php?id=61575088380982" target="_blank">Facebook</NavLink>
                </div>
            </section>
        </footer>
    );
}

export default Footer;