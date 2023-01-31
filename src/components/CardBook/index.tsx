import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToFavorite } from '../../redux/actionCreators/bookActionCreator'
import { IStore } from '../../redux/types'
import { LikeIcon } from '../Icons/LikeIcon'
import { Rating } from '../Rating'
import './CardBook.scss'

const CardBook = () => {
    const dispatch = useDispatch()
    const infoRef = React.useRef(null)
    const handlerClickOnMore = () => {
        //@ts-ignore
        infoRef.current.classList.toggle('info--active')
    }


    const [ bookStore ] = useSelector((state: IStore) => state.books.activeBook)
    //@ts-ignore
    const bookLocal = JSON.parse(localStorage.getItem('book'))
    const data = bookStore || bookLocal

    const handlerClickOnLikeCard = (id: any) => {
        dispatch(addToFavorite(id))
    }
    const { favorites } = useSelector((state: IStore) => state.books)
    const isIncludeFavorites = favorites.includes(data.isbn13)

    return (
        <div className='cardbook--bg'>
            <h2 className='cardbook__title'>
                {data.title}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h2>
            <div className='cardbook__main'>
                <div className='cardbook__present'>
                    <div className='cardbook__image'>
                        <img src={data.image} alt='book' />
                    </div>
                    <div className='cardbook__like'>
                        <div className={isIncludeFavorites ? 'cardbook__like-button cardbook__like-button--active' : 'cardbook__like-button'} onClick={() => handlerClickOnLikeCard(data.isbn13)}>
                            <LikeIcon/>
                        </div>
                    </div>
                </div>
                <div className='cardbook__info' ref={infoRef}>
                    <div className='cardbook__market'>
                        <div className='cardbook__price'>{data.price}</div>
                        <Rating/>
                    </div>
                    <div className='cardbook__about'>
                        <div className='cardbook__about__text'><span>Subtitle:</span><span>{data.subtitle}</span></div>
                        <div className='cardbook__about__text'><span>Authors:</span><span>{data.authors}</span></div>
                        <div className='cardbook__about__text'><span>Publisher:</span><span>{`${data.publisher}, ${data.year}`}</span></div>
                        <div className='cardbook__about__text'><span>Language:</span><span>{data.language}</span></div>
                        <div className='cardbook__about__text'><span>Format:</span><span>Paper book / ebook (PDF)</span></div>
                        <div className='cardbook__about__text'><span>Pages:</span><span>{data.pages}</span></div>
                    </div>
                    <div className='cardbook__more' onClick={handlerClickOnMore}>More details</div>
                    <div className='cardbook__buttons'>
                        <button className='cardbook__add'>Add to cart</button>
                        <button className='cardbook__previews'><a href={data.url} target='_blank' rel='noopener noreferrer'>Previews book</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardBook