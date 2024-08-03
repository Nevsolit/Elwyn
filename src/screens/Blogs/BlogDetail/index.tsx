import { transitionPage } from "~/core/hoc";

import { Flex } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BackPage, Loading, WrapperSection } from "~/core/components";
import { useAppDispatch, useAppSelector } from "~/core/hooks";
import { getDetailCollection } from "~/core/services";
import { BlogsActions } from "~/core/store";
import { BlogPost } from "~/core/types";
import { formatTime } from "~/core/utils";
import log from "~/core/utils/log";
import "./styles.scss";

const BlogDeatil: React.FC = () => {
    const { blogId } = useParams<{ blogId: string }>();
    const [blogDetail, setBlogDetail] = useState<BlogPost | null>(null);

    const dispatch = useAppDispatch();
    const { loading } = useAppSelector((state) => state.root.blogs);

    const handleGetBlogDetail = async () => {
        dispatch(BlogsActions.update({ loading: true }));
        try {
            if (blogId) {
                const blogDetail = await getDetailCollection("blogs", blogId);

                if (blogDetail) {
                    setBlogDetail(blogDetail as BlogPost);
                }
            }
        } catch (error) {
            log("error", error);
        } finally {
            dispatch(BlogsActions.update({ loading: false }));
        }
    };

    useEffect(() => {
        handleGetBlogDetail();
    }, []);

    return (
        <div className="blog_detail__container">
            {loading && <Loading />}
            <WrapperSection type="detail">
                <Flex direction={"column"} gap={"8"} className="w-full">
                    <div className="blog_detail__container__back_page">
                        <BackPage type="detail" background="secondary" />
                    </div>
                    <div className="blog_detail__container__title group__column">
                        <h1>{blogDetail?.title}</h1>
                        <span>{formatTime(blogDetail?.timeCreated || "")}</span>
                    </div>
                    {blogDetail?.sections.map((sectionsBlog, index) => {
                        let checkImage = sectionsBlog.images.length === 1;
                        return (
                            <div key={`item-section-blog-${index}`} className="group__column">
                                <div className={checkImage ? "wrapper_item_image" : "wrapper_list_item_image"}>
                                    {sectionsBlog.images.map((image, index) => (
                                        <img
                                            key={`item-section-image-blog-${index}`}
                                            className={!checkImage ? "" : "blog_detail__container__image"}
                                            src={image.url}
                                            alt="elwyn"
                                        />
                                    ))}
                                </div>
                                {sectionsBlog.contents.map((content, index) => (
                                    <p key={`item-section-content-blog-${index}`}>{content}</p>
                                ))}
                            </div>
                        );
                    })}
                </Flex>
            </WrapperSection>
        </div>
    );
};

export default transitionPage({ OgComponent: BlogDeatil });
