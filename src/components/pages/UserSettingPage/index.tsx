import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from '../../../context'
import { IStore } from '../../../redux/types'
import { FormLogin } from '../../FormLogin'
import ArrowBack from '../../Icons/ArrowBack'
import './UserSettingPage.scss'

export default function UserSettingPage () {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    const { theme } = React.useContext(ThemeContext)
    const { user } = useSelector((state: IStore) => state.users)
    console.log(user)

    if(user == null) {
        return (<FormLogin/>)
    } else {
        return (
            <section className={`user user--${theme}`}>
                <div className='wrapper'>
                    <div className='user__body'>
                        <div className='user__button-back' onClick={goBack}>
                            <ArrowBack/>
                        </div>
                        <h2 className='user__title'>User Profile</h2>
                        <div className='user__container'>
                            <div className='user__avatar'>
                                <img src='#' alt='Avatar' />
                            </div>
                            <div className='user__info'>
                                <div className='user__block'>Name: <span>{user && user.username}</span></div>
                                <div className='user__block'>ID: <span>{user && user.id}</span></div>
                                <div className='user__block'>E-mail: <span>{user && user.email}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}