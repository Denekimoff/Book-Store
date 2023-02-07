import React from 'react'
import { ThemeContext } from '../../context'
import { Button } from '../Button'
import { Modal } from '../Modal'
import './SubscribeMail.scss'

export default function SubscribeMail () {
    const { theme } = React.useContext(ThemeContext)

    //Modal state and handlers:
    const [ showModal, setShowModal ] = React.useState(false)
    const handlersOnCloseModal = () => {
        setShowModal(false)
    }

    //State FORM and INPUT
    const [ email, setEmail ] = React.useState('')
    const handlerOnChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }
    const handlerOnSubmit = (event: any) => {
        event.preventDefault()
        setShowModal(prev => !prev)
        event.target.reset()
    }


    return (
        <section className={`subscribe subscribe--${theme}`}>
            <Modal controlled={true} active={showModal} title={'Success'} onClose={handlersOnCloseModal}>
                You subscribed to NEW releases and NEWS from the BookStore! Mailing will be send to your {email} e-mail.
            </Modal>
            <div className='subscribe__body'>
                <h3 className='subscribe__title'>Subscribe to newsletter</h3>
                <p className='subscribe__description'>Be the firth to know about new IT books, upcoming releases, exclusive offers and more.</p>
                <form name='formmail' className='subscribe__form' method='post' onSubmit={handlerOnSubmit}>
                    <input type='email' placeholder='Your e-mail' required onChange={handlerOnChangeEmail}/>
                    <Button className={`button button--${theme}`} type='submit'>Subscribe</Button>
                </form>
            </div>
        </section>
    )
}
