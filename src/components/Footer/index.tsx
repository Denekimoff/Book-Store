import React from 'react'
import { ThemeContext } from '../../context'

export const Footer = () => {
    const { theme } = React.useContext(ThemeContext)
    return (
        <footer className={`footer footer--${theme}`}>
            <p>&copy 2022</p>
            <p>All rights reserved</p>
        </footer>
    )
}
