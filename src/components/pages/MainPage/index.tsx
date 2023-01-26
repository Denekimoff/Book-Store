import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThemeContext } from '../../../context'
import { loadBooks } from '../../../redux/actionCreators/bookActionCreator'
import { IStore } from '../../../redux/types'
import { CardBookMini } from '../../CardBookMini'
import { Pagination } from '../../Pagination'
import { SubscribeMail } from '../../SubscribeMail'
import './MainPage.scss'

export const MainPage = () => {
    const dispatch = useDispatch()
    const { theme } = React.useContext(ThemeContext)
    const { searchValue } = useSelector((state: IStore) => state.books)
    const { loading } =  useSelector((state: IStore) => state.books)
    const { books } = useSelector((state: IStore) => state.books)

    React.useEffect(() => {
        dispatch(loadBooks(searchValue, loading))
    }, [])

    return (
        <main className={`main main--${theme}`}>
            <div className='wrapper'>
                <div className='main__body'>
                    <h2 className='main__title'>New releases books</h2>
                    {!(books.length) ?
                        <div className='main__null'><p>{'НЕТ КНИГ :('}</p><p>Звоните разработчику!</p></div>
                        : <div className='main__list'>
                            {books.map(({ title, subtitle, isbn13, price, image }) => <CardBookMini key={isbn13} title={title} subtitle={subtitle} isbn13={isbn13} price={price} image={image}/>)}
                        </div>}
                    {books.length > 5 && <Pagination/>}
                    <SubscribeMail/>
                </div>
            </div>
        </main>
    )
}
