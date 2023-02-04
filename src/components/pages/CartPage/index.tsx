import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from '../../../context'
import { clearCart } from '../../../redux/actionCreators/bookActionCreator'
import { IBook, IStore } from '../../../redux/types'
import { CardBookCart } from '../../CardBookCart'
import ArrowBack from '../../Icons/ArrowBack'
import { Modal } from '../../Modal'
import './CartPage.scss'

export default function CartPage () {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    const { theme } = React.useContext(ThemeContext)

    //Calculated and Render Total Price
    const { books } = useSelector((state: IStore) => state.books)
    const { cart } = useSelector((state: IStore) => state.books)
    const dataCart = books?.filter(({ isbn13 }) => cart?.includes(isbn13))
    const dataPrice = dataCart?.map((item: IBook) => (item.price)?.slice(1))
    //@ts-ignore
    const totalPrice = dataPrice?.map(item => +item).reduce((acc, item) => acc + item , 0).toFixed(2)

    //Modal state and handlers:
    const [ showModal, setShowModal ] = React.useState(false)
    const handlerOnClickOrder = () => {
        if (totalPrice === '0.00') return
        setShowModal(prev => !prev)
    }
    const handlersOnCloseModal = () => {
        setShowModal(false)
    }
    const handlerOnConfirmModal = () => {
        setShowModal(prev => !prev)
        const newCart: never[] = []
        dispatch(clearCart(newCart))
    }

    return (
        <section className={`cart cart--${theme}`}>
            <Modal controlled={true} active={showModal} title={'Confirm'} onConfirm={handlerOnConfirmModal} onClose={handlersOnCloseModal}>
                {`Pay $${totalPrice} for you order?`}
            </Modal>
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
                                    dataCart.map(({ title, subtitle, isbn13, price, image }) => <CardBookCart key={isbn13}
                                        title={title} subtitle={subtitle} isbn13={isbn13} price={price} image={image}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
