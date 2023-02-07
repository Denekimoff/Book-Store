import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from '../../../context'
import { IStore } from '../../../redux/types'
import ArrowBack from '../../Icons/ArrowBack'
import './UserSettingPage.scss'

export default function UserSettingPage () {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    const { theme } = React.useContext(ThemeContext)
    const { user } = useSelector((state: IStore) => state.users)

    return (
        <section className={`user user--${theme}`}>
            <div className='wrapper'>
                <div className='user__body'>
                    <div className='user__button-back' onClick={goBack}>
                        <ArrowBack/>
                    </div>
                    <div className='user__container'>
                        <h2 className='user__title'>User Profile</h2>
                        <div className='user__block'>Name: {user && user.username}</div>
                        <div className='user__block'>ID: {user && user.id}</div>
                        <div className='user__block'>Password: {user && user.password}</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
