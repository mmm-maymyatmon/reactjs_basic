import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json";
import jp from "./locales/jp/translation.json";
import de from "./locales/de/translation.json";

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        jp: { translation: jp },
        de: { translation: de },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});  

export default i18n;