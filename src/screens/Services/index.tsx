import { AlignJustify, LayoutGrid } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { WrapperSection } from "~/core/components";
import { transitionPage } from "~/core/hoc";
import useGetServiceByCategory from "~/core/hooks/useGetServiceByCategory";
import ItemServices from "./components/ItemServices";
import "./styles.scss";

const ServicesScreen: React.FC = () => {
    const { t } = useTranslation("global");
    const [isLayout, setIsLayout] = useState(true);

    const { items, isLoading } = useGetServiceByCategory("service");

    return (
        <div className="services__container">
            <WrapperSection
                title={
                    <div className="title__section-v2">
                        <h1>{t("services.title")}</h1>
                        <p>{t("services.description")}</p>
                    </div>
                }
            >
                <div className="services__container__head">
                    <h1>
                        Số lượng: <span>{items.length || 0}</span>
                    </h1>
                    <div className="services__container__head__layout">
                        <button
                            onClick={() => {
                                setIsLayout(true);
                            }}
                            className={isLayout ? "services__container__head__layout__active" : "text-gray-400"}
                        >
                            <LayoutGrid size={16} />
                        </button>
                        <button
                            onClick={() => {
                                setIsLayout(false);
                            }}
                            className={!isLayout ? "services__container__head__layout__active" : "text-gray-400"}
                        >
                            <AlignJustify size={16} />
                        </button>
                    </div>
                </div>
                <div className={isLayout ? "services__container__content" : "services__container__content__v2"}>
                    {isLoading ? (
                        <div>Loading</div>
                    ) : (
                        items.map((item) => <ItemServices key={item?.id} data={item} layout={isLayout} />)
                    )}
                </div>
            </WrapperSection>
        </div>
    );
};

export default transitionPage({ OgComponent: ServicesScreen });
