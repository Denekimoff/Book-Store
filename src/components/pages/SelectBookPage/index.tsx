import React, { lazy } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { activeBookId } from '../../../redux/actionCreators/bookActionCreator'
import LoaderSkeleton from '../../LoaderSkeleton'
import { SlickSlider } from '../../SlickSlider'
import { IStore } from '../../../redux/types'
import './SelectBookPage.scss'

const ArrowBack = lazy(() => import('../../Icons/ArrowBack'))
const CardBook = lazy(() => import('../../CardBook'))
const Tabs = lazy(() => import('../../Tabs'))
const SubscribeMail = lazy(() => import('../../SubscribeMail'))

export default function SelectBookPage () {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)
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
                    <div className='select-book__link' onClick={goBack}><ArrowBack/></div>
                    {isLoading ? <LoaderSkeleton /> : <CardBook/>}
                    {!isLoading && <Tabs />}
                    {!isLoading && <SubscribeMail />}
                    {books.length ? <SlickSlider /> : <></>}
                </div>
            </div>
        </div>
    )
}
