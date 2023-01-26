import React from 'react'
import { useNavigate } from 'react-router-dom'

export const NotFoundPage = () => {
    const navigate = useNavigate()

    return (
        <div className='not__found'>UUUPS...THIS PAGE DOESN'T EXIST. GO<span onClick={() => navigate('/')}> HOME.</span></div>
    )
}
