import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { WrapperSection } from "~/core/components";
import useGetServiceByCategory from "~/core/hooks/useGetServiceByCategory";
import fakeData from "~/core/utils/fakeData";
import "./styles.scss";
import ItemService from "./components/ItemService";

const MyService: React.FC = () => {
    const { t } = useTranslation("global");

    const { items, isLoading } = useGetServiceByCategory("service", 3);

    const renderContent = useMemo(() => {
        return (
            <>
                {!isLoading
                    ? items.map((item) => <ItemService key={item.id} data={item} />)
                    : fakeData(3).map((_, index) => <ItemService key={`fake-item-introduce-${index}`} />)}
            </>
        );
    }, [items]);

    return (
        <WrapperSection title={<h1 className="introduce_title">{t("home.title-introduce.title")}</h1>}>
            <div className="wrapper__service">{renderContent}</div>
        </WrapperSection>
    );
};

export default MyService;
