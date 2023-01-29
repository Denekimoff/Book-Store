import { MoonLoader } from 'react-spinners'
import './LoaderSpin.scss'

export const LoaderSpin = () => {
    return (
        <div className='spin'><MoonLoader color='blue' size={40}/></div>
    )
}
