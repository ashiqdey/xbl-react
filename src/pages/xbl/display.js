export default function index() {
    return (
        <div className='p2'>
            <h1>Display</h1>

            <div className="mt2">
                <h4>Display</h4>
                {
                    [
                        { name: "dn", comment: "display : none" },
                        { name: "db", comment: "display : block" },
                        { name: "dib", comment: "display : inline block" },
                        { name: "flex", comment: "display : flex" },
                        { name: "fww", comment: "felx-wrap : wrap" },
                        { name: "aifs", comment: "align-items : flex-start" },
                        { name: "aic", comment: "align-items : center" },
                        { name: "aife", comment: "align-items : flex-end" },
                        { name: "jcc", comment: "justify-content : center" },
                        { name: "jcsb", comment: "justify-content : space-between" },
                        { name: "jcsa", comment: "justify-content : space-around" },
                        { name: "jcfe", comment: "justify-content : flex-end" },
                        { name: "fdc", comment: "flex-direction : column" },
                        { name: "ic", comment: "Combination of flex aic jcc" }
                    ].map((e, i) => <div key={i} className={`${e.name} p1 m1 bslg br5`}>{e.name} - {e.comment}</div>)
                }
            </div>


            <h1 className="mt5">Flex direction</h1>

            <div className="flex fdc mt1 theme-01 p1">
                <div className="ic50 graye">1</div>
                <div className="ic30 grayd">2</div>
                <div className="ic20 graye">3</div>
            </div>


            <div className="flex fdc mt1 theme-01 p1">
                <div className="ic50 graye">1</div>
                <div className="ic30 grayd">2</div>
                <div className="ic20 graye">3</div>
            </div>


            <h1 className="mt5">Align items</h1>

            <h4 className="mt2">align-items : flex-start</h4>
            <div className="flex aifs mt1 theme-01 p1">
                <div className="ic50 graye">1</div>
                <div className="ic30 grayd">2</div>
                <div className="ic20 graye">3</div>
            </div>

            <h4 className="mt2">align-items : center</h4>
            <div className="flex aic mt1 theme-01 p1">
                <div className="ic50 graye">1</div>
                <div className="ic30 grayd">2</div>
                <div className="ic20 graye">3</div>
            </div>

            <h4 className="mt2">align-items : flex-end</h4>
            <div className="flex aife mt1 theme-01 p1">
                <div className="ic50 graye">1</div>
                <div className="ic30 grayd">2</div>
                <div className="ic20 graye">3</div>
            </div>



            <h1 className="mt5">Justify content</h1>

            <h4 className="mt2">justify-content : space-between</h4>
            <div className="row jcsb mt1 theme-01 p1">
                <div className="w25 p1 graye">Block 1</div>
                <div className="w25 p1 grayd">Block 2</div>
                <div className="w25 p1 graye">Block 3</div>
            </div>


            <h4 className="mt2">justify-content : space-around</h4>
            <div className="row jcsa mt1 theme-01 p1">
                <div className="w25 p1 graye">Block 1</div>
                <div className="w25 p1 grayd">Block 2</div>
                <div className="w25 p1 graye">Block 3</div>
            </div>

            <h4 className="mt2">justify-content : center</h4>
            <div className="row jcc mt1 theme-01 p1">
                <div className="w25 p1 graye">Block 1</div>
                <div className="w25 p1 grayd">Block 2</div>
                <div className="w25 p1 graye">Block 3</div>
            </div>

            <h4 className="mt2">justify-content : flex-start</h4>
            <div className="row jcfs mt1 theme-01 p1">
                <div className="w25 p1 graye">Block 1</div>
                <div className="w25 p1 grayd">Block 2</div>
                <div className="w25 p1 graye">Block 3</div>
            </div>

            <h4 className="mt2">justify-content : flex-end</h4>
            <div className="row jcfe mt1 theme-01 p1">
                <div className="w25 p1 graye">Block 1</div>
                <div className="w25 p1 grayd">Block 2</div>
                <div className="w25 p1 graye">Block 3</div>
            </div>

        </div>
    )
}
