import { memo, useEffect, useState } from "react";

import "./styles.scss";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const Banner: React.FC = memo(() => {
    const [isChangeSlide, setIsChangeSlide] = useState(0);

    const dataImages = [
        "https://i.pinimg.com/originals/e2/6a/78/e26a78d1f0dc39c24790b74a44dedb38.png",
        "https://i.pinimg.com/736x/bc/81/d4/bc81d4ed49d4a6ad7b7ae75004ded334.jpg",
        "https://i.pinimg.com/564x/c2/b7/ac/c2b7ac0739503c4d9a6711845608aa5f.jpg",
    ];

    const handleNextSlide = (type: "prev" | "next") => {
        if (type === "prev") {
            return setIsChangeSlide((prev) => (prev === 0 ? dataImages.length - 1 : prev - 1));
        } else {
            setIsChangeSlide((prev) => (prev === dataImages.length - 1 ? 0 : prev + 1));
        }
    };

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setIsChangeSlide((prev) => (prev === dataImages.length - 1 ? 0 : prev + 1));
    //     }, 5000);

    //     return () => clearInterval(interval);
    // }, []);

    return (
        <div className="banner__container">
            {dataImages.map((item, index) => {
                if (index === isChangeSlide) {
                    return (
                        <img
                            src={item}
                            key={`banner-${index}`}
                            alt=""
                            className="banner__container__background fade-in"
                        />
                    );
                }
            })}
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
