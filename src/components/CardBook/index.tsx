import React from 'react'
import { Like } from '../Icons/Like'
import { Rating } from '../Rating'

import './CardBook.scss'

export interface ICardBook {
  className: string
  title: string
  image: string
  author: string
  publisher: string
  price: string
  language: string
  format: string
}

export const CardBook = ({ className, title, image, author, publisher, price, language, format }: Partial<ICardBook>) => {
    return (
        <div className={`cardbook cardbook--bg ${className}`}>
            <h2 className='cardbook__title'>
                {title}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h2>
            <div className='cardbook__present'>
                <div className='cardbook__image'>{image}</div>
                <div className='cardbook__like'>
                    <div className='cardbook__like-button'>
                        <Like/>
                    </div>
                </div>
            </div>
            <div className='cardbook__mini-info'>
                <h2 className='cardbook__title'>{title}</h2>
                <div className='cardbook__info'>
                  by
                    <span className='cardbook__author'>{author}</span>
                    <span className='release'>{publisher}</span>
                </div>
                <div className='cardbook__market'>
                    <div className='cardbook__price'>${price}</div>
                    <Rating/>
                </div>
            </div>
            <div className='cardbook__info'>
                <div className='cardbook__market'>
                    <div className='cardbook__price'>${price}</div>
                    <Rating/>
                </div>
                <div className='cardbook__about'>
                    <div className='cardbook__about__text'><span>{author}</span></div>
                    <div className='cardbook__about__text'><span>{publisher}</span></div>
                    <div className='cardbook__about__text'><span>{language}</span></div>
                    <div className='cardbook__about__text'><span>{format}</span></div>
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
