import { memo, useCallback, useEffect, useState } from "react";
import { getCollection } from "~/core/services";
import { BannerEntity } from "~/core/types";
import log from "~/core/utils/log";
import "./styles.scss";
import { Link } from "react-router-dom";
import { WrapperSection } from "~/core/components";
import { ArrowRight } from "lucide-react";
import PATHS from "~/core/constants/path";

const Banner: React.FC = memo(() => {
    const [banners, setBanners] = useState<BannerEntity[]>([]);

    const fetchBanners = useCallback(async () => {
        try {
            const bannersCollection = (await getCollection("banners")) as BannerEntity[];
            setBanners(bannersCollection);
        } catch (error) {
            log("error", "fetchBanners", error);
        }
    }, []);

    useEffect(() => {
        fetchBanners();
    }, []);

    return (
        <div className="banner__container">
            <WrapperSection>
                <div className="banner__container__wrapper">
                    <div className="banner__container__title">
                        <p className="uppercase text-xs">Chào mừng đến với</p>
                        <h1 className="text-xl lg:font-semibold lg:max-w-[480px] lg:leading-[2.8rem] lg:text-4xl text-[#353535]">
                            Elwaire Studio <br /> & Thiết kế trải nghiệm, kiến tạo cảm xúc! 💡{" "}
                        </h1>
                        <h1 className="max-w-[350px] text-gray-400 ">
                            Tạo ra trải nghiệm người dùng sạch sẽ, thú vị Giúp mọi người tăng giá trị của họ ✏️{" "}
                        </h1>
                        <div className="flex items-center gap-4">
                            <Link to={`/${PATHS.SERVICES}`} className="button__default mt-4">
                                Dịch vụ của chúng tôi
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                    <div className="banner__container__image ">
                        <img src={banners[0]?.imageUrl} alt="" className="banner__container__image__main" />
                        {banners[1]?.imageUrl && (
                            <img src={banners[1]?.imageUrl} alt="" className="banner__container__image__first" />
                        )}
                        {banners[2]?.imageUrl && (
                            <img src={banners[2]?.imageUrl} alt="" className="banner__container__image__second" />
                        )}
                    </div>
                </div>
            </WrapperSection>
        </div>
    );
});

export default Banner;
