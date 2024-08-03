import { Flex } from "@radix-ui/themes";
import { transitionPage } from "~/core/hoc";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import MyTeams from "./components/MyTeams";

const AboutUsScreen: React.FC = () => {
    return (
        <Flex direction={"column"} gap={"8"} className="mt-20">
            <AboutMe />
            <Skills />
            <MyTeams />
        </Flex>
    );
};

export default transitionPage({ OgComponent: AboutUsScreen });
