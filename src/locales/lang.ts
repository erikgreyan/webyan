import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./messages/en.json";
import translationRU from "./messages/ru.json";
import translationHY from "./messages/hy.json";

const resources = {
    en: {
        translation: translationEN,
    },
    ru: {
        translation: translationRU,
    },
    hy: {
        translation: translationHY,
    },
};

const savedLanguage = localStorage.getItem("lang") || "hy";

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: savedLanguage,
        fallbackLng: "hy",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;