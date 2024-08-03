
import { useTranslation } from 'react-i18next';

const NavLinks = () => {
    const { t } = useTranslation('global');
    
    const DataNavLink = [
        {
            label: t("header.home"), 
            to: "/",
        },
        {
            label: t("header.about-us"),
            to: "/about-us",
        },
        {
            label: t("header.projects"),
            to: "/projects",
        },
        {
            label: t("header.blogs"),
            to: "/blogs",
        },
        {
            label: t("header.arts"),
            to: "/arts",
        },
        {
            label: t("header.shop"),
            to: "/shop",
        },
    ];

    return DataNavLink;
};

export default NavLinks;
