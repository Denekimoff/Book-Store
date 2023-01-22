import { put, takeEvery } from 'redux-saga/effects'

import { ADD_TO_CART, REMOVE_TO_CART, ADD_TO_FAVORITES, REMOVE_TO_FAVORITES, SET_BOOKS, ACTIVE_BOOK, IS_LOADING, SET_SEARCH_VALUE, LOAD_BOOKS, SET_COUNT_TOTAL } from '../actionTypes/booksActionTypes'
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

export const setCountTotal = (count: string) => ({
    type: SET_COUNT_TOTAL,
    count,
})

export const setSearchValue = (value: string) => ({
    type: SET_SEARCH_VALUE,
    value,
})

export const isLoading = (loading: boolean) => ({
    type: IS_LOADING,
    loading,
})

export const activeBookId = (id: string) => ({
    type: ACTIVE_BOOK,
    id,
})

export const loadBooks = (searchValue: string, loading: boolean) => ({
    type: LOAD_BOOKS,
    searchValue,
    loading,
})

export function* watcherBooks () {
    yield takeEvery(LOAD_BOOKS, fetchLoadBooks)
}

function* fetchLoadBooks (datas: any) {
    window.scrollTo(0, 0)
    const { loading } = datas
    yield put(isLoading(loading))
    const response: Response = yield fetch('https://api.itbook.store/1.0/new')
    const data: { total: string, books: IBook[] } = yield response.json()
    const { total, books } = data
    yield put(setCountTotal(total))
    yield put(setBooks(books))
}