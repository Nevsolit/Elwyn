import { Flex } from "@radix-ui/themes";

import { transitionPage } from "~/core/hoc";

import Banner from "./components/Banner";
import LearnAbout from "./components/LearnAbout";
import MyService from "./components/MyService";
import ProjectPopular from "./components/ProjectPopular";
import SlideWork from "./components/SlideWork";

const HomeScreen: React.FC = () => {
    return (
        <Flex direction="column" gap="8">
            <Banner />
            <div className="flex flex-col gap-24 items-center">
                <SlideWork />
                <MyService />
                <LearnAbout />
                <ProjectPopular />
                <div className="flex flex-col items-center text-gray-600 text-center">
                    Cảm ơn bạn đã ghé thăm! <br />
                    Tôi hy vọng bạn tìm thấy điều gì đó hữu ích ở đây.
                </div>
            </div>
        </Flex>
    );
};

export default transitionPage({ OgComponent: HomeScreen });
