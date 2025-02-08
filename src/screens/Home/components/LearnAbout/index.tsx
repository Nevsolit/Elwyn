import { WrapperSection } from "~/core/components";
import useGetServiceByCategory from "~/core/hooks/useGetServiceByCategory";
import "./styles.scss";

const LearnAbout: React.FC = () => {
    const { items, isLoading } = useGetServiceByCategory("about", 1);

    return (
        <WrapperSection>
            <div className="learn_about__container">
                <div className="learn_about__container__title">
                    <span className="title_tag">{items[0]?.buttonLabel}</span>
                    <h1 className="introduce_title">{items[0]?.title}</h1>
                </div>
                <div className="learn_about__container__content">
                    <div className="learn_about__container__content__image">
                        {!isLoading && <img src={items[0]?.imageUrl || ""} alt={items[0]?.title || ""} />}
                    </div>
                    <p>{items[0]?.note}</p>
                </div>
            </div>
        </WrapperSection>
    );
};

export default LearnAbout;
