import React, { useState } from 'react';

import { Options } from "./data";
import Select from "../../../components/Select";

export default function Index() {
    const [selectedOption, setselectedOption] = useState("");


    const handleChange = (selectedOption) => {
        setselectedOption(selectedOption ? selectedOption.value : "");
    };

    return (
        <div className='p2'>
            <h1>Select</h1>

            <div className="mt2">
                <div className="select-option-wrapper">
                    {selectedOption && <p className="selected-option">You selected: </p>}
                    {selectedOption}
                </div>
                <Select
                    options={Options}
                    onChange={handleChange}
                />
            </div>

            <div className="mt2">
                <Select
                    options={[
                        { value: 'chocolate', label: 'Chocolate' },
                        { value: 'strawberry', label: 'Strawberry' },
                        { value: 'vanilla', label: 'Vanilla' }
                    ]}
                />
            </div>
        </div >
    )
}
