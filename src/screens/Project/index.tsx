import { WrapperSection } from "~/core/components";

import { transitionPage } from "~/core/hoc";
import IntroduceProject from "./components/IntroduceProject";
import ListProjects from "./components/ListProjects";
import "./styles.scss";
import { useProjects } from "~/core/hooks";

const ProjectScreen: React.FC = () => {
    const { projects, loading } = useProjects();

    return (
        <div className="projects__container">
            <WrapperSection>
                <div className="projects__container__wrapper">
                    <IntroduceProject />
                    <ListProjects list={projects} loading={loading} />
                </div>
            </WrapperSection>
        </div>
    );
};

export default transitionPage({ OgComponent: ProjectScreen });
