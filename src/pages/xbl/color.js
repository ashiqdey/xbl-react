export default function index() {
    return (
        <div className='p2'>
            <h4>Background</h4>
            <div className='flex fww mt2'>
                {
                    [
                        "trans",
                        "white",
                        "bg0",
                        "bg1",
                        "graye",
                        "grayd",
                        "grayb",
                        "graya",
                        "gray9",
                        "gray8",
                        "gray7",
                        "gray6",
                        "gray5",
                        "gray4",
                        "gray3",
                        "gray2",
                        "black",
                        "theme"
                    ].map((e, i) => <div key={i} className={`p1 m50 bslg br5 ${e}`}>{e}</div>)
                }
            </div>


            <div className='mt2'>
                <h4>Background</h4>
                <div className='flex fww'>
                    {
                        [
                            "trans",
                            "white",
                            "bg0",
                            "bg1",
                            "graye",
                            "grayd",
                            "grayb",
                            "graya",
                            "gray9",
                            "gray8",
                            "gray7",
                            "gray6",
                            "gray5",
                            "gray4",
                            "gray3",
                            "gray2",
                            "black",
                            "theme"
                        ].map((e, i) => <div key={i} className={`p1 m50 bslg br5 c${e}`}>c{e}</div>)
                    }
                </div>
            </div>
        </div>
    )
}
