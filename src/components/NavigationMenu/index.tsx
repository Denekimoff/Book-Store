import { useEffect, useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './NavigationMenu.scss'
import { useSelector } from 'react-redux'
import { IStore } from '../../redux/types'

export default function Navbar() {
    const { cart } = useSelector((state: IStore) => state.books)
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

    const handlerOnClickLink = () => {
        if(menuOpen) setMenuOpen(prev => !prev)
    }

    return (
        <>
            <nav className={`header__nav ${menuOpen && size.width < 900 ? 'isMenu' : ''}`}>
                <ul onClick={handlerOnClickLink}>
                    <li>
                        <Link to='/Book-Store/favorites'>Favorites</Link>
                    </li>
                    <li>
                        <Link to='/Book-Store/cart'>Cart</Link>
                        {cart.length > 0 && <div className='cart__length'>{cart.length}</div>}
                    </li>
                    <li>
                        <Link to='/Book-Store/user'>Setting</Link>
                    </li>
                    <Link to='/Book-Store'>
                        <button className='btn'>Register</button>
                    </Link>
                    <Link to='/Book-Store'>
                        <button className='btn btn__login'>Login</button>
                    </Link>
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
