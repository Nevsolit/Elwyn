import { memo } from "react";
import { WrapperSection } from "~/core/components";
import { AboutUsEntity } from "~/core/types";
import "./styles.scss";

type AboutMeProps = {
    data: AboutUsEntity;
};

const AboutMe: React.FC<AboutMeProps> = (props) => {
    return (
        <WrapperSection>
            <div className="about_me__container">
                <div className="about_me__container__images">
                    <img src={props?.data?.image} alt="Min Kiên" />
                </div>
                <div className="about_me__container__info group__column">
                    <h1>{props?.data?.title}</h1>
                    {props?.data?.sections &&
                        props?.data?.sections.map((section, index) => <p key={`about-me-key-${index}`}>{section}</p>)}
                    <div>
                        <h1>{props?.data?.email}</h1>
                        <h2>{props?.data?.tagId}</h2>
                    </div>
                </div>
            </div>
        </WrapperSection>
    );
};

export default memo(AboutMe);
