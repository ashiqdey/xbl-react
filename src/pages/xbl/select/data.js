
import React from "react";


const options = [
    {
        value: "BOLD",
        icon: "xbl-bold",
        label: "Bold",
    },
    {
        value: "ITALIC",
        icon: "xbl-italic",
        label: "Italic",
    },
    {
        value: "UNDERLINE",
        icon: "xbl-underline",
        label: "Underline",
    },
];


export const Options = options.map((item) => {
    item.label = (
        <div className="label flex aic">
            <span className={`ic40 ic f1 ${item.icon}`}></span>
            <span>{item.label}</span>
        </div>
    );
    return item;
});
