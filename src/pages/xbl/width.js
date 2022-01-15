export default function index() {
    const widths = [
        0,
        10,
        20,
        25,
        30,
        33,
        40,
        50,
        60,
        66,
        70,
        80,
        90,
        100
    ];

    return (
        <div className='p2'>
            <h1>Grids</h1>
            <div>
                <a href="#width-default">Width (Default)</a><br />
                <a href="#width-sm"><strong>sm</strong> (small : screen &gt; 568px)</a><br />
                <a href="#width-md"><strong>md</strong> (medium : screen &gt; 768px)</a><br />
                <a href="#width-lg"><strong>lg</strong> (large : screen &gt; 992px)</a><br />
                <a href="#width-xl"><strong>xl</strong> (extra large : screen &gt; 1200px)</a><br />
                <a href="#width-xx"><strong>xx</strong> (extra extra large : screen &gt; 1400px)</a><br />
            </div>

            <div className="mt2">
                <h4>Width (Default)</h4>
                {
                    widths.map((e, i) => <div key={i} className={`w${e} p50 m50 grayd br5`}>w{e}</div>)
                }
            </div>

            <div className="mt2">
                <a href="#width-sm" name="width-sm">
                    <h4>sm-w (small : screen &gt; 568px)</h4>
                </a>
                {
                    widths.map((e, i) => <div key={i} className={`sm-w${e} p50 m50 grayd br5`}>sm-w{e}</div>)
                }
            </div>


            <div className="mt2">
                <a href="#width-md" name="width-md">
                    <h4>md-w (medium : screen &gt; 768px)</h4>
                </a>
                {
                    widths.map((e, i) => <div key={i} className={`md-w${e} p50 m50 grayd br5`}>md-w{e}</div>)
                }
            </div>


            <div className="mt2">
                <a href="#width-md" name="width-md">
                    <h4>lg-w (large : screen &gt; 992px)</h4>
                </a>
                {
                    widths.map((e, i) => <div key={i} className={`lg-w${e} p50 m50 grayd br5`}>lg-w{e}</div>)
                }
            </div>

            <div className="mt2">
                <a href="#width-xl" name="width-xl">
                    <h4>xl-w (extra large : screen &gt; 1200px)</h4>
                </a>
                {
                    widths.map((e, i) => <div key={i} className={`xl-w${e} p50 m50 grayd br5`}>xl-w{e}</div>)
                }
            </div>



            <div className="mt2">
                <a href="#width-x" name="width-xx">
                    <h4>xx-w (extra extra large : screen &gt; 1400px)</h4>
                </a>
                {
                    widths.map((e, i) => <div key={i} className={`xx-w${e} p50 m50 grayd br5`}>xx-w{e}</div>)
                }
            </div>
        </div>
    )
}
