import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loadBooks } from '../../redux/actionCreators/bookActionCreator'
import { IStore } from '../../redux/types'
import { CardBookMini } from '../CardBookMini'
import LoaderMiniSkeleton from '../LoaderMiniSkeleton'
import Pagination from '../Pagination'

export default function BookContainer () {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [ isLoading, setIsLoading] = React.useState(true)
    const { searchValue } = useSelector((state: IStore) => state.books)

    React.useEffect(() => {
        dispatch(loadBooks(setIsLoading, navigate, searchValue))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue])

    //Render on page slice BOOKS and SKELETON
    const { books } = useSelector((state: IStore) => state.books)
    const currentPage = useSelector((state: IStore) => state.setting.currentPage)
    const rowsPerPage = useSelector((state: IStore) => state.setting.rowsPerPage)
    const index = (currentPage - 1) * rowsPerPage
    const booksRender = [...books].splice(index, rowsPerPage)
    const skeletonRender = [...new Array(rowsPerPage)]

    return (
        <>
            <div className='main__list' style={{minHeight: '55vh'}}>
                {isLoading ? skeletonRender.map((_, i) => <LoaderMiniSkeleton key={i}/>) :
                    booksRender.map((book) => <CardBookMini key={book.isbn13} {...book} />)
                }
                {!books.length && <div className='main__null'>К сожалению ничем не можем вам помочь. Всего хоро-шего!</div>}
            </div>
            {books.length ? <Pagination/> : <></>}
        </>

    )
}
