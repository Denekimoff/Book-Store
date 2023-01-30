import React, { lazy } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ThemeContext } from '../../../context'
import { loadBooks } from '../../../redux/actionCreators/bookActionCreator'
import { IStore } from '../../../redux/types'
import './MainPage.scss'

const BookContainer = lazy(() => import('../../BookContainer'))
const Pagination = lazy(() => import('../../Pagination'))
const SubscribeMail = lazy(() => import('../../SubscribeMail'))

export default function MainPage () {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [ isLoading, setIsLoading] = React.useState(true)
    const { theme } = React.useContext(ThemeContext)
    const { searchValue } = useSelector((state: IStore) => state.books)


    React.useEffect(() => {
        dispatch(loadBooks(setIsLoading, navigate, searchValue))
    }, [searchValue])

    return (
        <main className={`main main--${theme}`}>
            <div className='wrapper'>
                <div className='main__body'>
                    <h2 className='main__title'>New releases books</h2>
                    <BookContainer load={isLoading}/>
                    <Pagination/>
                    <SubscribeMail/>
                </div>
            </div>
        </main>
    )
}
