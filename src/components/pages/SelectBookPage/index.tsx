import React, { lazy } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { activeBookId } from '../../../redux/actionCreators/bookActionCreator'
import LoaderSkeleton from '../../LoaderSkeleton'
import './SelectBookPage.scss'

const ArrowBack = lazy(() => import('../../Icons/ArrowBack'))
const CardBook = lazy(() => import('../../CardBook'))
const Tabs = lazy(() => import('../../Tabs'))
const SubscribeMail = lazy(() => import('../../SubscribeMail'))

export default function SelectBookPage () {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = React.useState(true)
    const { isbn13 } = useParams()
    React.useEffect(() => {
        //@ts-ignore
        isbn13 && dispatch(activeBookId(isbn13, setIsLoading, navigate))
    }, [isbn13])

    return (
        <div className='select-book'>
            <div className='wrapper'>
                <div className='select-book__body'>
                    {!isLoading && <Link to={'/Book-Store'}><ArrowBack/></Link>}
                    {isLoading ? <LoaderSkeleton /> : <CardBook/>}
                    {!isLoading && <Tabs/>}
                    {!isLoading && <SubscribeMail/>}
                </div>
            </div>
        </div>
    )
}
