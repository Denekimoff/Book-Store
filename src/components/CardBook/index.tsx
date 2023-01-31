import React from 'react'
import { useSelector } from 'react-redux'
import { IStore } from '../../redux/types'
import { LikeIcon } from '../Icons/LikeIcon'
import { Rating } from '../Rating'
import './CardBook.scss'

const CardBook = () => {
    const infoRef = React.useRef(null)
    const handlerClickOnMore = () => {
        //@ts-ignore
        infoRef.current.classList.toggle('info--active')
    }
    //@ts-ignore
    const bookLocal = JSON.parse(localStorage.getItem('book'))
    const [ bookStore ] = useSelector((state: IStore) => state.books.activeBook)
    const data = bookStore || bookLocal

    console.log(data)

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
                        <div className='cardbook__like-button'>
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