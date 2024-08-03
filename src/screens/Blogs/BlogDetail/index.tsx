import { transitionPage } from "~/core/hoc";

import "./styles.scss";
import { BackPage, WrapperSection } from "~/core/components";
import { Flex } from "@radix-ui/themes";
import fakeData from "~/core/utils/fakeData";

const BlogDeatil: React.FC = () => {
    return (
        <div className="blog_detail__container">
            <WrapperSection type="detail">
                <Flex direction={"column"} gap={"8"} className="w-full">
                    <div className="blog_detail__container__back_page">
                        <BackPage type="detail" background="secondary" />
                    </div>
                    <div className="blog_detail__container__title group__column">
                        <h1>A series of projects called Nevsolit.</h1>
                        <span>Oct 12, 2023</span>
                    </div>
                    {fakeData(3).map((_, index) => (
                        <div key={`item-blog-${index}`} className="group__column">
                            <p>
                                I personally want to create some brands for myself. So I started creating a series of
                                projects named after Nev. What does Nevolit mean? Then I translate this word based on
                                Russian. It means "Add some salt". Why add a little salt? Because I am a rather quiet
                                and bland person, I wanted to build it partly to change myself and especially the
                                language to translate it as the name of the person I love. The starting point for this
                                series of websites is a website called [object Object] , which is the opening page to
                                promote and introduce my services.
                            </p>
                            <div className="blog_detail__container__image"></div>
                        </div>
                    ))}
                </Flex>
            </WrapperSection>
        </div>
    );
};

export default transitionPage({ OgComponent: BlogDeatil });
