import { memo } from "react";

import "./styles.scss";
import SearchProjects from "./components/SearchProjects";
import FilterProjects from "./components/FilterProjects";

const HeadProjects: React.FC = memo(() => {
    return (
        <div className="head_projects__container">
            <SearchProjects />
            <FilterProjects />
        </div>
    );
});

export default HeadProjects;
