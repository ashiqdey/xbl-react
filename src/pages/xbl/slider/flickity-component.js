import React from "react";
import Flickity from "react-flickity-component";
import "./flickity.scss";

export default function Index() {
    const flickityOptions = {
        accessibility: true,
        cellAlign: "left",
        pageDots: true,
        prevNextButtons: !(window.innerWidth < 700),
    };

    const items = [
        0, 1, 2, 3, 4
    ]

    return (
        <div className='p2 ofh'>
            <h4>Slider - Flickity component</h4>

            <div className='mt2 graye'>
                <Flickity options={flickityOptions}>
                    {items.map((e, i) => (
                        <div key={i} className="cell p1">
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
