import { Flex } from "@radix-ui/themes";

import { transitionPage } from "~/core/hoc";

import Banner from "./components/Banner";
import Introduce from "./components/Introduce";
import LearnAbout from "./components/LearnAbout";
import Achievements from "./components/Achievements";
import SlideWork from "./components/SlideWork";
import Goals from "./components/Goals";

const HomeScreen: React.FC = () => {
    return (
        <Flex direction="column" gap="8">
            <Banner />
            <Introduce />
            <LearnAbout />
            <Achievements />
            <SlideWork />
            <Goals />
        </Flex>
    );
};

export default transitionPage({ OgComponent: HomeScreen });
