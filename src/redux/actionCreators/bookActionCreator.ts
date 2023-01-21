import { put, takeEvery } from 'redux-saga/effects'

import { ADD_TO_CART, REMOVE_TO_CART, ADD_TO_FAVORITES, REMOVE_TO_FAVORITES, SET_BOOKS, ACTIVE_BOOK, IS_LOADING, SET_SEARCH_VALUE, LOAD_BOOKS } from '../actionTypes/booksActionTypes'
import { IBook } from '../types'

export const setBooks = (books: IBook[]) => ({
    type: SET_BOOKS,
    books,
})

export const addToFavorite = (id: number) => ({
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

export const setSearchValue = (value: string) => ({
    type: SET_SEARCH_VALUE,
    value,
})

export const isLoading = (loading: boolean) => ({
    type: IS_LOADING,
    loading,
})

export const activeBookId = (id: number) => ({
    type: ACTIVE_BOOK,
    id,
})

export const loadBooks = (currentPage: number, rowsPerPage: number, searchValue: string, loading: boolean, activePost: number) => ({
    type: LOAD_BOOKS,
    currentPage,
    rowsPerPage,
    searchValue,
    loading,
    activePost,
})
export function* watcherBooks () {
    yield takeEvery(LOAD_BOOKS, fetchLoadBooks)
}

function* fetchLoadBooks (datas: any) {
    window.scrollTo(0, 0)
    const { loading } = datas
    yield put(isLoading(!loading))
    const response: Response = yield fetch('https://api.itbook.store/1.0/')
    const data: { count: number, results: IBook[] } = yield response.json()
    const { results } = data
    yield put(setBooks(results))
}