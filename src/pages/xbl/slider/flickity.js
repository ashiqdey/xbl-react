import React from "react";
import Flickity from "react-flickity-component";
import "./flickity.scss";

export default function Index() {
    const flickityOptions = {
        contain: true,
        cellAlign: "left",
        pageDots: (window.innerWidth < 700),
        prevNextButtons: !(window.innerWidth < 700),
        wrapAround: false,
        autoPlay: false,
        adaptiveHeight: true,
        cellSelector: ".cell",
        freeScroll: false,
    };

    const items = [
        0, 1, 2, 3, 4, 5, 6, 7
    ]

    return (
        <div className=' ofh'>
            <div className="p2">
                <h4>Slider - Flickity</h4>
            </div>

            <div className='mt2 graye' style={{ paddingBottom: "50px" }}>
                <Flickity options={flickityOptions}>
                    {items.map((e, i) => (
                        <div key={i} className="cell  p1">
                            <div className="cell-wrap white bslg">
                                <div className="img grayd"></div>
                                <div className="p1">
                                    <h4>Title {i} comes here</h4>
                                    <small>And this is a short description</small>
                                </div>
                            </div>
                        </div>
                    ))}
                </Flickity>
            </div>
        </div>
    )
}
