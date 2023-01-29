import React from 'react'
import { BarLoader } from 'react-spinners'

import './LoaderBar.scss'

export const LoaderBar = () => {
    return (
        <div className='wrapper'>
            <div className='bar'><BarLoader color='#00e925' height={3} width={1200} /></div>
        </div>
    )
}
