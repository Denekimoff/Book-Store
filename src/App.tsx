import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeContext } from './context'
import { THEMES } from './constants'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Main } from './components/pages/Main'
import { SelectBook } from './components/pages/SelectBook'
import { Cart } from './components/pages/Cart'
import './App.scss'

export const App = () => {
    // State app theme
    const [theme, setTheme] = React.useState(THEMES.light)
    const toggleTheme = () => {
        setTheme(prev => prev === 'light'? THEMES.dark : THEMES.light)
    }

    return (
        <div className={'App App--'}>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route path='/'>
                            <Route index element={<Main/>} />
                            <Route path='main' element={<Main/>} />
                            <Route path='select_book' element={<SelectBook/>} />
                            <Route path='cart' element={<Cart/>} />
                            <Route path='activate'>
                                <Route path='*' element={<></>}/>
                            </Route>
                        </Route>
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </ThemeContext.Provider>
        </div>
    )
}
