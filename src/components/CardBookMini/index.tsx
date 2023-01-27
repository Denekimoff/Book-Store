import React from 'react'
import { Link } from 'react-router-dom'
import { Rating } from '../Rating'

import './CardBookMini.scss'

export interface ICardBookMini {
  isbn13: number,
  title?: string,
  subtitle?: string,
  image?: string,
  price?: string,
}

export const CardBookMini = ({ isbn13, title, subtitle, image, price }: ICardBookMini) => {
    return (
        <div className='cardbook cardbook--sm'>
            <div className='cardbook__present'>
                <Link to={`/Book-Store/${isbn13}`}>
                    <div className='cardbook__image'>
                        <img src={image} alt='book' />
                    </div>
                </Link>
            </div>
            <div className='cardbook__mini-info'>
                <h2 className='cardbook__title'>{title}</h2>
                <div className='cardbook__info'>
                    <span className='cardbook__subtitle'>{subtitle}</span>
                </div>
                <div className='cardbook__market'>
                    <div className='cardbook__price'>{price}</div>
                    <Rating/>
                </div>
            </div>
        </div>
    )
}
