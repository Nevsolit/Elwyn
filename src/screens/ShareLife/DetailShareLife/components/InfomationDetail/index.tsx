import { memo, useCallback, useEffect, useState } from "react";
import "./styles.scss";
import { getDetailCollection } from "~/core/services";
import log from "~/core/utils/log";
import { InformationDetail } from "~/core/types";
import { Link } from "react-router-dom";

const InfomationDetail: React.FC = () => {
    const [informationDetail, setInformationDetail] = useState<InformationDetail>();

    const handleGetHeader = useCallback(async () => {
        try {
            const result = (await getDetailCollection("settings", "information-detail")) as InformationDetail;
            if (result) {
                setInformationDetail(result);
            }
        } catch (error) {
            log("error", "Infomation Detail not found");
        }
    }, []);

    useEffect(() => {
        handleGetHeader();
    }, []);

    return (
        <div className="infomation-detail-container">
            <div className="infomation-detail-container__account">
                <img
                    src={informationDetail?.avatar}
                    alt="elwaire"
                    className="infomation-detail-container__account__avatar"
                />
                <div className="infomation-detail-container__account__info">
                    <h1>{informationDetail?.title} 👋</h1>
                    <p>{informationDetail?.description}</p>
                </div>
            </div>
            <div className="infomation-detail-container__content">
                <p>{informationDetail?.titleContact}</p>
                <div className="infomation-detail-container__content__images">
                    {informationDetail?.items.map((item, index) => (
                        <Link
                            to={item?.link}
                            target="_blank"
                            key={`inormation-detail-item-${index}`}
                            className="infomation-detail-container__content__images__img"
                        >
                            <img src={item?.image} alt={item?.title} />
                            <div className="infomation-detail-container__content__images__img__info">
                                <span>{item?.tag}</span>
                                <h2>{item?.title}</h2>
                                <p>{item?.description}</p>
                                <button>{item?.buttonLabel}</button>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default memo(InfomationDetail);
