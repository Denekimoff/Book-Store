import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoaderBar } from './components/LoaderBar'
import { ThemeContext } from './context'
import { THEMES } from './constants'
import { FormLogin } from './components/FormLogin'
import { FormRegister } from './components/FormRegister'
import { ActivatePage } from './components/pages/ActivatePage'
import { SuccessPage } from './components/pages/SuccessPage'
import './App.scss'

//login - kipab90625@lubde.com
//pass - testtesttest

const CrashNetwork = lazy(() => import('./components/CrashNetwork'))
const Layout = lazy(() => import('./components/Layout'))
const MainPage = lazy(() => import('./components/pages/MainPage'))
const SelectBookPage = lazy(() => import('./components/pages/SelectBookPage'))
const CartPage = lazy(() => import('./components/pages/CartPage'))
const FavoritesPage = lazy(() => import('./components/pages/FavoritesPage'))
const NotFoundPage = lazy(() => import('./components/pages/NotFoundPage'))
const UserSettingPage = lazy(() => import('./components/pages/UserSettingPage'))

export const App = () => {
    // State THEME App
    const [theme, setTheme] = React.useState(THEMES.light)
    const toggleTheme = () => {
        setTheme(prev => prev === 'light'? THEMES.dark : THEMES.light)
    }
    return (
        <div className={`App App--${theme}`}>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <BrowserRouter>
                    <Suspense fallback={<LoaderBar />}>
                        <Routes>
                            <Route path='/Book-Store' element={<Layout/>}>
                                <Route index element={<MainPage/>} />
                                <Route path='/Book-Store/:isbn13' element={<SelectBookPage />} />
                                <Route path='/Book-Store/cart' element={<CartPage />} />
                                <Route path='/Book-Store/favorites' element={<FavoritesPage />} />
                                <Route path='/Book-Store/user' element={<UserSettingPage />} />
                                <Route path='/Book-Store/login' element={<FormLogin />} />
                                <Route path='/Book-Store/register' element={<FormRegister />} />
                                <Route path='/Book-Store/success' element={<SuccessPage />} />
                                <Route path='err404' element={<CrashNetwork />} />
                                <Route path='*' element={<NotFoundPage />} />
                                <Route path='/Book-Store/activate'>
                                    <Route path='*' element={<ActivatePage />}/>
                                </Route>
                            </Route>
                        </Routes>
                    </Suspense>
                </BrowserRouter>
            </ThemeContext.Provider>
        </div>
    )
}
