import { memo } from "react";
import { useTranslation } from "react-i18next";

const IntroduceProject = () => {
    const { t } = useTranslation("global");
    return (
        <>
            <div className="projects__container__wrapper__title">
                <h1>
                    {t("project.title.first")}
                    <br /> <span> {t("project.title.second")}</span>
                </h1>
                <p>{t("project.description")}</p>
            </div>
            <div className="projects__container__wrapper__priciples">
                <h1>{t("project.my-principles")}</h1>
                <div className="projects__container__wrapper__priciples__list">
                    <div className="projects__container__wrapper__priciples__list__item">
                        <img
                            src="https://cdn.prod.website-files.com/60c5f64abe141da7260da0b9/64f81b54aa4a07bb1accdd4d_DesignPrinciple_04.png"
                            alt=""
                        />
                        <h2>"{t("project.list.first.title")}"</h2>
                        <p>{t("project.list.first.description")}</p>
                    </div>
                    <div className="projects__container__wrapper__priciples__list__item">
                        <img
                            src="https://cdn.prod.website-files.com/60c5f64abe141da7260da0b9/64f81b53db7d721830966108_DesignPrinciple_03.png"
                            alt=""
                        />
                        <h2>{t("project.list.second.title")}</h2>
                        <p>{t("project.list.second.description")}</p>
                    </div>
                    <div className="projects__container__wrapper__priciples__list__item">
                        <img
                            src="https://cdn.prod.website-files.com/60c5f64abe141da7260da0b9/64f81b5398a7e2ef2f75fbee_DesignPrinciple_02.png"
                            alt=""
                        />
                        <h2>{t("project.list.third.title")}</h2>
                        <p>{t("project.list.third.description")}</p>
                    </div>
                    <div className="projects__container__wrapper__priciples__list__item">
                        <img
                            src="https://cdn.prod.website-files.com/60c5f64abe141da7260da0b9/64f81b53694f17667854f460_DesignPrinciple_01.png"
                            alt=""
                        />
                        <h2>{t("project.list.fourth.title")}</h2>
                        <p>{t("project.list.fourth.description")}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(IntroduceProject);
