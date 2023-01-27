import React from 'react'
import Facebook from '../../assets/svg/facebook_social_icon.svg'
import Twitter from '../../assets/svg/twitter_social_icon.svg'
import Dots from '../../assets/svg/dots_icon.svg'

export interface ITabs {
  text?: string
}

export const Tabs = ({ text }: ITabs) => {
    const tabs = ['description', 'authors', 'reviews']

    return (
        <div className='tabs'>
            <div className='tabs__list'>
                {tabs.map((tab, i) => <div key={i} className='tabs__item'>{tab}</div>)}
            </div>
            <div className='tabs__info'>
                <p className='tabs__text'>{text}</p>
            </div>
            <div className='tabs__social'>
                <div className='tabs__icon'>
                    <img src={`${Facebook}`} alt='Facebook' />
                </div>
                <div className='tabs__icon'>
                    <img src={`${Twitter}`} alt='Twitter' />
                </div>
                <div className='tabs__icon'>
                    <img src={`${Dots}`} alt='Dots' />
                </div>
            </div>
        </div>
    )
}
