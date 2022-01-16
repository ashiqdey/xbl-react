import { Input, Spinner } from "../../../components/Form"

export default function index() {
    return (
        <div className='p2'>
            <h1>Forms</h1>

            <div className="mt2">
                <h4>Checkbox & radio</h4>
                <Input type="checkbox" label="Checkbox 1" name="choice" />
                <Input type="checkbox" label="Checkbox 2" name="choice" />
                <Input type="radio" label="Radio 1" name="choice" />
                <Input type="radio" label="Radio 2" name="choice" />
            </div>

            <div className="mt2">
                <h4>Input & textarea</h4>
                <div>
                    <Input type="text" label="Name" />
                </div>
                <div>
                    <Input type="password" label="Password" />
                </div>

                <div>
                    <Input type="tel" className="phone" prefix="+91" label="Phone number" />
                </div>

                <div>
                    <Input type="textarea" label="Write something..." />
                </div>
            </div>

            <div className="mt1">
                <Input type="switch" />
            </div>

            <div className="mt2">
                <h4>Spinner</h4>
                <div className='flex'>
                    <Spinner />
                    <Spinner size="small" />
                </div>
            </div>

        </div>
    )
}
