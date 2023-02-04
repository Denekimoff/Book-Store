import { useNavigate } from 'react-router-dom'
import'./NotFoundPage.scss'

export default function NotFoundPage () {
    const navigate = useNavigate()

    return (
        <div className='not__found'>UUUPS...THIS PAGE DOESN'T EXIST.<span onClick={() => navigate('/Book-Store')}> GO HOME.</span></div>
    )
}
