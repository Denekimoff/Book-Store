import React from 'react'
import { Like } from '../Icons/Like'
import { Cart } from '../Icons/Cart'
import { User } from '../Icons/User'

import './Navmenu.scss'

export const Navmenu = () => {
    const like = <Like/>
    const cart = <Cart/>
    const user = <User/>

    const navmenu = [like, cart, user]
    return (
        <div className='header__navmenu'>
            {navmenu.map(item => <div className='navmenu__icon'>{item}</div>)}
        </div>
    )
}
