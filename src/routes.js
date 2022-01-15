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
import ImageCrop from "./pages/xbl/image/crop";
import ImageDropCrop from "./pages/xbl/image/drop-crop";

import TextEditor from "./pages/xbl/text-editor/text-editor";
import TextEditorClass from "./pages/xbl/text-editor/text-editor-class";
import TextEditorW from "./pages/xbl/text-editor/text-editor-wysiwyg";

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
        path: "xbl",
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
                path: "image/crop",
                element: <ImageCrop />,
            },
            {
                path: "image/drop-crop",
                element: <ImageDropCrop />,
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
                path: "all-listings",
                element: <AllListings />,
            }
        ]
    }
];
export default routes;
