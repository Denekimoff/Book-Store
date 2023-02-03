import React, { useEffect } from 'react'
import { Button } from '../Button'
import { ThemeContext } from '../../context'
import { ArrowLeftIcon } from '../Icons/ArrowLeftIcon'
import { ArrowRightIcon } from '../Icons/ArrowRightIcon'
import { useDispatch, useSelector } from 'react-redux'
import { IStore } from '../../redux/types'
import { setCurrentPage } from '../../redux/actionCreators/settingActionCreator'
import './Pagination.scss'

export default function Pagination () {
    const dispatch = useDispatch()
    const { theme } = React.useContext(ThemeContext)
    const [isPrevDisabled, setIsPrevDisabled] = React.useState(false)
    const [isNextDisabled, setIsNextDisabled] = React.useState(false)
    const currentPage = useSelector((state: IStore) => state.setting.currentPage)
    const rowsPerPage = useSelector((state: IStore) => state.setting.rowsPerPage)
    const { books } = useSelector((state: IStore) => state.books)
    const count = Math.ceil(books.length / rowsPerPage)

    const totalPage = []
    for (let i = 1; i <= count; i++ ) {
        totalPage.push(i)
    }

    const handlerOnPrevPage = () => {
        if (isPrevDisabled) return
        dispatch(setCurrentPage(currentPage - 1))
    }
    const handlerOnNextPage = () => {
        if (isNextDisabled) return
        dispatch(setCurrentPage(currentPage + 1))
    }
    const handlerOnCurrentPage = (value: number) => {
        dispatch(setCurrentPage(value))
    }

    useEffect(() => {
        setIsPrevDisabled(currentPage === 1)
        setIsNextDisabled(currentPage === count)
    }, [currentPage, rowsPerPage])

    return (
        <div className={`pagination pagination--${theme}`}>
            <div className='wrapper'>
                <div className='pagination__body'>
                    <div className='pagination__left'>
                        <Button className='pagination__btn' disabled={isPrevDisabled} onClick={handlerOnPrevPage}>
                            <ArrowLeftIcon/> prev
                        </Button>
                    </div>
                    <div className='pagination__integers'>
                        {totalPage.map((page, i) => (<span key={page} className={`pagination__page ${i + 1 === currentPage ? 'pagination__page--active' : ''}`} onClick={() => handlerOnCurrentPage(i + 1)}>{page}</span>))}
                    </div>
                    <div className='pagination__right'>
                        <Button className='pagination__btn' disabled={isNextDisabled} onClick={handlerOnNextPage}>
                            next<ArrowRightIcon/>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}


