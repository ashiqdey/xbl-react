import React, { useState } from "react";

export default function Overlay(props) {
    const {
        children,
        show = "0",
        onClose = null
    } = props;

    const [showbox, setShow] = useState(show);

    return (
        <div className='overlay' show={showbox}>
            <div className="mask" onClick={() => {
                setShow("0");
                onClose()
            }} />
            <div className="content">
                {children}
            </div>
        </div>
    )
}
