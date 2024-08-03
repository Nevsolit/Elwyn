import { memo } from "react";
import { useTranslation } from "react-i18next";

const ChangeLanguages: React.FC = memo(() => {
    const { i18n } = useTranslation("global");

    const handleChangeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div>
            <button onClick={() => handleChangeLanguage("en")}>EN</button>
            <button onClick={() => handleChangeLanguage("vi")}>VI</button>
        </div>
    );
});

export default ChangeLanguages;
