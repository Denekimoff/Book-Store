import React from 'react'
import { useNavigate } from 'react-router-dom'

export const UserIcon = () => {
    const navigate = useNavigate()
    return (
        <>
            <svg onClick={() => navigate('/user')} fill='none' height='24' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'/><circle cx='12' cy='7' r='4'/></svg>
        </>
    )
}
