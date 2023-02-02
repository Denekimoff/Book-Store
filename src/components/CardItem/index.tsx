import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setSearchValue } from '../../redux/actionCreators/bookActionCreator'
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
            <div className='cartbook__mini-info'>
                <h2 className='cartbook__title'>{title}</h2>
                <div className='cartbook__info'>
                    <span className='cartbook__subtitle'>{subtitle ? subtitle : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quibusdam!'}</span>
                </div>
                <div className='cartbook__market'>
                    <div className='cartbook__price'>{price}</div>
                </div>
            </div>
        </div>
    )
}
