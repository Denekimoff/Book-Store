import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadBooks } from '../../redux/actionCreators/bookActionCreator'
import { IStore } from '../../redux/types'
import { CardBookMini } from '../CardBookMini'
import './AllCardBook.scss'

export const AllCardBook = () => {
    const dispatch = useDispatch()
    const { searchValue } = useSelector((state: IStore) => state.books)
    const { loading } =  useSelector((state: IStore) => state.books)
    const { books } = useSelector((state: IStore) => state.books)

    React.useEffect(() => {
        dispatch(loadBooks(searchValue, loading))
    }, [])

    return (
        <div className='main__list'>
            {books.map(({ title, isbn13, price, image }) => <CardBookMini key={isbn13} title={title} isbn13={isbn13} price={price} image={image}/>)}
        </div>
    )
}
