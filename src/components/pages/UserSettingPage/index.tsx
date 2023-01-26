import React from 'react'
import { ThemeContext } from '../../../context'
import './UserSettingPage.scss'

export const UserSettingPage = () => {
    const { theme } = React.useContext(ThemeContext)
    return (
        <div className={`user user--${theme}`}>UserSettingPage</div>
    )
}
