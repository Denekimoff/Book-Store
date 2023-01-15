import React from 'react'
import { Button } from '../Button'
import { ThemeContext } from '../../context'
import './Pagination.scss'

export interface PaginationType {
    dataCount?: number
}

export const Pagination = ({ dataCount }: PaginationType) => {
    const { theme } = React.useContext(ThemeContext)

    return (
        <div className={`pagination pagination--${theme}`}>
            <div className='wrapper'>
                <div className='pagination__body'>
                    <div className='pagination__left'>
                        <Button className='pagination__btn' onClick={() => 'click - 1'}>{'&larr Prev'}</Button>
                    </div>
                    <div>{'1, 2, 3, 4...'}</div>
                    <div className='pagination__right'>
                        <Button className='pagination__btn' onClick={() => 'click + 1'}>{'Next &rarr'}</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}


