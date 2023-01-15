import React from 'react'
import { ThemeContext } from '../../context'
import { Navmenu } from '../Navmenu'
import { Search } from '../Search'

export const Header = () => {
    const { theme } = React.useContext(ThemeContext)
    return (
        <header className={`header header--${theme}`}>
            <div className='header__body'>
                <div className='header__logo'>Bookstore</div>
                <Search/>
                <Navmenu/>
            </div>
        </header>
    )
}
