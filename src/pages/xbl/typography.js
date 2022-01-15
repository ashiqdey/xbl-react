export default function index() {
    return (
        <div className='p2'>
            <h1>Typography</h1>

            <div className="mt2">
                <h4>Font size</h4>
                {
                    [
                        "f06",
                        "f08",
                        "f09",
                        "f1",
                        "f11",
                        "f12",
                        "f14",
                        "f16",
                        "f18",
                        "f2",
                        "f3",
                        "f4",
                        "f5"
                    ].map((e, i) => <div key={i} className={e}>{e}</div>)
                }
            </div>

            <div className="mt2">
                <h4>Font weight</h4>
                {
                    [
                        "thinest",
                        "thiner",
                        "thin",
                        "fwn",
                        "bold",
                        "bolder",
                        "boldest",
                    ].map((e, i) => <div key={i} className={e}>{e}</div>)
                }
            </div>

            <div className="mt2">
                <h4>Text align</h4>
                {
                    [
                        "tl",
                        "tc",
                        "tr",
                        "tj",
                    ].map((e, i) => <div key={i} className={`bslg br5 p1 m1 ${e}`}>{e}</div>)
                }
            </div>


            <div className="mt2">
                <h4>Text transform</h4>
                {
                    [
                        "ttu",
                        "ttl",
                        "ttc",
                    ].map((e, i) => <div key={i} className={e}>{e}</div>)
                }
            </div>

            <div className="mt2">
                <h4>Text decoration</h4>
                {
                    [
                        "tdn",
                        "tdu",
                    ].map((e, i) => <div key={i} className={e}>{e}</div>)
                }
            </div>

        </div>
    )
}
