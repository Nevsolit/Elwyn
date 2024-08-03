import { WrapperSection } from "~/core/components";
import "./styles.scss";
import { Flex } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import Images from "~/assets/imgs";
import { useTranslation } from "react-i18next";

const NotFoundScreen: React.FC = () => {
    const { t } = useTranslation("global");

    return (
        <div className="not_found__container">
            <WrapperSection>
                <Flex align="center" justify="center" direction="column" className="not_found__content">
                    <img src={Images.image404} className="not_found__container__image" />
                    <div className="group__column__center">
                        <h1>404</h1>
                        <p>{t("404.description")}</p>
                        <Link to="/" className="group__column__center__link">
                            {t("404.come-back")}
                        </Link>
                    </div>
                </Flex>
            </WrapperSection>
        </div>
    );
};

export default NotFoundScreen;
