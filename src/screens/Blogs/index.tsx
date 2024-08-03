import { Flex } from "@radix-ui/themes";
import { WrapperSection } from "~/core/components";
import HeadBlogs from "./components/HeadBlogs";
import ListBlogs from "./components/ListBlogs";
import { useTranslation } from "react-i18next";
import { transitionPage } from "~/core/hoc";

import "./styles.scss";

const BlogsScreen = () => {
    const [t] = useTranslation("global");

    return (
        <div className="blogs__container">
            <WrapperSection
                title={
                    <div className="title__section-v2">
                        <h1>{t("blogs.title")}</h1>
                        <p>{t("blogs.description")}</p>
                    </div>
                }
            >
                <Flex direction={"column"} gap={"8"} className="w-full">
                    <HeadBlogs />
                    <ListBlogs />
                </Flex>
            </WrapperSection>
        </div>
    );
};

export default transitionPage({ OgComponent: BlogsScreen });
