import { memo } from "react";
import { useGetBlogsByTags } from "~/core/hooks";
import "./styles.scss";

const SlideWork: React.FC = () => {
    const { blogs } = useGetBlogsByTags("work", 1);

    return (
        <div className="slide__work__container">
            <img src={blogs[0]?.sections[0]?.images[0]?.url} alt={blogs[0]?.title} />
            <div className="slide__work__container__content">
                <h1 className="font-lora">{blogs[0]?.title || ""}</h1>
                {/* <p>{blogs[0]?.sections[0]?.contents || ""}</p> */}
                {/* <Link to={`/blog/${blogs[0]?.id}`} className="button__default mt-2">
                    Tìm hiểu thêm
                    <ArrowRight size={16} />
                </Link> */}
            </div>
        </div>
    );
};

export default memo(SlideWork);
