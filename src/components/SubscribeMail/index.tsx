import React from 'react'
import { ThemeContext } from '../../context'
import { Button } from '../Button'

export const SubscribeMail = () => {
    const { theme } = React.useContext(ThemeContext)
    return (
        <section className={`subscribe subscribe--${theme}`}>
            <div className='wrapper'>
                <div className='subscribe_body'>
                    <h3 className='subscribe__title'>Subscribe to newsletter</h3>
                    <p className='subscribe__description'>Be the firth to know about new IT books, upcoming releases, exclusive offers and more.</p>
                    <form className='subscribe__form' method='post'>
                        <input type='text' placeholder='Your e-mail'/>
                        <Button className={`button button--${theme}`} type='submit'/>
                    </form>
                </div>
            </div>
        </section>
    )
}
