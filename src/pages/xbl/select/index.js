import React, { useState } from 'react';
import Select, { components } from 'react-select';

import { Options } from "./data";
import CustomSelect from "./custom-menu";

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
                <CustomSelect
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
                    components={{ Option }}
                />
            </div>
        </div >
    )
}

const Option = (props) => {
    return (
        <>
            <components.Option {...props}>{props.children}</components.Option>
        </>
    );
};