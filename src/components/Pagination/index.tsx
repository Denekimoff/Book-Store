import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IStore } from '../../redux/types'
import { setCurrentPage } from '../../redux/actionCreators/settingActionCreator'
import { ThemeContext } from '../../context'
import { ArrowRightIcon } from '../Icons/ArrowRightIcon'
import { ArrowLeftIcon } from '../Icons/ArrowLeftIcon'
import { Button } from '../Button'
import './Pagination.scss'

export default function Pagination () {
    const dispatch = useDispatch()
    const { theme } = React.useContext(ThemeContext)
    const [isPrevDisabled, setIsPrevDisabled] = React.useState(false)
    const [isNextDisabled, setIsNextDisabled] = React.useState(false)

    //Calculate total pages:
    const currentPage = useSelector((state: IStore) => state.setting.currentPage)
    const rowsPerPage = useSelector((state: IStore) => state.setting.rowsPerPage)
    const { books } = useSelector((state: IStore) => state.books)
    const count = Math.ceil(books.length / rowsPerPage)

    //Render list pages:
    const totalPage = []
    for (let i = 1; i <= count; i++ ) {
        totalPage.push(i)
    }

    //Handler EventListeners on CLICK PAGINATION:
    const handlerOnPrevPage = () => {
        if (isPrevDisabled) return
        dispatch(setCurrentPage(currentPage - 1))
        window.scrollBy({
            top: -1600,
            behavior: 'smooth',
        })
    }
    const handlerOnNextPage = () => {
        if (isNextDisabled) return
        dispatch(setCurrentPage(currentPage + 1))
        window.scrollBy({
            top: -1600,
            behavior: 'smooth',
        })
    }
    const handlerOnCurrentPage = (value: number) => {
        dispatch(setCurrentPage(value))
        window.scrollBy({
            top: -1600,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        setIsPrevDisabled(currentPage === 1)
        setIsNextDisabled(currentPage === count)
    }, [count, currentPage, rowsPerPage])

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


