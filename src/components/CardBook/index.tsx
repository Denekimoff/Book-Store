import React from 'react'
import { useSelector } from 'react-redux'
import { IStore } from '../../redux/types'
import { LikeIcon } from '../Icons/LikeIcon'
import { Rating } from '../Rating'
import './CardBook.scss'

export const CardBook = () => {
    //@ts-ignore
    const book = JSON.parse(localStorage.getItem('book'))
    const [ book1 ] = useSelector((state: IStore) => state.books.activeBook)

    const data = book1 || book

    return (
        <div className='cardbook cardbook--bg'>
            <h2 className='cardbook__title'>
                {data.title}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h2>
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
            <div className='cardbook__info'>
                <div className='cardbook__market'>
                    <div className='cardbook__price'>${data.price}</div>
                    <Rating/>
                </div>
                <div className='cardbook__about'>
                    <div className='cardbook__about__text'><span>{data.authors}</span></div>
                    <div className='cardbook__about__text'><span>{`${data.publisher}, ${data.year}`}</span></div>
                    <div className='cardbook__about__text'><span>{data.language}</span></div>
                    <div className='cardbook__about__text'><span>Paper book / ebook (PDF)</span></div>
                    <div className='cardbook__about__more'>More details &#11015</div>
                </div>
                <div className='cardbook__buttons'>
                    <button className='cardbook__add'>Add to cart</button>
                    <button className='cardbook__previews'>Previews book</button>
                </div>
            </div>
        </div>
    )
}
