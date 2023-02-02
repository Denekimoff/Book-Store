import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { setSearchValue } from '../../redux/actionCreators/bookActionCreator'
import { IStore } from '../../redux/types'
import { CloseIcon } from '../Icons/CloseIcon'
import { SearchIcon } from '../Icons/SearchIcon'

import './SearchIcon.scss'

export const SearchInput = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handlerInputChange = (e: any) => dispatch(setSearchValue(e.target.value))
    const handlerInputClear = () => dispatch(setSearchValue(''))
    const { searchValue } = useSelector((state: IStore) => state.books)
    const onKeyDown = ({ key }: any) => {
        if(key !== 'Enter') return
        navigate('/Book-Store')
    }

    return (
        <div className='header__search' onKeyDown={onKeyDown}>
            <input value={searchValue}  onChange={handlerInputChange} type='text' placeholder='Search...' />
            {!searchValue ? <SearchIcon /> : <CloseIcon onClick={handlerInputClear}/>}
        </div>
    )
}
