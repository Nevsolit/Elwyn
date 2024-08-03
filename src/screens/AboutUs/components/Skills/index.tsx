import { WrapperSection } from "~/core/components";

import "./styles.scss";
import { useTranslation } from "react-i18next";

const Skills: React.FC = () => {
    const [t] = useTranslation("global");

    const dataFake = [
        "DesginWeb/App",
        "Desgin Portfolio",
        "Desgin Landing Page",
        "Build Portfolio",
        "Build blog sites",
        "Desgin Logo",
        "DesginWeb/App",
        "Desgin Portfolio",
        "Desgin Landing Page",
        "Build Portfolio",
        "Build blog sites",
        "Desgin Logo",
    ];

    return (
        <WrapperSection>
            <div className="skills__container">
                <div className="skills__container__list_skill group__column">
                    <h1>{t("about-us.skills.title")}</h1>
                    <div className="list__item_skill ">
                        {dataFake.map((item, index) => (
                            <p key={`skill-${index}`}>{item}</p>
                        ))}
                    </div>
                </div>
                <div className="skills__container__preview group__column">
                    <div className="skills__container__preview__video">
                        <iframe
                            src="https://www.youtube.com/embed/W_IkBXSyC_4?si=RwVBFkRvF8XZACzZ"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        />
                    </div>
                    <div className="skills__container__preview__video">
                        <iframe
                            src="https://www.youtube.com/embed/-Ivo3bPa7_w?si=uUi17w9V7GeaJATQ"
                            title="YouTube video player"
                        ></iframe>
                    </div>
                </div>
            </div>
        </WrapperSection>
    );
};

export default Skills;
