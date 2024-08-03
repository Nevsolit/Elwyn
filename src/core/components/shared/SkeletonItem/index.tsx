import { memo } from "react";
import "./styles.scss";

const SkeletonItem: React.FC = () => {
    return <div className="skeleton_item__container" />;
};

export default memo(SkeletonItem);
