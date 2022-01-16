import React, { useState } from "react";

import DropCrop from "../../../components/drop-crop";

export default function Index() {
    const [result, setResult] = useState(null);

    return <div className='p2'>
        <h4>Image drop and crop</h4>


        <DropCrop result={result} setResult={setResult}></DropCrop>

        {result && (
            <div>
                <img src={result} alt="" />
            </div>
        )}
    </div>;
}
