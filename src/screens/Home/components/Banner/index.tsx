import { ChevronLeftIcon, ChevronRightIcon, MoveRight } from "lucide-react";
import { memo, useCallback, useEffect, useState } from "react";
import { getCollection } from "~/core/services";
import { BannerEntity } from "~/core/types";
import log from "~/core/utils/log";
import "./styles.scss";
import { Link } from "react-router-dom";

const Banner: React.FC = memo(() => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [banners, setBanners] = useState<BannerEntity[]>([]);

    const handleNextSlide = useCallback(
        (type: "prev" | "next") => {
            setCurrentSlide((prev) => {
                if (type === "prev") {
                    return prev === 0 ? banners.length - 1 : prev - 1;
                } else {
                    return prev === banners.length - 1 ? 0 : prev + 1;
                }
            });
        },
        [banners.length],
    );

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

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         handleNextSlide("next");
    //     }, 5000);

    //     return () => clearInterval(interval);
    // }, [handleNextSlide]);

    const currentBanner = banners[currentSlide];

    return (
        <div className="banner__container">
            <div className="banner__container__background">
                {banners.map((banner, index) => (
                    <img
                        src={banner.imageUrl}
                        key={`banner-${index}`}
                        alt="elwyn"
                        className={`banner__container__background__img ${
                            index === currentSlide ? "block fade-in" : "hidden"
                        }`}
                    />
                ))}
            </div>

            <div className="banner__container__content absolute-full flex-center">
                {banners.length > 1 && (
                    <div className="banner__container__content__btn flex-between">
                        <button onClick={() => handleNextSlide("prev")}>
                            <ChevronLeftIcon size={42} />
                        </button>
                        <button onClick={() => handleNextSlide("next")}>
                            <ChevronRightIcon size={42} />
                        </button>
                    </div>
                )}
                {currentBanner?.link && (
                    <Link target="_blank" to={currentBanner?.link} className="banner__container__content__link ">
                        <MoveRight />
                    </Link>
                )}
            </div>
        </div>
    );
});

export default Banner;
