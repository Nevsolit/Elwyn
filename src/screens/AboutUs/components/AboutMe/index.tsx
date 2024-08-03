import { WrapperSection } from "~/core/components";
import "./styles.scss";
import { useTranslation } from "react-i18next";

const AboutMe: React.FC = () => {
    const [t] = useTranslation("global");

    return (
        <WrapperSection>
            <div className="about_me__container">
                <div className="about_me__container__images">
                    <img src="https://i.pinimg.com/564x/a4/c5/be/a4c5be5bf1bb2b85a849c5e492588283.jpg" alt="Min Kiên" />
                </div>
                <div className="about_me__container__info group__column">
                    <h1>{t("about-us.about-me.title")}</h1>
                    <p>{t("about-us.about-me.description-1")}</p>
                    <p>{t("about-us.about-me.description-2")}</p>
                    <div>
                        <h1>Elwyn@gmail.com</h1>
                        <h2>@ktys4tt</h2>
                    </div>
                </div>
            </div>
        </WrapperSection>
    );
};

export default AboutMe;
