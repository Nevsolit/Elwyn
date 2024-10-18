import { memo, useCallback, useEffect, useState } from "react";
import { getCollection } from "~/core/services";
import { BannerEntity } from "~/core/types";
import log from "~/core/utils/log";
import "./styles.scss";
import { Link } from "react-router-dom";
import { WrapperSection } from "~/core/components";

const Banner: React.FC = memo(() => {
    // const [currentSlide, setCurrentSlide] = useState(0);
    const [banners, setBanners] = useState<BannerEntity[]>([]);

    // const handleNextSlide = useCallback(
    //     (type: "prev" | "next") => {
    //         setCurrentSlide((prev) => {
    //             if (type === "prev") {
    //                 return prev === 0 ? banners.length - 1 : prev - 1;
    //             } else {
    //                 return prev === banners.length - 1 ? 0 : prev + 1;
    //             }
    //         });
    //     },
    //     [banners.length],
    // );

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

    // const currentBanner = banners[currentSlide];

    log("info", banners);

    return (
        <div className="banner__container">
            <WrapperSection>
                <div className="banner__container__wrapper">
                    <div className="banner__container__title">
                        <p className="uppercase text-xs">Xin chào, Tôi là Nevwyn </p>
                        <h1 className="text-xl lg:font-semibold lg:max-w-[480px] lg:text-4xl text-[#353535]">
                            Nhà thiết kế sản phẩm, Doanh nhân đơn lẻ <br /> & Nhà sáng tạo nội dung 💡{" "}
                        </h1>
                        <h1 className="max-w-[350px] text-gray-400">
                            Tạo ra trải nghiệm người dùng sạch sẽ, thú vị Giúp mọi người tăng giá trị của họ ✏️{" "}
                        </h1>
                        <Link
                            to={banners[0]?.link || "https://www.facebook.com/groups/862643358866875"}
                            target="_blank"
                        >
                            <span className="text-black font-medium underline hover:text-gray-500">Learn more</span>
                        </Link>
                    </div>
                    <div className="banner__container__image">
                        <img
                            src={
                                banners[0]?.imageUrl ||
                                "https://i.pinimg.com/enabled/564x/6b/f7/82/6bf782ccbb7b03a678385d99d5f05693.jpg"
                            }
                            alt="elwyn"
                            className="banner__container__image__main"
                        />
                        {banners[1]?.imageUrl && (
                            <img src={banners[1]?.imageUrl} alt="elwyn" className="banner__container__image__first" />
                        )}
                        {banners[2]?.imageUrl && (
                            <img src={banners[2]?.imageUrl} alt="elwyn" className="banner__container__image__second" />
                        )}
                    </div>
                </div>
            </WrapperSection>

            {/* <div className="banner__container__background">
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
            </div> */}
        </div>
    );
});

export default Banner;
