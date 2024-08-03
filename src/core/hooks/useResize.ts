import { useState, useEffect } from "react";

const useResize = (widthThreshold: number = 1024): boolean => {
    const [isAboveThreshold, setIsAboveThreshold] = useState<boolean>(window.innerWidth > widthThreshold);

    const handleResize = () => {
        setIsAboveThreshold(window.innerWidth > widthThreshold);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [widthThreshold]);

    return isAboveThreshold;
};

export default useResize;
