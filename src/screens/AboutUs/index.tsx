import { Flex } from "@radix-ui/themes";
import { transitionPage } from "~/core/hoc";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import MyTeams from "./components/MyTeams";
import { getCollection } from "~/core/services";
import log from "~/core/utils/log";
import { useCallback, useEffect, useState } from "react";
import { AboutUsEntity, TeamsEntity } from "~/core/types";
import { useAppDispatch, useAppSelector } from "~/core/hooks";
import { AboutUsActions } from "~/core/store";
import { Loading } from "~/core/components";

const AboutUsScreen: React.FC = () => {
    const dispatch = useAppDispatch();
    const { loading } = useAppSelector((state) => state.root.aboutUs);

    const [aboutUs, setAboutUs] = useState<AboutUsEntity>();
    const [listTeams, setListTeams] = useState<TeamsEntity[]>([]);

    const handleGetAboutUs = useCallback(async () => {
        dispatch(AboutUsActions.update({ loading: true }));
        try {
            const [responseAboutUs, responseTeams] = await Promise.all([
                getCollection("aboutUs"),
                getCollection("teamMembers"),
            ]);

            setAboutUs(responseAboutUs[0] as AboutUsEntity);
            setListTeams(responseTeams as TeamsEntity[]);
        } catch (error) {
            log("error", "handleGetAboutUs", error);
        } finally {
            dispatch(AboutUsActions.update({ loading: false }));
        }
    }, []);

    useEffect(() => {
        handleGetAboutUs();
    }, []);

    return (
        <Flex direction={"column"} gap={"8"} className="mt-20">
            {loading && <Loading />}
            <AboutMe data={aboutUs as AboutUsEntity} />
            <Skills data={aboutUs?.skills as string[]} youtubeLinks={aboutUs?.youtubeLinks as string[]} />
            <MyTeams data={listTeams as TeamsEntity[]} />
        </Flex>
    );
};

export default transitionPage({ OgComponent: AboutUsScreen });
