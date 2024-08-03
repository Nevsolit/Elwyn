import { BackPage, WrapperSection } from "~/core/components";
import { transitionPage } from "~/core/hoc";

import "./styles.scss";
import { Flex } from "@radix-ui/themes";
import fakeData from "~/core/utils/fakeData";

const ProjectDetailScreen: React.FC = () => {
    return (
        <div className="project_detail__container">
            <WrapperSection type="detail">
                <BackPage type="detail" />
                <Flex direction={"column"} gap={"8"} align={"center"}>
                    <div className="project_detail__container__title group__column__center">
                        <p>MURAL</p>
                        <h1>Then, A Fantastic Sea</h1>
                        <span>
                            This was the mural that started it all. I painted this surreal mural in my studio in 2018,
                            and it's since kicked off a career in murals and installations.
                        </span>
                    </div>
                    {fakeData(3).map((_, index) => (
                        <Flex key={`content-project-${index}`} direction={"column"} gap={"8"} align={"center"}>
                            <div className="project_detail__container__image"></div>
                            <p className="project_detail__container__text">
                                here are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour, or randomised words which don't
                                look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                                need to be sure there isn't anything embarrassing hidden in the middle of text. All the
                                Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                                making this the first true generator on the Internet. It uses a dictionary of over 200
                                Latin words, combined with a handful of model sentence structures, to generate Lorem
                                Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from
                                repetition, injected humour, or non-characteristic words etc.
                            </p>
                        </Flex>
                    ))}
                </Flex>
            </WrapperSection>
        </div>
    );
};

export default transitionPage({ OgComponent: ProjectDetailScreen });
