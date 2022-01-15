import React, { useState } from "react";

import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';


export default function Index() {
    // input image url
    const [srcImg, setSrcImg] = useState(null);
    const [image, setImage] = useState(null);

    // save the resulted image
    const [result, setResult] = useState(null);



    const [crop, setCrop] = useState({
        aspect: 1 / 1
    });



    const handleImage = async (event) => {
        const imageInfo = event.target.files[0];
        console.log(imageInfo);

        // lastModified: 1641984972510
        // lastModifiedDate: Wed Jan 12 2022 16: 26: 12 GMT + 0530(India Standard Time) { }
        // name: "mixing-colors-4k-ipad-pro-wallpaper-ilikewallpaper_com.jpg"
        // size: 700891
        // type: "image/jpeg"
        // webkitRelativePath: ""

        setSrcImg(URL.createObjectURL(imageInfo));
    };



    const getCroppedImg = async () => {
        try {
            const canvas = document.createElement("canvas");
            const scaleX = image.naturalWidth / image.width;
            const scaleY = image.naturalHeight / image.height;
            canvas.width = crop.width;
            canvas.height = crop.height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(
                image,
                crop.x * scaleX,
                crop.y * scaleY,
                crop.width * scaleX,
                crop.height * scaleY,
                0,
                0,
                crop.width,
                crop.height
            );

            const base64Image = canvas.toDataURL("image/jpeg", 1);
            setResult(base64Image);
            console.log(result);
        } catch (e) {
            console.log("crop the image");
        }
    };

    return <div className='p2'>
        <h4>Image crop</h4>

        <input
            type="file"
            accept="image/*"
            onChange={handleImage}
        />

        {srcImg && (
            <div className='mt2 w70 mcen'>
                <ReactCrop
                    style={{ maxWidth: "50%" }}
                    src={srcImg}
                    onImageLoaded={setImage}
                    crop={crop}
                    onChange={setCrop}
                />
                <button onClick={getCroppedImg}>crop</button>
            </div>
        )}


        {result && (
            <div>
                <img src={result} alt="" />
            </div>
        )}
    </div>;
}
