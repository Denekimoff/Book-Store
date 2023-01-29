import React from 'react'
import { Button } from '../Button'
import { ThemeContext } from '../../context'
import './Pagination.scss'
import { ArrowLeftIcon } from '../Icons/ArrowLeftIcon'
import { ArrowRightIcon } from '../Icons/ArrowRightIcon'

export interface PaginationType {
    dataCount?: number
}

export default function Pagination ({ dataCount }: PaginationType) {
    const { theme } = React.useContext(ThemeContext)

    return (
        <div className={`pagination pagination--${theme}`}>
            <div className='wrapper'>
                <div className='pagination__body'>
                    <div className='pagination__left'>
                        <Button className='pagination__btn' onClick={() => console.log('click - 1')}>
                            <ArrowLeftIcon/> prev
                        </Button>
                    </div>
                    <div>{'1  2  3  ...  5'}</div>
                    <div className='pagination__right'>
                        <Button className='pagination__btn' onClick={() => console.log('click + 1')}>
                            next<ArrowRightIcon/>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}


