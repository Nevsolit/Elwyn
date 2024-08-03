import { Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { ButtonScrollOnTop } from "~/core/components";

const DetailLayout: React.FC = () => {
    return (
        <Fragment>
            <Outlet />
            <ButtonScrollOnTop />
        </Fragment>
    );
};

export default DetailLayout;
