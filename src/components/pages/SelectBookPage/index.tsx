import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { activeBookId } from '../../../redux/actionCreators/bookActionCreator'
import { IStore } from '../../../redux/types'
import LoaderSkeleton from '../../LoaderSkeleton'
import { SlickSlider } from '../../SlickSlider'
import ArrowBack from '../../Icons/ArrowBack'
import CardBook from '../../CardBookBig'
import Tabs from '../../Tabs'
import SubscribeMail from '../../SubscribeMail'
import './SelectBookPage.scss'

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isbn13])

    return (
        <div className='select-book'>
            <div className='wrapper'>
                <div className='select-book__body'>
                    <div className='select-book__link' onClick={goBack}><ArrowBack/></div>
                    {isLoading ? <LoaderSkeleton /> : <CardBook/>}
                    {!isLoading && <Tabs />}
                    <SubscribeMail />
                    {books.length ? <SlickSlider /> : <></>}
                </div>
            </div>
        </div>
    )
}
