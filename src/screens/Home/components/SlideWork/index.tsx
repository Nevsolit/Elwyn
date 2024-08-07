import { WrapperSection } from "~/core/components";

import "./styles.scss";
import { useGetBlogsByTags } from "~/core/hooks";
import { memo } from "react";

const SlideWork: React.FC = () => {
    const { blogs } = useGetBlogsByTags("work", 1);

    return (
        <WrapperSection>
            <div className="slide__work__container">
                {blogs.length > 0 && <img src={blogs[0].sections[0].images[0]?.url} alt={blogs[0]?.title} />}
            </div>
        </WrapperSection>
    );
};

export default memo(SlideWork);
