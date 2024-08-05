import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { memo, useCallback, useEffect, useState } from "react";
import { getCollection } from "~/core/services";
import { BannerEntity } from "~/core/types";
import log from "~/core/utils/log";
import "./styles.scss";

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
    }, [fetchBanners]);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         handleNextSlide("next");
    //     }, 5000);

    //     return () => clearInterval(interval);
    // }, [handleNextSlide]);

    const currentBanner = banners[currentSlide];

    return (
        <div className="banner__container">
            {currentBanner && (
                <img
                    src={currentBanner.imageUrl}
                    key={`banner-${currentSlide}`}
                    alt="elwyn"
                    className="banner__container__background fade-in"
                />
            )}
            <div className="banner__container__content absolute-full flex-center">
                <div className="banner__container__content__btn flex-between">
                    <button onClick={() => handleNextSlide("prev")}>
                        <ChevronLeftIcon size={42} />
                    </button>
                    <button onClick={() => handleNextSlide("next")}>
                        <ChevronRightIcon size={42} />
                    </button>
                </div>
            </div>
        </div>
    );
});

export default Banner;
