import React from 'react'
import { ThemeContext } from '../../context'
import { AllCardBook } from '../AllCardBook'
import { Pagination } from '../Pagination'
import './Main.scss'

export const Main = () => {
    const { theme } = React.useContext(ThemeContext)

    return (
        <main className={`main main--${theme}`}>
            <div className='wrapper'>
                <h2 className='main__title'>New releases books</h2>
                <AllCardBook/>
                <Pagination/>
            </div>
        </main>
    )
}
