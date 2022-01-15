import { Ripple } from "../../components/Ripple"


export default function index() {
    return (
        <div className='p2'>
            <h1>Ripple effect</h1>

            <div className="mt2">
                <Ripple>
                    <div className="p2 br5 bslg">helllo</div>
                </Ripple>

                <Ripple>
                    <div className="mt2 p2 br5 theme cwhite light">helllo</div>
                </Ripple>

                <Ripple>
                    <div className="mt2 p2 br5 bslg">helllo</div>
                </Ripple>

                <Ripple>
                    <div className="mt2 p2 br5 theme cwhite light">helllo</div>
                </Ripple>


                <div className="row">
                    <div className="w50 pr1">
                        <Ripple>
                            <div className="mt2 p2 br5 bslg">helllo</div>
                        </Ripple>
                    </div>

                    <div className="w50 pl1">
                        <Ripple>
                            <div className="mt2 p2 br5 theme cwhite light">helllo</div>
                        </Ripple>
                    </div>
                </div>




                <Ripple onClick={() => console.log("button 1")}>
                    <button className="but mt2 br5 bslg mr1" >helllo 1</button>
                </Ripple>

                <Ripple variant="light">
                    <button className="but mt2 theme cwhite light br5 bslg" onClick={() => console.log("button 2")}>helllo 2</button>
                </Ripple>
            </div>
        </div>
    )
}
