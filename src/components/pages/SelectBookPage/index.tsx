import React, { lazy } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { activeBookId } from '../../../redux/actionCreators/bookActionCreator'
import LoaderSkeleton from '../../LoaderSkeleton'
import './SelectBookPage.scss'
import { SlickSlider } from '../../SlickSlider'
import { IStore } from '../../../redux/types'

const ArrowBack = lazy(() => import('../../Icons/ArrowBack'))
const CardBook = lazy(() => import('../../CardBook'))
const Tabs = lazy(() => import('../../Tabs'))
const SubscribeMail = lazy(() => import('../../SubscribeMail'))

export default function SelectBookPage () {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { books } = useSelector((state: IStore) => state.books)
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
                    {!isLoading && <Link className='select-book__link' to={'/Book-Store'}><ArrowBack/></Link>}
                    {isLoading ? <LoaderSkeleton /> : <CardBook/>}
                    {!isLoading && <Tabs />}
                    {!isLoading && <SubscribeMail />}
                    {books.length ? <SlickSlider /> : <></>}
                </div>
            </div>
        </div>
    )
}
