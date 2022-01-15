import React from "react";

// All pages that rely on 3rd party components (other than Bootstrap) are
// loaded asynchronously, to keep the initial JS bundle to a minimum size

// Layouts
import EmptyLayout from "./layouts/Empty";
import DefaultLayout from "./layouts/Default";

// Sitemap
import SitemapPage from "./pages/sitemap";


// Dashboard
import DashboardPage from "./pages/dashboard";

import Typography from "./pages/xbl/typography";
import FormPage from "./pages/xbl/form";
import MarginPadding from "./pages/xbl/margin-padding";
import Color from "./pages/xbl/color";
import Display from "./pages/xbl/display";
import Responsive from "./pages/xbl/responsive";
import Width from "./pages/xbl/width";
import Zindex from "./pages/xbl/zindex";
import Ripple from "./pages/xbl/ripple";
import Select from "./pages/xbl/select";
import TextEditor from "./pages/xbl/text-editor";
import TextEditorClass from "./pages/xbl/text-editor-class";
import TextEditorW from "./pages/xbl/text-editor-wysiwyg";

import AllListings from "./pages/all-listings";



const routes = [
    {
        path: "/",
        element: <EmptyLayout />,
        children: [
            {
                path: "",
                element: <SitemapPage />,
            },
        ]
    },
    {
        path: "dashboard",
        element: <DefaultLayout />,
        children: [
            {
                path: "",
                element: <DashboardPage />,
            },
            {
                path: "typography",
                element: <Typography />,
            }
            ,
            {
                path: "form",
                element: <FormPage />,
            },
            {
                path: "margin-padding",
                element: <MarginPadding />,
            },
            {
                path: "color",
                element: <Color />,
            },

            {
                path: "display",
                element: <Display />,
            }, {
                path: "width",
                element: <Width />,
            },
            {
                path: "responsive",
                element: <Responsive />,
            },
            {
                path: "zindex",
                element: <Zindex />,
            },
            {
                path: "ripple",
                element: <Ripple />,
            },
            {
                path: "select",
                element: <Select />,
            },
            {
                path: "text-editor",
                element: <TextEditor />,
            },
            {
                path: "text-editor-class",
                element: <TextEditorClass />,
            },
            {
                path: "text-editor-wysiwyg",
                element: <TextEditorW />,
            },
            {
                path: "all-listings",
                element: <AllListings />,
            }
        ]
    }
];
export default routes;
