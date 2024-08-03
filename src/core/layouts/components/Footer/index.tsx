import { Facebook, Instagram } from "lucide-react";

import Images from "~/assets/imgs";

import "./styles.scss";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
    const { t } = useTranslation("global");
    return (
        <footer className="footer__container">
            <div className="footer__container__wrapper ">
                <div className="wrapper__info group__column">
                    <h1>{t("footer.get-in-touch")}</h1>
                    <p>{t("footer.description")}</p>
                    <a href="mailto:Elwyn@gmail.com">Elwyn@gmail.com</a>
                    <div className="group__row">
                        <a href="https://www.instagram.com/ktys4tt/" target="_blank">
                            <Instagram />
                        </a>
                        <a href="https://www.facebook.com/kien.mon.33" target="_blank">
                            <Facebook />
                        </a>
                    </div>
                </div>
                <div className="wrapper__form group__center">
                    <form className="group__column items-center">
                        <div className="wrapper__form__image">
                            <img src={Images.avatarFooter} alt="Elwyn" />
                        </div>
                        <div className="group__column__center">
                            <h1>{t("footer.Elwyn-Studio-Newsletter")}</h1>
                            <p>{t("footer.contact")}</p>
                        </div>
                        <div className="wrapper__form__input">
                            <input type="text" placeholder="Type your email" />
                            <button className="btn__default">{t("footer.subscribe")}</button>
                        </div>
                        <p className="wrapper__form__subscribing">
                            {t("footer.subscribing")} <a href="">{t("footer.terms-of-use")}</a>, {t("footer.our")}{" "}
                            <a href="">{t("footer.privacy-policy")}</a> {t("footer.and")}{" "}
                            <a href="">{t("footer.information-collection-notice")}</a>
                        </p>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
