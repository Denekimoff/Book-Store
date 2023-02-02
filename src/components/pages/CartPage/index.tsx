import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { ThemeContext } from '../../../context'
import { IStore } from '../../../redux/types'
import { CardItem } from '../../CardItem'
import ArrowBack from '../../Icons/ArrowBack'
import './CartPage.scss'


export default function CartPage () {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    const { theme } = React.useContext(ThemeContext)
    const { books } = useSelector((state: IStore) => state.books)
    const { cart } = useSelector((state: IStore) => state.books)
    const dataCart = books.filter(({ isbn13 }) => cart.includes(isbn13))

    return (
        <section className={`cart cart--${theme}`}>
            <div className='wrapper'>
                <div className='cart__body'>
                    <div className='cart__button-back' onClick={goBack}>
                        <ArrowBack/>
                    </div>
                    <div className='cart__container'>
                        <h3 className='cart__title'>Cart</h3>
                        <div className='cart__list'>
                            {
                                !dataCart.length ? <div className='cart__null'>Your cart is empty. Choose the product you like!</div> :
                                    dataCart.map(item => <CardItem key={item.isbn13}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
