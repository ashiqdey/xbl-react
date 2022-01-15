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
            <h1>Responsive</h1>
            <div>
                <a href="#width-default">Width (Default)</a><br />
                <a href="#width-sm"><strong>sm</strong> (small : screen &gt; 568px)</a><br />
                <a href="#width-md"><strong>md</strong> (medium : screen &gt; 768px)</a><br />
                <a href="#width-lg"><strong>lg</strong> (large : screen &gt; 992px)</a><br />
                <a href="#width-xl"><strong>xl</strong> (extra large : screen &gt; 1200px)</a><br />
                <a href="#width-xx"><strong>xx</strong> (extra extra large : screen &gt; 1400px)</a><br />
            </div>

            <div className="mt2">
                <div className="flex zebra mt2">
                    <div className="p1 graye">Block 1</div>
                    <div className="p1 graye">Block 2</div>
                </div>

                <div className="flex zebra mt2">
                    <div className="w50 p1 graye">Block 1</div>
                    <div className="w50 p1 graye">Block 2</div>
                </div>

                <div className="flex zebra mt2">
                    <div className="w40 p1 graye">Block 1</div>
                    <div className="w60 p1 graye">Block 2</div>
                </div>

                <div className="row zebra mt2">
                    <div className="sm-w40 p1 graye">Block 1</div>
                    <div className="sm-w60 p1 graye">Block 2</div>
                </div>


            </div>
        </div>
    )
}
