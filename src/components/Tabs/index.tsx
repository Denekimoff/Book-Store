import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IStore } from '../../redux/types'
import { TABS } from '../../constants'
import { setActiveTab } from '../../redux/actionCreators/settingActionCreator'
import { Twitter } from '../Icons/Twitter'
import { Facebook } from '../Icons/Facebook'
import { Reddit } from '../Icons/Reddit'
import { Dots } from '../Icons/Dots'
import './Tabs.scss'

const Tabs = () => {
    const dispatch = useDispatch()
    const { activeTab } = useSelector((state: IStore) => state.setting)
    const [ book1 ] = useSelector((state: IStore) => state.books.activeBook)
    //@ts-ignore
    const book = JSON.parse(localStorage.getItem('book'))
    const data = book1 || book

    return (
        <div className='tabs'>
            <div className='tabs__list'>
                {Object.values(TABS).map((tab, i) => (<div key={i} className={activeTab === tab ? 'tabs__item tabs__item--active' : 'tabs__item'} onClick={() => dispatch(setActiveTab(tab))}>{tab}</div>))}
            </div>
            <div className='tabs__info'>
                <p className='tabs__text'>
                    {activeTab.includes('Description') ? data.desc : activeTab.includes('Authors') ? data.authors : (<a href={data.url} target='_blank' rel='noopener noreferrer'>Click me to view this product.</a>)}</p>
            </div>
            <div className='tabs__social'>
                <div className='tabs__icon'>
                    <Twitter />
                </div>
                <div className='tabs__icon'>
                    <Facebook />
                </div>
                <div className='tabs__icon'>
                    <Reddit />
                </div>
                <div className='tabs__icon'>
                    <Dots />
                </div>
            </div>
        </div>
    )
}

export default Tabs