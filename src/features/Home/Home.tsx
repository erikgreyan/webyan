import { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import useStyles from "./style";
import user from "../../assets/img/user.jpg";
import Nav from "../../components/Nav/Nav";
import About from "../../components/About/About";
import Scroll from "../../components/Scroll/Scroll";
import Footer from "../../components/Footer/Footer";
import Services from "../../components/Services/Services";
import Skills from "../../components/Skills/Skills";

const Home = () => {
    const style = useStyles();
    const { t } = useTranslation();
    const headerRef = useRef<HTMLElement | null>(null);

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
                        entry.target.classList.add(style.animate);
                    } else {
                        entry.target.classList.remove(style.animate);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const currentHeader = headerRef.current;
        if (currentHeader) {
            observer.observe(currentHeader);
        }

        return () => {
            if (currentHeader) {
                observer.unobserve(currentHeader);
            }
        };
    }, [style.animate]);

    return (
        <>
            <Nav />
            <header ref={headerRef} className={style.header}>
                <div className={style.avatar}>
                    <h3 dangerouslySetInnerHTML={{ __html: t("Hi") }}></h3>
                    <p>{t("HeaderTxt")}</p>
                    <a href="/about">{t("Aboutus")}</a>
                </div>

                <div className={style.photo}>
                    <img src={user} alt="User image" />
                </div>
            </header>
            <main>
                <About />
                <Services />
                <Skills />
            </main>
            <Scroll />
            <Footer />
        </>
    );
}

export default Home;