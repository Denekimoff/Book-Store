import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from '@redux-saga/core'
import { all } from 'redux-saga/effects'
import { watcherBooks } from './actionCreators/bookActionCreator'
import { booksReducer } from './reducers/bookReducer'
import { settingsReducer } from './reducers/settingReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { userReducer } from './reducers/userReducer'
import { watcherUser } from './actionCreators/userActionCreators'

const sagaMiddleware = createSagaMiddleware()
function* rootSaga () {
    yield all([
        watcherBooks(),
        watcherUser(),
    ])
}

const rootReducer = combineReducers({
    books: booksReducer,
    setting: settingsReducer,
    users: userReducer,

})

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))

export const persistor = persistStore(store)
export default store
sagaMiddleware.run(rootSaga)