import { ACTIVE_BOOK, ACTIVE_BOOK_ID, ADD_TO_CART, ADD_TO_FAVORITES,
    CLEAR_CART,
    IS_LOADING, REMOVE_TO_CART, REMOVE_TO_FAVORITES,
    SET_BOOKS, SET_COUNT_TOTAL, SET_SEARCH_VALUE } from '../actionTypes/booksActionTypes'
import { IBooksStore } from '../types'

export const initialState = {
    books: [],
    favorites: [],
    cart: [],
    price: 0,
    countTotal: 0,
    searchValue: '',
    loading: false,
    activeBookId: 0,
    activeBook: [],
}

export const booksReducer = (state: IBooksStore = initialState, action: any) => {
    switch (action.type) {
    case SET_BOOKS: {
        const { books } = action
        return ({
            ...state,
            books,
        })
    }
    case ADD_TO_FAVORITES: {
        const { id } = action
        return ({
            ...state,
            favorites: [...state.favorites, id],
        })
    }
    case REMOVE_TO_FAVORITES: {
        const { id } = action
        return ({
            ...state,
            favorites: state.favorites.filter((el) => el !== id),
        })
    }
    case ADD_TO_CART: {
        const { id } = action
        return ({
            ...state,
            cart: [...state.cart, id],
        })
    }
    case REMOVE_TO_CART: {
        const { id } = action
        return ({
            ...state,
            cart: state.cart.filter((el) => el !== id),
        })
    }
    case CLEAR_CART: {
        const { newCart } = action
        return ({
            ...state,
            cart: newCart,
        })
    }
    case SET_COUNT_TOTAL: {
        const { count } = action
        return ({
            ...state,
            countTotal: +count,
        })
    }
    case SET_SEARCH_VALUE: {
        const { value } = action
        return ({
            ...state,
            searchValue: value,
        })
    }
    case IS_LOADING: {
        return ({
            ...state,
            loading: !(action.loading),
        })
    }
    case ACTIVE_BOOK_ID: {
        const { id } = action
        return ({
            ...state,
            activeBookId: id,
        })
    }
    case ACTIVE_BOOK: {
        const { data } = action
        return ({
            ...state,
            activeBook: [ data],
        })
    }
    default: return state
    }
}
