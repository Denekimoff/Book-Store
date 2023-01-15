import React from 'react'
import { ThemeContext } from '../../context'
import { Pagination } from '../Pagination'

export const Main = () => {
    const { theme } = React.useContext(ThemeContext)

    return (
        <main className={`main main--${theme} `}>
            <div className='wrapper'>
                <h2 className='main__title'>New releases books</h2>
                <ul className='main__list'>
                    {[...new Array(20)].map((_, i) => <li key={i}>Array books</li>)}
                </ul>
                <Pagination/>
            </div>
        </main>
    )
}
