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

        </div>
    )
}
