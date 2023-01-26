import React from 'react'
import { useSelector } from 'react-redux'
import { IStore } from '../../redux/types'
import { SearchIcon } from '../Icons/SearchIcon'

import './SearchIcon.scss'

export const SearchInput = () => {
    const { books } = useSelector((state: IStore) => state.books)
    const { favorites } = useSelector((state: IStore) => state.books)

    return (
        <div className='header__search'>
            <input disabled={!(books.length) || false} type='text' placeholder='Search...' />
            <SearchIcon/>
        </div>
    )
}
