import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import debounce from 'lodash.debounce'
import { setSearchValue } from '../../redux/actionCreators/bookActionCreator'
import { setCurrentPage } from '../../redux/actionCreators/settingActionCreator'
import { CloseIcon } from '../Icons/CloseIcon'
import { SearchIcon } from '../Icons/SearchIcon'
import './SearchIcon.scss'

export const SearchInput = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    //Refferense for activate FOCUS input
    const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>

    //LocalState INPUT
    const [invalue, setInvalue] = React.useState('')

    //Handlers EventListeners on CHANGE and KEYDOWN input
    const handlerInputChange = (e: any) => {
        setInvalue(e.target.value)
        handlerUpdateSearchValue(e.target.value)
    }
    //Debounce searching
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handlerUpdateSearchValue = React.useCallback(
        debounce((string) => {
            dispatch(setSearchValue(string))
        }, 1000),
        [])
    const handlerInputClear = () => {
        setInvalue('')
        dispatch(setSearchValue(''))
        inputRef.current.focus()
    }
    const handlerOnKeyDown = ({ key }: any) => {
        if(key !== 'Enter') return
        navigate('/Book-Store')
        dispatch(setCurrentPage(1))
        // setInvalue('')
        // dispatch(setSearchValue(''))
    }

    return (
        <div className='header__search' onKeyDown={handlerOnKeyDown}>
            <input value={invalue} ref={inputRef}  onChange={handlerInputChange} type='text' placeholder='Search...' />
            {!invalue ? <SearchIcon /> : <CloseIcon onClick={handlerInputClear}/>}
        </div>
    )
}
