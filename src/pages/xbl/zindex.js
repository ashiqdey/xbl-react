export default function index() {
    return (
        <div className='p2'>
            <h1>Z Indexes</h1>

            <div className="mt2 flex fww">
                {
                    [
                        -1,
                        0,
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9,
                        10,
                        1000,
                        2000,
                        3000,
                        4000,
                        5000,
                        6000,
                        7000,
                        8000,
                        9000
                    ].map((e, i) => <div key={i} className={`p1 m50 br5 bslg`}>z{e}</div>)
                }
            </div>
        </div>
    )
}
