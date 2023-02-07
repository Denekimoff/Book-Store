import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { activate } from '../../../redux/actionCreators/userActionCreators'

export const ActivatePage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        const splittedPath = window.location.pathname.split('/')
        dispatch(activate({
            uid: splittedPath[3],
            token: splittedPath[4],
        }, navigate))
    }, [])
    return (
        <div className='activate' style={{minHeight: '85vh', fontSize: '2rem', display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
            <h2>ACTIVATION YOUR ACCOUNT</h2>
        </div>
    )
}
