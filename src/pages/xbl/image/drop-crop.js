import React, { useState, useMemo, useCallback } from "react";

import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { useDropzone } from 'react-dropzone';

export default function Index() {
    // input image url
    const [srcImg, setSrcImg] = useState(null);
    const [image, setImage] = useState(null);

    // save the resulted image
    const [result, setResult] = useState(null);



    const [crop, setCrop] = useState({
        aspect: 1 / 1,
        unit: '%',
        width: 80,
    });




    const handleImage = async (event) => {
        const imageInfo = event.target.files[0];

        console.log(imageInfo);
        // name: "mixing-colors-4k-ipad-pro-wallpaper-ilikewallpaper_com.jpg"
        // size: 700891
        // type: "image/jpeg"

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

            //console.log(result);
        } catch (e) {
            console.log("crop the image");
        }
    };





    function nameLengthValidator(file) {
        const maxLength = 20;

        if (file.name.length > maxLength) {
            return {
                code: "name-too-large",
                message: `Name is larger than ${maxLength} characters`
            };
        }

        return null
    }











    // dropzone
    const handleOnDrop = e => {
        if (e.length > 0) {
            console.log(e[0]);
            // name: "img-2.jpg"
            // size: 5113
            // type: "image/jpeg"

            setSrcImg(URL.createObjectURL(e[0]));
        }
    };


    const {
        acceptedFiles,
        getRootProps,
        getInputProps,
        isFocused,
        isDragAccept,
        isDragReject
    } = useDropzone(
        {
            accept: 'image/*',
            onDrop: e => handleOnDrop(e)
            // validator: nameLengthValidator
        }
    );


    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));




    const style = useMemo(() => ({
        ...(isFocused ? { borderColor: "var(--theme)" } : {}),
        ...(isDragAccept ? { borderColor: "var(--theme)" } : {}),
        ...(isDragReject ? { borderColor: '#ff1744' } : {})
    }), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);




    return <div className='p2'>
        <h4>Image drop and crop</h4>

        <div className="mt2">
            <div className="dropzone-wrap">
                <div {...getRootProps({
                    className: 'dropzone',
                    style
                })}>
                    <input
                        {...getInputProps()}
                        onChange={handleImage}
                    />
                    <p>Drag and drop, or click to select files</p>
                </div>
            </div>
        </div>

        {/* <input
            type="file"
            accept="image/*"
            onChange={handleImage}
        /> */}

        {srcImg && (
            <div className='mt2 w70 mcen'>
                <ReactCrop
                    style={{ maxWidth: "50%" }}
                    src={srcImg}
                    onImageLoaded={setImage}
                    crop={crop}
                    onChange={setCrop}
                    keepSelection={true}
                    circularCrop={true}
                    scale={true}
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
