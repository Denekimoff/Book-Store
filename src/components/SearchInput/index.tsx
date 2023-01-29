import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchValue } from '../../redux/actionCreators/bookActionCreator'
import { IStore } from '../../redux/types'
import { CloseIcon } from '../Icons/CloseIcon'
import { SearchIcon } from '../Icons/SearchIcon'

import './SearchIcon.scss'

export const SearchInput = () => {
    const dispatch = useDispatch()
    const handlerInputChange = (e: any) => dispatch(setSearchValue(e.target.value))
    const handlerInputClear = () => dispatch(setSearchValue(''))
    const { books } = useSelector((state: IStore) => state.books)
    const { favorites } = useSelector((state: IStore) => state.books)
    const { searchValue } = useSelector((state: IStore) => state.books)

    return (
        <div className='header__search'>
            <input value={searchValue} onChange={handlerInputChange} type='text' placeholder='Search...' />
            {!searchValue ? <SearchIcon /> : <CloseIcon onClick={handlerInputClear}/>}
        </div>
    )
}
