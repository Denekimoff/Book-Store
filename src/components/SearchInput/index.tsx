import React from 'react'
import { Search } from '../Icons/Search'

import './Search.scss'

export const SearchInput = () => {
    return (
        <div className='header__search'>
            <input type='text' placeholder='Search...' />
            <Search/>
        </div>
    )
}
