import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import useStyles from "./style";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import { Toaster, toast } from "sonner";

const PrivacyPolicy = () => {
    const style = useStyles();
    const { t } = useTranslation();

    useEffect(() => {
        document.body.classList.add(localStorage.getItem("lang") || "hy");
        return () => {
            document.body.classList.remove(localStorage.getItem("lang") || "hy");
        };
    }, []);

    useEffect(() => {
        document.title = t("PrivacyPolicy");
        toast.warning(t("LastUpdated"));
    }, [t]);

    return (
        <>
            <Nav />
            <Toaster richColors position="top-right" toastOptions={{ className: style.toaster }} />
            <header className={style.header}>
                <h1>{t("PrivacyPolicy")}</h1>
                <div className={style.items}>
                    <div className={style.item}>
                        <h2>{t("Cookies")}</h2>
                        <p dangerouslySetInnerHTML={{ __html: t("CookiesTxt") }}></p>
                        <a href="mailto:erikgreyan99@gmail.com">erikgreyan99@gmail.com</a>
                    </div>
                    <div className={style.item}>
                        <h2>{t("Link")}</h2>
                        <p>{t("LinkTxt")}</p>
                    </div>
                    <div className={style.item}>
                        <h2>{t("PrivacyPolicyEdit")}</h2>
                        <p>{t("PrivacyPolicyEditTxt")}</p>
                    </div>
                </div>
            </header>
            <Footer />
        </>
    );
};

export default PrivacyPolicy;