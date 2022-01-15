export default function index() {

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
                <div className="row zebra mt2">
                    <div className="p1 graye">Block 1</div>
                    <div className="p1 graye">Block 2</div>
                </div>

                <div className="row zebra mt2">
                    <div className="w50 p1 graye">Block 1</div>
                    <div className="w50 p1 graye">Block 2</div>
                </div>

                <div className="row zebra mt2">
                    <div className="w40 p1 graye">Block 1</div>
                    <div className="w60 p1 graye">Block 2</div>
                </div>

                <h1 className="mt5">Responsive</h1>

                <h4 className="mt2">screen  > 0</h4>
                <div className="row zebra mt1">
                    <div className="w30 p1 graye">Block 1</div>
                    <div className="w70 p1 graye">Block 2</div>
                    <div className="p1 grayd">Block 3</div>
                </div>


                <h4 className="mt2">screen &gt; 584px</h4>
                <div className="row zebra mt1">
                    <div className="sm-w30 p1 graye">Block 1</div>
                    <div className="sm-w70 p1 graye">Block 2</div>
                    <div className="p1 grayd">Block 3</div>
                </div>

                <h4 className="mt2">screen &gt; 768px</h4>
                <div className="row mt1">
                    <div className="sm-w30 md-w70 p1 graye">Block 1</div>
                    <div className="sm-w70 md-w30 p1 grayd">Block 2</div>
                    <div className="p1 grayc">Block 3</div>
                </div>

                <h4 className="mt2">screen &gt; 992px</h4>
                <div className="row mt1">
                    <div className="sm-w30 md-w70 lg-w50 p1 graye">Block 1</div>
                    <div className="sm-w70 md-w30 lg-w50 p1 grayd">Block 2</div>
                    <div className="p1 grayc">Block 3</div>
                </div>

                <h4 className="mt2">screen &gt; 1200px</h4>
                <div className="row mt1">
                    <div className="xl-w30 p1 graye">Block 1</div>
                    <div className="xl-w70 p1 grayd">Block 2</div>
                    <div className="p1 grayc">Block 3</div>
                </div>

                <h4 className="mt2">screen &gt; 1400px</h4>
                <div className="row mt1">
                    <div className="xx-w30 p1 graye">Block 1</div>
                    <div className="xx-w70 p1 grayd">Block 2</div>
                    <div className="p1 grayc">Block 3</div>
                </div>







            </div>
        </div>
    )
}
