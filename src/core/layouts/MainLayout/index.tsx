import { Outlet } from "react-router-dom";
import { Flex } from "@radix-ui/themes";

import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout: React.FC = () => {
    // useEffect(() => {
    //     console.log("%cTắt ngay! 😡", "color: red; font-weight: bold; font-size: 34px;");
    //     log("login", accessToken);

    //     if (!accessToken) {
    //         navigate(PATH.LOGIN);
    //         return;
    //     }
    // }, []);

    return (
        <Flex direction={"column"} gap={"6"}>
            <Header />
            <Outlet />
            <Footer />
        </Flex>
    );
};

export default MainLayout;
