import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { ThemeContext } from '../../../context'
import './CartPage.scss'


export default function CartPage () {
    const { theme } = React.useContext(ThemeContext)
    return (
        <section className={`cart cart--${theme}`}>
            <div className='wrapper'>
                <Breadcrumb>
                    <Breadcrumb.Item href='/Book-Store'>LEFT ARROW</Breadcrumb.Item>
                    {/* <Breadcrumb.Item active>Cart</Breadcrumb.Item> */}
                </Breadcrumb>
                <div>Content</div>
            </div>
        </section>
    )
}
