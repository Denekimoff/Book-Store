import React from 'react'
import { ThemeContext } from '../../../context'
import BookContainer from '../../BookContainer'
import SubscribeMail from '../../SubscribeMail'
import './MainPage.scss'

export default function MainPage () {
    const { theme } = React.useContext(ThemeContext)
    return (
        <main className={`main main--${theme}`}>
            <div className='wrapper'>
                <div className='main__body'>
                    <div className='main__button-back'></div>
                    <h2 className='main__title'>New releases books</h2>
                    <BookContainer />
                    <SubscribeMail/>
                </div>
            </div>
        </main>
    )
}
