import Images from "~/assets/imgs";
import "./styles.scss";
import { useTranslation } from "react-i18next";

const EmptyData: React.FC = () => {
    const { t } = useTranslation("global");
    return (
        <div className="empty_data__container">
            <img src={Images.imageEmpty} alt="elwyn" />
            <div className="group__column__center">
                <h1>{t("empty_data.title")}</h1>
                <p>{t("empty_data.description")}</p>
            </div>
        </div>
    );
};

export default EmptyData;
