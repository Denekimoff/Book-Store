import { useSelector } from 'react-redux'
import { IStore } from '../../redux/types'
import { CardBookMini } from '../CardBookMini'
import LoaderMiniSkeleton from '../LoaderMiniSkeleton'

export default function BookContainer ({ load }: any) {
    const { books } = useSelector((state: IStore) => state.books)

    return (
        <div className='main__list' style={{minHeight: '25vh'}}>
            {load ? [...new Array(10)].map((_, i) => <LoaderMiniSkeleton key={i}/>) :
                books.map(({ title, subtitle, isbn13, price, image }) => <CardBookMini key={isbn13} title={title} subtitle={subtitle} isbn13={isbn13} price={price} image={image}/>)
            }
            {!books.length && <div>К сожалению ничем не можем вам помочь. Всего хоро-шего!</div>}
        </div>
    )
}
