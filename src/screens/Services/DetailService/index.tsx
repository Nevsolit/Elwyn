import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Account, WrapperSection } from "~/core/components";
import { transitionPage } from "~/core/hoc";
import { useAppDispatch } from "~/core/hooks";
import { getDetailCollection } from "~/core/services";
import { BlogsActions } from "~/core/store";
import { BlogPost } from "~/core/types";
import { formatTime } from "~/core/utils";
import log from "~/core/utils/log";
import "./styles.scss";

const DetailServiceScreen: React.FC = () => {
    const { serviceId } = useParams<{ serviceId: string }>();
    const [serviceDetail, setServiceDetail] = useState<BlogPost | null>(null);

    const dispatch = useAppDispatch();

    const handleGetBlogDetail = async () => {
        dispatch(BlogsActions.update({ loading: true }));
        try {
            if (serviceId) {
                const blogDetail = await getDetailCollection("blogs", serviceId);

                if (blogDetail) {
                    setServiceDetail(blogDetail as BlogPost);
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
        <div className="detail_services__container">
            <WrapperSection>
                <div className="detail_services__container__wrapper">
                    <div className="detail_services__container__wrapper__banner">
                        <img
                            src={serviceDetail?.sections[0].images[0].url}
                            alt={serviceDetail?.title}
                            className="detail_services__container__wrapper__banner__img"
                        />
                        <div className="detail_services__container__wrapper__banner__content">
                            <h1>{serviceDetail?.title}</h1>
                            <span>
                                {serviceDetail?.timeUpdated
                                    ? formatTime(serviceDetail?.timeUpdated)
                                    : formatTime(serviceDetail?.timeCreated || "")}
                            </span>
                            <Account />
                        </div>
                    </div>
                    <div className="detail_services__container__wrapper__content">
                        <div className="detail_services__container__introduce">
                            <div className="detail_services__container__introduce__image">
                                <img src={serviceDetail?.sections[1].images[0].url} alt={serviceDetail?.title} />
                            </div>
                            <div className="detail_services__container__introduce__content">
                                <h1>{serviceDetail?.sections[1].contents[0]}</h1>
                                <p>{serviceDetail?.sections[1].contents[1]}</p>
                                <Link
                                    to={serviceDetail?.sections[1].contents[3] || ""}
                                    target="_blank"
                                    className="button__default w-full"
                                >
                                    {serviceDetail?.sections[1].contents[2]}
                                </Link>
                            </div>
                        </div>
                        <div className="detail_services__container__content">
                            {serviceDetail?.sections[0]?.contents.map((content, index) => {
                                return <p key={index}>{content}</p>;
                            })}
                        </div>
                    </div>
                </div>
            </WrapperSection>
        </div>
    );
};

export default transitionPage({ OgComponent: DetailServiceScreen });
