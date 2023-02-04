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
    //@ts-ignore
    const bookLocal = JSON.parse(localStorage.getItem('book'))
    const data = bookStore || bookLocal

    //Refferense and toggle MORE information:
    const infoRef = React.useRef(null)
    const handlerClickOnMore = () => {
        //@ts-ignore
        infoRef.current.classList.toggle('info--active')
    }

    //Add / Remove from FAVORITES:
    const { favorites } = useSelector((state: IStore) => state.books)
    const isIncludeFavorites = favorites.includes(data.isbn13)
    const handlerClickOnLikeCard = (id: any) => {
        if (!isIncludeFavorites) {
            dispatch(addToFavorite(id))
        } else {dispatch(removeToFavorite(id))}
    }

    //Add / Remove from CART:
    const { cart } = useSelector((state: IStore) => state.books)
    const isIncludeCart = cart.includes(data.isbn13)
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
                {data.title}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h2>
            <div className='cardbook__main'>
                <div className='cardbook__present'>
                    <div className='cardbook__image' onClick={handlerOnClickImage}>
                        <img src={data.image} alt='book' />
                    </div>
                    <div className={isIncludeFavorites ? 'cardbook__like cardbook__like--active' : 'cardbook__like'}>
                        <div className='cardbook__like-button' onClick={() => handlerClickOnLikeCard(data.isbn13)}>
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
                        <button className='cardbook__add' onClick={() => handlerClickOnAddToCart(data.isbn13)}>{!isIncludeCart ? 'Add to cart' : 'Remove from cart'}</button>
                        <button className='cardbook__previews'><a href={data.url} target='_blank' rel='noopener noreferrer'>Previews book</a></button>
                    </div>
                </div>
            </div>
            <Modal controlled={false} active={showModal} onClose={handlersOnCloseModal}>
                <img src={data.image} alt='book'/>
            </Modal>
        </section>
    )
}

export default CardBookBig