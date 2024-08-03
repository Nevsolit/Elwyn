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
