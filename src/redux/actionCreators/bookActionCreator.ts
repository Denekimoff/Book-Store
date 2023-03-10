import { put, takeEvery } from 'redux-saga/effects'
import { ADD_TO_CART, REMOVE_TO_CART, ADD_TO_FAVORITES, REMOVE_TO_FAVORITES, SET_BOOKS, ACTIVE_BOOK, SET_SEARCH_VALUE,LOAD_BOOKS, SET_COUNT_TOTAL, ACTIVE_BOOK_ID, CLEAR_CART } from '../actionTypes/booksActionTypes'
import { IBook } from '../types'
import { setCurrentPage } from './settingActionCreator'

export const setBooks = (books: IBook[]) => ({
    type: SET_BOOKS,
    books,
})

export const addToFavorite = (id: string) => ({
    type: ADD_TO_FAVORITES,
    id,
})

export const removeToFavorite = (id: number) => ({
    type: REMOVE_TO_FAVORITES,
    id,
})

export const addToCart = (id: number) => ({
    type: ADD_TO_CART,
    id,
})

export const removeToCart = (id: any) => ({
    type: REMOVE_TO_CART,
    id,
})

export const clearCart = (newCart: any) => ({
    type: CLEAR_CART,
    newCart,
})

export const setCountTotal = (count: string) => ({
    type: SET_COUNT_TOTAL,
    count,
})

export const setSearchValue = (value: string) => ({
    type: SET_SEARCH_VALUE,
    value,
})

export const activeBookId = (id: number, setIsLoading: any, navigate: any) => ({
    type: ACTIVE_BOOK_ID,
    id,
    setIsLoading,
    navigate,
})

export const activeBook = (data: IBook) => ({
    type: ACTIVE_BOOK,
    data,
})

export const loadBooks = (setIsLoading: any, navigate: any, searchValue: string) => ({
    type: LOAD_BOOKS,
    setIsLoading,
    navigate,
    searchValue,
})

export function* watcherBooks () {
    yield takeEvery(LOAD_BOOKS, fetchLoadBooks)
    yield takeEvery(ACTIVE_BOOK_ID, fetchGetSelectBook)
}

export const scrollSmooth = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}

function* fetchGetSelectBook (payload: any) {
    scrollSmooth()
    const { id, setIsLoading, navigate } = payload
    try {
        const response: Response = yield fetch(`https://api.itbook.store/1.0/books/${id}`)
        const data: IBook = yield response.json()
        yield put(activeBook(data))
        setIsLoading(false)
    } catch (err) {
        navigate('err404')
    }
}

function* fetchLoadBooks (payload: any) {
    scrollSmooth()
    const { setIsLoading, navigate, searchValue } = payload
    if (!searchValue) {
        try {
            const response: Response = yield fetch('https://api.itbook.store/1.0/new')
            const data: { total: string, books: IBook[] } = yield response.json()
            const { total, books } = data
            yield put(setCountTotal(total))
            yield put(setBooks(books))
            yield put(setCurrentPage(1))
            setIsLoading(false)
        } catch (err) {
            navigate('err404')
        }
    } else {
        console.log('???????????? ?????????????????? ???? ?????????????????? - ',searchValue)
        const response: Response = yield fetch(`https://api.itbook.store/1.0/search/${searchValue}`)
        const data : IBook = yield response.json()
        const { books }: any = data
        yield put(setBooks(books))
        yield put(setCurrentPage(1))
        setIsLoading(false)

    }
}