import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchValue } from '../../redux/actionCreators/bookActionCreator'
import { IStore } from '../../redux/types'
import { AiOutlineClose } from 'react-icons/ai'
import { BiMenuAltRight } from 'react-icons/bi'
import { Modal } from '../Modal'
import { logOut } from '../../redux/actionCreators/userActionCreators'
import './NavigationMenu.scss'
import { LogoutIcon } from '../Icons/LogoutIcon'

export default function Navbar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state: IStore) => state.users)

    //Render count cart
    const { cart } = useSelector((state: IStore) => state.books)

    //State burger menu
    const [menuOpen, setMenuOpen] = useState(false)
    const [size, setSize] = useState({
        width: 0,
        height: 0,
    })
    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])
    useEffect(() => {
        if (size.width > 900 && menuOpen) {
            setMenuOpen(false)
        }
    }, [size.width, menuOpen])
    const menuToggleHandler = () => {
        setMenuOpen((prev) => !prev)
    }

    //Close menu on click link
    const handlerOnClickLink = () => {
        if(menuOpen) setMenuOpen(prev => !prev)
        dispatch(setSearchValue(''))
    }

    const handlerClicker = (href: string) => {
        navigate(`/Book-Store/${href}`)
    }

    //Modal state and handlers:
    const [ showModal, setShowModal ] = React.useState(false)
    const handlerOnClickName = () => {
        setShowModal(prev => !prev)
    }
    const handlersOnCloseModal = () => {
        setShowModal(false)
    }
    const handlerOnConfirmModal = () => {
        setShowModal(prev => !prev)
        dispatch(logOut())
        navigate('/Book-Store')
    }

    return (
        <>
            <Modal controlled={true} active={showModal} title={'Confirm'} onConfirm={handlerOnConfirmModal} onClose={handlersOnCloseModal}>You really want LogOut?</Modal>
            <nav className={`header__nav ${menuOpen && size.width < 900 ? 'isMenu' : ''}`}>
                <ul onClick={handlerOnClickLink}>
                    <li onClick={() => handlerClicker('favorites')}>
                        Favorites
                    </li>
                    <li onClick={() => handlerClicker('cart')}>
                        Cart
                        {(user !== null) &&(cart.length > 0) && <div className='cart__length'>{cart.length}</div>}
                    </li>
                    <li onClick={() => handlerClicker('setting')}>
                        Setting
                    </li>
                    {(user !== null) ? (<li onClick={handlerOnClickName}><LogoutIcon/></li>)
                        : (<>
                            <Link to='/Book-Store/register'>
                                <button className='btn'>Register</button>
                            </Link>
                            <Link to='/Book-Store/login'>
                                <button className='btn btn__login'>Login</button>
                            </Link>
                        </>)}
                </ul>
            </nav>
            <div className='header__toggle'>
                {!menuOpen ? (
                    <BiMenuAltRight onClick={menuToggleHandler} />
                ) : (
                    <AiOutlineClose onClick={menuToggleHandler} />
                )}
            </div>
        </>
    )
}
