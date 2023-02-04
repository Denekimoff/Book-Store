import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeToCart, setSearchValue } from '../../redux/actionCreators/bookActionCreator'
import { ICardBookMini } from '../CardBookMini'
import { Modal } from '../Modal'
import './CardBookCart.scss'

export const CardBookCart = ({ isbn13, title, subtitle, image, price }: ICardBookMini) => {
    const dispatch = useDispatch()
    const handlerSearchClear = () => dispatch(setSearchValue(''))

    //Modal state and handlers:
    const [ showModal, setShowModal ] = React.useState(false)
    const handlerOnDeleteItem = () => {
        setShowModal(prev => !prev)
    }
    const handlersOnCloseModal = () => {
        setShowModal(false)
    }

    const handlerOnConfirmModal = () => {
        setShowModal(prev => !prev)
        dispatch(removeToCart(isbn13))
    }

    return (
        <>
            <Modal controlled={true} active={showModal} title={'Confirm'} onConfirm={handlerOnConfirmModal} onClose={handlersOnCloseModal}>
                Delete from card?
            </Modal>

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
                    <button className='cartbook__remove' onClick={handlerOnDeleteItem}>X</button>
                    <div className='cartbook__price'>{price}</div>
                </div>
            </div>
        </>
    )
}
