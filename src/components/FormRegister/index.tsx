import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCurrentPage } from '../../redux/actionCreators/settingActionCreator'
import { userSignUp } from '../../redux/actionCreators/userActionCreators'
import './FormRegister.scss'

export const FormRegister = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [username, setUsername] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirm, setConfirm] = React.useState('')
    const [error, setError] = React.useState(false)
    const userInfo = {username, email, password}

    const onSubmit = (event: any) => {
        event.preventDefault()
        dispatch(userSignUp(userInfo))
        dispatch(setCurrentPage(1))
        console.log(userInfo)
    }

    return (
        <div className='register'>
            <div className='wrapper'>
                <div className='register__body'>
                    <form className='register__form' onSubmit={onSubmit}>
                        <div className='register__item'>
                            <label className='register__label'>
                        Username
                                <input type='text' required minLength={4} value={username} onChange={(e) => setUsername(e.target.value)}/>
                            </label>
                        </div>
                        <div className='register__item'>
                            <label className='register__label'>
                        E-mail
                                <input type='email' required value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </label>
                        </div>
                        <div className='register__item'>
                            <label className='register__label'>
                        Password
                                <input type='password' required min={8} value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </label>
                        </div>
                        <div className='register__item'>
                            <label className='register__label'>
                        Confirm Password
                                <input type='password' required min={8} value={confirm} onChange={(e) => setConfirm(e.target.value)}/>
                            </label>
                        </div>
                        <div className='register__text'>You have account?<span onClick={() => navigate('/Book-Store/login')}>Login</span></div>
                        <button className='register__submit' type='submit'>REGISTER</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

