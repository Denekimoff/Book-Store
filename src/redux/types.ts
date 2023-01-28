// Типы одной Book
export interface IBook {
    error?: number,
    isbn10?: number,
    isbn13: number,
    image?: string,
    title?: string,
    subtitle?: string,
    year?: string,
    authors?: string,
    publisher?: string,
    language?: string,
    pages?: string,
    price?: string,
    desc?: string,
    rating?: string,
    url?: string,
    pdf?: any,
}

// Типы userReducer
export interface IUser {
    username?: string,
    email: string,
    password: string,
    id?: number,
    user?: any,
}

// Типы settingReducer
export interface ISettingStore {
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
    activeBookId: number,
    activeBook: IBook[],
}

//Типы всего Store
export interface IStore {
    books: IBooksStore,
    setting: ISettingStore,
    user: IUser,
}
