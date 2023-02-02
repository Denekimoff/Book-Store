import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from '../../../context'
import ArrowBack from '../../Icons/ArrowBack'
import './UserSettingPage.scss'

export default function UserSettingPage () {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    const { theme } = React.useContext(ThemeContext)

    return (
        <section className={`user user--${theme}`}>
            <div className='wrapper'>
                <div className='user__body'>
                    <div className='user__button-back' onClick={goBack}>
                        <ArrowBack/>
                    </div>
                    <div className='user__container'>
                        <h3 className='user__title'>user</h3>
                        <div className='user__block'>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
