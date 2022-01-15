import React from "react";
import { Link, Outlet } from "react-router-dom";

const Empty = ({ children }) => {
    return (
        <div className="main">
            <div id="sidebar" className="h100 t0 l0 pf z10 ofya">
                <div className="p1">
                    <div className="item active">
                        <Link to="/">home</Link>
                    </div>
                    <div className="item">
                        <Link to="/dashboard">dashboard</Link>
                    </div>
                    <div className="item">
                        <Link to="/dashboard/typography">Typography</Link>
                    </div>
                    <div className="item">
                        <Link to="/dashboard/form">Form</Link>
                    </div>
                    <div className="item">
                        <Link to="/dashboard/color">Color</Link>
                    </div>
                    <div className="item">
                        <Link to="/dashboard/margin-padding">Margin padding</Link>
                    </div>
                    <div className="item">
                        <Link to="/dashboard/display">Display</Link>
                    </div>
                    <div className="item">
                        <Link to="/dashboard/width">Width</Link>
                    </div>
                    <div className="item">
                        <Link to="/dashboard/responsive">Responsive</Link>
                    </div>
                    <div className="item">
                        <Link to="/dashboard/zindex">Z-index</Link>
                    </div>
                    <div className="item">
                        <Link to="/dashboard/ripple">Ripple</Link>
                    </div>
                    <div className="item">
                        <Link to="/dashboard/select">Select</Link>
                    </div>
                    <div className="item">
                        <Link to="/dashboard/text-editor">Text editor</Link>
                    </div>
                    <div className="item">
                        <Link to="/dashboard/text-editor-class">Text editor (class based)</Link>
                    </div>
                    <div className="item">
                        <Link to="/dashboard/text-editor-wysiwyg">Text editor (wysiwyg)</Link>
                    </div>

                </div>
            </div>

            <div id="content">
                {children}
                <Outlet />
            </div>
        </div>
    );
};

export default Empty;
