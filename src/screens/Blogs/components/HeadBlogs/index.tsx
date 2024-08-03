import { memo } from "react";
import FilterBlogs from "./components/FilterBlogs";
import "./styles.scss";
import SearchBlogs from "./components/SearchBlogs";

const HeadBlogs: React.FC = memo(() => {
    return (
        <div className="head_blogs__container">
            <SearchBlogs />
            <FilterBlogs />
        </div>
    );
});

export default HeadBlogs;
