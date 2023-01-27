import React from 'react'
import { useNavigate } from 'react-router-dom'
import'./NotFoundPage.scss'

export const NotFoundPage = () => {
    const navigate = useNavigate()

    return (
        <div className='not__found'>UUUPS...THIS PAGE DOESN'T EXIST. GO<span onClick={() => navigate('/Book-Store')}> HOME.</span></div>
    )
}
