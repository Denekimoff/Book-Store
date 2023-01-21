import React from 'react'
import { Link } from 'react-router-dom'
import { CardBook } from '../CardBook'
import { Tabs } from '../Tabs'

export const SelectBook = () => {
    return (
        <div className='wrapper'>
            <Link to={'/'}>^---^</Link>
            <CardBook/>
            <Tabs/>
        </div>
    )
}
