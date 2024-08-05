import { WrapperSection } from "~/core/components";

import "./styles.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";

type SkillsProps = {
    data: string[];
    youtubeLinks: string[];
};

const Skills: React.FC<SkillsProps> = (props) => {
    const { t } = useTranslation("global");

    return (
        <WrapperSection>
            <div className="skills__container">
                <div className="skills__container__list_skill group__column">
                    <h1>{t("about-us.skills.title")}</h1>
                    <div className="list__item_skill ">
                        {props?.data && props?.data.map((item, index) => <p key={`skill-${index}`}>{item}</p>)}
                    </div>
                </div>
                <div className="skills__container__preview group__column">
                    {props?.youtubeLinks &&
                        props?.youtubeLinks.map((link, index) => (
                            <div className="skills__container__preview__video" key={`video-${index}`}>
                                <iframe
                                    src={link}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                />
                            </div>
                        ))}
                </div>
            </div>
        </WrapperSection>
    );
};

export default memo(Skills);
