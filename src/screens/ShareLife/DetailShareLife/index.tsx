import { Loading, WrapperSection } from "~/core/components";
import "./styles.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BlogPost } from "~/core/types";
import { useAppDispatch, useAppSelector } from "~/core/hooks";
import { BlogsActions } from "~/core/store";
import { getDetailCollection } from "~/core/services";
import log from "~/core/utils/log";
import InfomationDetail from "./components/InfomationDetail";
import { formatTime } from "~/core/utils";

const DetailShareLife: React.FC = () => {
    const { shareLifeId } = useParams<{ shareLifeId: string }>();
    const [blogDetail, setBlogDetail] = useState<BlogPost | null>(null);

    const dispatch = useAppDispatch();
    const { loading } = useAppSelector((state) => state.root.blogs);

    const handleGetBlogDetail = async () => {
        dispatch(BlogsActions.update({ loading: true }));
        try {
            if (shareLifeId) {
                const blogDetail = await getDetailCollection("blogs", shareLifeId);

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
        <WrapperSection>
            {loading && <Loading />}
            <div className="detail-share-life__container">
                <div className="detail-share-life__container__post">
                    <div className="detail-share-life__container__post__head">
                        <span className="detail-share-life__container__post__head__time">
                            {blogDetail?.timeUpdated
                                ? formatTime(blogDetail?.timeUpdated)
                                : formatTime(blogDetail?.timeCreated || "")}
                        </span>
                        <h1>{blogDetail?.title}</h1>
                    </div>
                    <div className="detail-share-life__container__post__content">
                        {blogDetail?.sections.map((sectionsBlog, index) => {
                            let checkImage = sectionsBlog.images.length === 1;
                            return (
                                <div key={`item-detail-share-life-${index}`} className="group__column">
                                    <div className="detail-share-life__container__post__content__image">
                                        {sectionsBlog.images.map((image, index) => (
                                            <img
                                                key={`item-section-image-blog-${index}`}
                                                className={!checkImage ? "" : "blog_detail__container__image"}
                                                src={image.url}
                                                alt="elwaire"
                                            />
                                        ))}
                                    </div>
                                    {sectionsBlog.contents.map((content, index) => (
                                        <p key={`item-detail-share-life-content-${index}`}>{content}</p>
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="detail-share-life__container__infomation">
                    <InfomationDetail />
                </div>
            </div>
        </WrapperSection>
    );
};

export default DetailShareLife;
