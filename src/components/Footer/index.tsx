import React from 'react'
import { ThemeContext } from '../../context'
import './Footer.scss'

export const Footer = () => {
    const { theme } = React.useContext(ThemeContext)
    return (
        <footer className={`footer footer--${theme}`}>
            <div className='wrapper'>
                <div className='footer__body'>
                    <p> 2023 Bookstore by Ekimov</p>
                    <p>All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}
