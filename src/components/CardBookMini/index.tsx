import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { activeBookId } from '../../redux/actionCreators/bookActionCreator'
import { Rating } from '../Rating'

import './CardBookMini.scss'

export interface ICardBookMini {
  isbn13: string,
  title?: string,
  image?: string,
  authors?: string,
  publisher?: string,
  year?: string,
  price?: string,
}

export const CardBookMini = ({ isbn13, title, image, authors, publisher, year, price }: ICardBookMini) => {
    const dispatch = useDispatch()

    return (
        <div className='cardbook cardbook--sm' onClick={() => dispatch(activeBookId(isbn13))}>
            <Link to={'/'}>
                <div className='cardbook__present'>
                    <div className='cardbook__image'>
                        <img src={image} alt='book' />
                    </div>
                </div>
                <div className='cardbook__mini-info'>
                    <h2 className='cardbook__title'>{title}</h2>
                    <div className='cardbook__info'>
                  by
                        <span className='cardbook__author'>{authors}, {publisher} {year}</span>
                    </div>
                    <div className='cardbook__market'>
                        <div className='cardbook__price'>${price}</div>
                        <Rating/>
                    </div>
                </div>
            </Link>
        </div>
    )
}
