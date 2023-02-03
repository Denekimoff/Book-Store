import { useSelector } from 'react-redux'
import { IStore } from '../../redux/types'
import { CardBookMini } from '../CardBookMini'
import LoaderMiniSkeleton from '../LoaderMiniSkeleton'
import Pagination from '../Pagination'

export default function BookContainer ({ loading }: any) {
    const { books } = useSelector((state: IStore) => state.books)
    const currentPage = useSelector((state: IStore) => state.setting.currentPage)
    const rowsPerPage = useSelector((state: IStore) => state.setting.rowsPerPage)

    const index = (currentPage - 1) * rowsPerPage
    const booksRender = [...books].splice(index, rowsPerPage)

    return (
        <>
            <div className='main__list' style={{minHeight: '25vh'}}>
                {loading ? [...new Array(10)].map((_, i) => <LoaderMiniSkeleton key={i}/>) :
                    booksRender.map((book) => <CardBookMini key={book.isbn13} {...book} />)
                }
                {!books.length && <div>К сожалению ничем не можем вам помочь. Всего хоро-шего!</div>}
            </div>
            {books.length ? <Pagination/> : <></>}
        </>

    )
}
