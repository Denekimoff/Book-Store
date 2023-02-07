import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userSignIn } from '../../redux/actionCreators/userActionCreators'
import './FormLogin.scss'

export const FormLogin = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState(false)
    const userInfo = {email, password}

    const onSubmit = (event: any) => {
        event.preventDefault()
        dispatch(userSignIn(userInfo, navigate))
    }

    return (
        <div className='login'>
            <div className='wrapper'>
                <div className='login__body'>
                    <form className='login__form' onSubmit={onSubmit}>
                        <div className='login__item'>
                            <label className='login__label'>
                        E-mail
                                <input type='email' required value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </label>
                        </div>
                        <div className='login__item'>
                            <label className='login__label'>
                        Password
                                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </label>
                        </div>
                        <div className='login__text'>You do not have account?<span onClick={() => navigate('/Book-Store/register')}>Register</span></div>
                        <button className='login__submit' type='submit'>LOGIN</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

