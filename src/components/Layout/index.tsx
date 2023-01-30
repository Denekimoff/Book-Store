import { Outlet } from 'react-router-dom'
import { Header } from '../Header'
import { Footer } from '../Footer'

export default function Layout () {
    return (
        <>
            <Header/>
            {/* <div style={{width:'100%', minHeight: '90%'}}> */}
            <Outlet/>
            {/* </div> */}
            <Footer/>
        </>
    )
}
