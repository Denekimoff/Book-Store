import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { ThemeContext } from '../../context'


export const Cart = () => {
    const { theme } = React.useContext(ThemeContext)
    return (
        <section className={`cart cart--${theme}`}>
            <div className='wrapper'>
                <Breadcrumb>
                    <Breadcrumb.Item href='/'>LEFT ARROW</Breadcrumb.Item>
                    {/* <Breadcrumb.Item active>Cart</Breadcrumb.Item> */}
                </Breadcrumb>
                <div>Content</div>
            </div>
        </section>
    )
}
