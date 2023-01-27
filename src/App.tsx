import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeContext } from './context'
import { THEMES } from './constants'
import { Layout } from './components/Layout'
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
                    <Routes>
                        <Route path='/Book-Store' element={<Layout/>}>
                            <Route index element={<MainPage/>} />
                            <Route path='/Book-Store/:isbn13' element={<SelectBookPage />} />
                            <Route path='/Book-Store/cart' element={<CartPage />} />
                            <Route path='/Book-Store/favorites' element={<FavoritesPage />} />
                            <Route path='/Book-Store/user' element={<UserSettingPage />} />
                            <Route path='*' element={<NotFoundPage />} />
                            <Route path='/Book-Store/not_found' element={<NotFoundPage />} />
                            <Route path='/Book-Store/activate'>
                                <Route path='*' element={<></>}/>
                            </Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ThemeContext.Provider>
        </div>
    )
}
