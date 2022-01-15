export default function index() {
    return (
        <div className='p2'>
            <h1>Margin & padding</h1>

            <div className='mt2'>
                <h4>Margin</h4>
                <div className="flex fww mt1">
                    {
                        [
                            "auto",
                            "0",
                            "10p",
                            "25",
                            "50",
                            "75",
                            "1",
                            "125",
                            "150",
                            "175",
                            "2",
                            "3"
                        ].map((e, i) => <div key={i} className="grayc w33">
                            <div className="grayb" style={{ border: "1px solid #08f" }}>
                                <div className={`p1 graye  m${e}`}>m{e}</div>
                            </div>
                        </div>)
                    }
                </div>
            </div>



            <div className='mt2'>
                <h4>Margin top</h4>
                <div className="flex fww mt1">
                    {
                        [
                            "auto",
                            "0",
                            "10p",
                            "25",
                            "50",
                            "75",
                            "1",
                            "125",
                            "150",
                            "175",
                            "2",
                            "3"
                        ].map((e, i) => <div key={i} className="grayc w33">
                            <div style={{ border: "1px solid #08f" }}>
                                <div className={`p1 graye  mt${e}`}>mt{e}</div>
                            </div>
                        </div>)
                    }
                </div>
            </div>


            <div className='mt2'>
                <h4>Padding</h4>
                <div className="flex fww mt1">
                    {
                        [
                            "auto",
                            "0",
                            "10p",
                            "25",
                            "50",
                            "75",
                            "1",
                            "125",
                            "150",
                            "175",
                            "2",
                            "3"
                        ].map((e, i) => <div key={i} className="grayb p1 w33" style={{ border: "1px solid #08f" }}>
                            <div className={`p50 grayc  p${e}`}>
                                <div className="graye">p{e}</div>
                            </div>
                        </div>)
                    }
                </div>
            </div>

        </div>
    )
}
