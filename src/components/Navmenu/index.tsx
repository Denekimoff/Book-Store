import React from 'react'
import { Link } from 'react-router-dom'
import { LikeIcon } from '../Icons/LikeIcon'
import { CartIcon } from '../Icons/CartIcon'
import { UserIcon } from '../Icons/UserIcon'
import './Navmenu.scss'

export const Navmenu = () => {
    const like = <Link to='/Book-Store/favorites'><LikeIcon/></Link>
    const cart = <CartIcon/>
    const user = <UserIcon/>
    const navmenu = [like, cart, user]

    return (
        <div className='header__navmenu'>
            {navmenu.map((item, i) => <div key={i} className='navmenu__icon'>{item}</div>)}
        </div>
    )
}
