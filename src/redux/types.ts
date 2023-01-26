// Типы одной Book
export interface IBook {
    isbn13: number,
    image?: string,
    title?: string,
    subtitle?: string,
    date?: string,
    author?: string,
    text?: string,
    price?: string,
}

// Типы userReducer
export interface IUser {
    username?: string,
    email: string,
    password: string,
    id?: number,
    user?: any,
}

// Типы settingsReducer
export interface ISettingsStore {
    activeTab: string,
    currentPage: number,
    rowsPerPage: number,
}

// Типы postsReducer
export interface IBooksStore {
    books: IBook[],
    favorites: number[],
    cart: number[],
    countTotal: number,
    searchValue: string,
    loading: boolean,
    activeBook: number,
}

//Типы всего Store
export interface IStore {
    books: IBooksStore,
    settings: ISettingsStore,
    user: IUser,
}
