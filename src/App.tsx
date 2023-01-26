import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeContext } from './context'
import { THEMES } from './constants'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { MainPage } from './components/pages/MainPage'
import { SelectBookPage } from './components/pages/SelectBookPage'
import { CartPage } from './components/pages/CartPage'
import { FavoritesPage } from './components/pages/FavoritesPage'
import { NotFoundPage } from './components/pages/NotFoundPage'
import { UserSettingPage } from './components/pages/UserSettingPage'
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
                            <Route index element={<MainPage/>} />
                            <Route path='select_book' element={<SelectBookPage />} />
                            <Route path='cart' element={<CartPage />} />
                            <Route path='favorites' element={<FavoritesPage />} />
                            <Route path='user' element={<UserSettingPage />} />
                            <Route path='*' element={<NotFoundPage />} />
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
