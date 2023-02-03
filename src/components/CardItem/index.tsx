import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeToCart, setSearchValue } from '../../redux/actionCreators/bookActionCreator'
import { ICardBookMini } from '../CardBookMini'
import './CartItem.scss'

export const CardItem = ({ isbn13, title, subtitle, image, price }: ICardBookMini) => {
    const dispatch = useDispatch()
    const handlerSearchClear = () => dispatch(setSearchValue(''))

    return (
        <div className='cartbook' onClick={handlerSearchClear}>
            <div className='cartbook__present'>
                <Link to={`/Book-Store/${isbn13}`} className='cartbook__link'>
                    <div className='cartbook__image'>
                        <img src={image} alt={title} />
                    </div>
                </Link>
            </div>
            <div className='cartbook__info'>
                <h2 className='cartbook__title'>{title}</h2>
                <p className='cartbook__subtitle'>{subtitle ? subtitle : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quibusdam!'}</p>
            </div>
            <div className='cartbook__market'>
                <div className='cartbook__price'>{price}</div>
            </div>
            <button className='cartbook__remove' onClick={() => dispatch(removeToCart(isbn13))}>X</button>
        </div>
    )
}
