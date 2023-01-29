import React from 'react'
import { Facebook } from '../Icons/Facebook'
import { Twitter } from '../Icons/Twitter'
import { Dots } from '../Icons/Dots'
import { useDispatch, useSelector } from 'react-redux'
import { IStore } from '../../redux/types'
import { TABS } from '../../constants'
import { setActiveTab } from '../../redux/actionCreators/settingActionCreator'

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
                    {activeTab.includes('Description') ? data.desc : activeTab.includes('Authors') ? data.authors : data.url}</p>
            </div>
            <div className='tabs__social'>
                <div className='tabs__icon'>
                    <Facebook/>
                </div>
                <div className='tabs__icon'>
                    <Twitter/>
                </div>
                <div className='tabs__icon'>
                    <Dots/>
                </div>
            </div>
        </div>
    )
}

export default Tabs