import React from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../context'
import NavigationMenu from '../NavigationMenu'
import { Navmenu } from '../Navmenu'
import { SearchInput } from '../SearchInput'

import './Header.scss'

export const Header = () => {
    const { theme } = React.useContext(ThemeContext)
    return (
        <header className={`header header--${theme}`}>
            <div className='wrapper'>
                <div className='header__body'>
                    <Link to={'/Book-Store'}>
                        <div className='header__logo'>Bookstore</div>
                    </Link>
                    <SearchInput/>
                    {/* <Navmenu/> */}
                    <NavigationMenu/>
                </div>
            </div>
        </header>
    )
}
