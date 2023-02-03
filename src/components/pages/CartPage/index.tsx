import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from '../../../context'
import { clearCart } from '../../../redux/actionCreators/bookActionCreator'
import { IBook, IStore } from '../../../redux/types'
import { CardItem } from '../../CardItem'
import ArrowBack from '../../Icons/ArrowBack'
import './CartPage.scss'


export default function CartPage () {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    const { theme } = React.useContext(ThemeContext)
    const { books } = useSelector((state: IStore) => state.books)
    const { cart } = useSelector((state: IStore) => state.books)
    const dataCart = books?.filter(({ isbn13 }) => cart?.includes(isbn13))
    const dataPrice = dataCart?.map((item: IBook) => (item.price)?.slice(1))
    //@ts-ignore
    const totalPrice = dataPrice?.map(item => +item).reduce((acc, item) => acc + item , 0) || '00.00'

    const handlerOnClickOrder = () => {
        if (totalPrice === '00.00') return alert('Add product in cart')
        const conf = window.confirm('Confirm your order?')
        if (conf) {
            const newCart: never[] = []
            dispatch(clearCart(newCart))
            alert(`Order successfully paid: $${totalPrice}.`)
        } else return
    }

    return (
        <section className={`cart cart--${theme}`}>
            <div className='wrapper'>
                <div className='cart__body'>
                    <div className='cart__button-back' onClick={goBack}>
                        <ArrowBack/>
                    </div>
                    <div className='cart__container'>
                        <h3 className='cart__title'>Cart</h3>
                        <div className='cart__total'>
                            <button className='cart__order' onClick={handlerOnClickOrder}>
                                To order :<span>${totalPrice}</span>
                            </button>
                        </div>
                        <div className='cart__list'>
                            {
                                !dataCart.length ? <div className='cart__null'>Your cart is empty. Choose the product you like!</div> :
                                    dataCart.map(({ title, subtitle, isbn13, price, image }) => <CardItem key={isbn13}
                                        title={title} subtitle={subtitle} isbn13={isbn13} price={price} image={image}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
