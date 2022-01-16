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
                        <Link to="/xbl/typography">Typography</Link>
                    </div>


                    <div className="item">
                        <Link to="/xbl/color">Color</Link>
                    </div>
                    <div className="item">
                        <Link to="/xbl/margin-padding">Margin padding</Link>
                    </div>
                    <div className="item">
                        <Link to="/xbl/display">Display</Link>
                    </div>
                    <div className="item">
                        <Link to="/xbl/width">Width</Link>
                    </div>
                    <div className="item">
                        <Link to="/xbl/responsive">Responsive</Link>
                    </div>
                    <div className="item">
                        <Link to="/xbl/zindex">Z-index</Link>
                    </div>
                    <hr />
                    <div className="item">
                        <Link to="/xbl/form">Form</Link>
                    </div>
                    <div className="item">
                        <Link to="/xbl/form/formik">Form (Formik)</Link>
                    </div>
                    <div className="item">
                        <Link to="/xbl/form/formik-yup">Form (Formik + Yup)</Link>
                    </div>
                    <hr />

                    <div className="item">
                        <Link to="/xbl/ripple">Ripple</Link>
                    </div>
                    <div className="item">
                        <Link to="/xbl/select">Select</Link>
                    </div>
                    <div className="item">
                        <Link to="/xbl/slider/flickity">Slider (Flickity)</Link>
                    </div>

                    <hr />
                    <div className="item">
                        <Link to="/xbl/image/crop">Image crop</Link>
                    </div>
                    <div className="item">
                        <Link to="/xbl/image/drop-crop">Image drop crop</Link>
                    </div>
                    <div className="item">
                        <Link to="/xbl/image/reusable-drop-crop">Reusable Image crop</Link>
                    </div>
                    <hr />

                    <div className="item">
                        <Link to="/xbl/text-editor">Text editor</Link>
                    </div>
                    <div className="item">
                        <Link to="/xbl/text-editor-class">Text editor (class based)</Link>
                    </div>
                    <div className="item">
                        <Link to="/xbl/text-editor-wysiwyg">Text editor (wysiwyg)</Link>
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
