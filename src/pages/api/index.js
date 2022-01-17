import React, { useEffect, useState } from "react";
import api from "../../services/api.js";

export default function Index() {

    const [test, setTest] = useState("")
    const [state, setState] = useState([])

    //RetrieveContacts
    const retrieveTest = async () => {
        try {
            const r = await api.get("/test");
            setTest(r.data);
        }
        catch (err) {
            console.log(err);
            setTest("Error");
        }
    };

    //fetch test
    useEffect(() => {
        const getTest = async () => {
            retrieveTest();
        };

        getTest();
    }, []);




    const changeHandler = async (e) => {
        try {
            const r = await api.get(`/state?q=${e.target.value}`);
            console.log(r);

            setState(r.data.data);
        }
        catch (err) {
            console.log(err);
            setState([]);
        }
    }

    return (
        <div className='p2'>
            <h4>API</h4>


            <div className='mt2'>
                <h4>GET</h4>
                <div className='mt1'>
                    <div>{JSON.stringify(test)}</div>
                    <button onClick={retrieveTest}>Get states</button>
                </div>
            </div>


            <div className='mt2 p2'>
                <h4>GET on type</h4>
                <div className='mt1'>
                    <input onChange={changeHandler} />
                    {
                        state.map(e => <div>{e}</div>)
                    }
                </div>
            </div>
        </div>
    )
}
