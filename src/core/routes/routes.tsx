import { createBrowserRouter } from "react-router-dom";

import PATHS from "../constants/path";
import { DetailLayout, MainLayout } from "../layouts";
import React from "react";

const HomeScreen = React.lazy(() => import("~/screens/Home"));
const AboutUsScreen = React.lazy(() => import("~/screens/AboutUs"));

const ProjectScreen = React.lazy(() => import("~/screens/Project"));
const ProjectDetailScreen = React.lazy(() => import("~/screens/Project/ProjectDetail"));

const BlogsScreen = React.lazy(() => import("~/screens/Blogs"));
const BlogDetailScreen = React.lazy(() => import("~/screens/Blogs/BlogDetail"));

const ShareLifeScreen = React.lazy(() => import("~/screens/ShareLife"));
const ShareLifeDetailScreen = React.lazy(() => import("~/screens/ShareLife/DetailShareLife"));

const TermsOfUseScreen = React.lazy(() => import("~/screens/TermsOfUse"));
const InformationCollectionNoticeScreen = React.lazy(() => import("~/screens/InformationCollectionNotice"));
const PrivacyPolicyScreen = React.lazy(() => import("~/screens/PrivacyPolicy"));

const NotFoundScreen = React.lazy(() => import("~/screens/NotFound"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: PATHS.HOME,
                element: <HomeScreen />,
            },
            {
                path: PATHS.ABOUT_US,
                element: <AboutUsScreen />,
            },
            {
                path: PATHS.PROJECT,
                element: <ProjectScreen />,
            },
            {
                path: PATHS.PROJECT_DETAIL,
                element: <ProjectDetailScreen />,
            },
            {
                path: PATHS.BLOG,
                element: <BlogsScreen />,
            },
            {
                path: PATHS.SHARE_LIFE,
                element: <ShareLifeScreen />,
            },
            {
                path: PATHS.SHARE_LIFE_DETAIL,
                element: <ShareLifeDetailScreen />,
            },
            {
                path: PATHS.TERMS_OF_USE,
                element: <TermsOfUseScreen />,
            },
            {
                path: PATHS.INFORMATION_COLLECTION_NOTICE,
                element: <InformationCollectionNoticeScreen />,
            },
            {
                path: PATHS.PRIVACY_POLICY,
                element: <PrivacyPolicyScreen />,
            },
            {
                path: "*",
                element: <NotFoundScreen />,
            },
        ],
    },
    {
        element: <DetailLayout />,
        children: [
            {
                path: PATHS.BLOG_DETAIL,
                element: <BlogDetailScreen />,
            },
        ],
    },
]);

export default router;
