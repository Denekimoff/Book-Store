import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, addToFavorite, removeToCart, removeToFavorite } from '../../redux/actionCreators/bookActionCreator'
import { IStore } from '../../redux/types'
import { LikeIcon } from '../Icons/LikeIcon'
import { Modal } from '../Modal'
import { Rating } from '../Rating'
import './CardBookBig.scss'

const CardBookBig = () => {
    const dispatch = useDispatch()

    //Render card information:
    const [ bookStore ] = useSelector((state: IStore) => state.books.activeBook)

    //Refferense and toggle MORE information:
    const infoRef = React.useRef(null)
    const handlerClickOnMore = () => {
        //@ts-ignore
        infoRef.current.classList.toggle('info--active')
    }

    //Add / Remove from FAVORITES:
    const { favorites } = useSelector((state: IStore) => state.books)
    const isIncludeFavorites = favorites.includes(bookStore.isbn13)
    const handlerClickOnLikeCard = (id: any) => {
        if (!isIncludeFavorites) {
            dispatch(addToFavorite(id))
        } else {dispatch(removeToFavorite(id))}
    }

    //Add / Remove from CART:
    const { cart } = useSelector((state: IStore) => state.books)
    const isIncludeCart = cart.includes(bookStore.isbn13)
    const handlerClickOnAddToCart = (id: any) => {
        if (!isIncludeCart) {
            dispatch(addToCart(id))
        } else {dispatch(removeToCart(id))}
    }

    //Modal state and handlers:
    const [ showModal, setShowModal ] = React.useState(false)
    const handlerOnClickImage = () => {
        setShowModal(prev => !prev)
    }
    const handlersOnCloseModal = () => {
        setShowModal(prev => false)
    }

    return (
        <section className='cardbook--bg'>
            <h2 className='cardbook__title'>
                {bookStore.title}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h2>
            <div className='cardbook__main'>
                <div className='cardbook__present'>
                    <div className='cardbook__image' onClick={handlerOnClickImage}>
                        <img src={bookStore.image} alt='book' />
                    </div>
                </div>
                <div className='cardbook__info' ref={infoRef}>
                    <div className='cardbook__market'>
                        <div className='cardbook__price'>{bookStore.price}</div>
                        <Rating/>
                    </div>
                    <div className='cardbook__about'>
                        <div className='cardbook__about__text'><span>Subtitle:</span><span>{bookStore.subtitle}</span></div>
                        <div className='cardbook__about__text'><span>Authors:</span><span>{bookStore.authors}</span></div>
                        <div className='cardbook__about__text'><span>Publisher:</span><span>{`${bookStore.publisher}, ${bookStore.year}`}</span></div>
                        <div className='cardbook__about__text'><span>Language:</span><span>{bookStore.language}</span></div>
                        <div className='cardbook__about__text'><span>Format:</span><span>Paper book / ebook (PDF)</span></div>
                        <div className='cardbook__about__text'><span>Pages:</span><span>{bookStore.pages}</span></div>
                    </div>
                    <div className='cardbook__more' onClick={handlerClickOnMore}>More details</div>
                    <div className='cardbook__buttons'>
                        <button className='cardbook__add' onClick={() => handlerClickOnAddToCart(bookStore.isbn13)}>
                            {!isIncludeCart ? 'Add to cart' : 'Remove from cart'}
                        </button>
                        <button className='cardbook__previews'>
                            <a href={bookStore.url} target='_blank' rel='noopener noreferrer'>Previews book</a>
                        </button>
                        <button className={isIncludeFavorites ? 'cardbook__favorites cardbook__favorites--active' : 'cardbook__favorites'} onClick={() => handlerClickOnLikeCard(bookStore.isbn13)}>
                            {isIncludeFavorites ? 'Remove from Favorites' : 'Add to Favorites'}
                        </button>
                    </div>
                </div>
            </div>
            <Modal controlled={false} active={showModal} onClose={handlersOnCloseModal}>
                <img src={bookStore.image} alt='book'/>
            </Modal>
        </section>
    )
}

export default CardBookBig