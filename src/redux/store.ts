import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from '@redux-saga/core'
import { all } from 'redux-saga/effects'
import { watcherBooks } from './actionCreators/bookActionCreator'
import { booksReducer } from './reducers/bookReducer'
import { settingsReducer } from './reducers/settingReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const sagaMiddleware = createSagaMiddleware()
function* rootSaga () {
    yield all([
        watcherBooks(),
    ])
}

const rootReducer = combineReducers({
    books: booksReducer,
    setting: settingsReducer,
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))

export const persistor = persistStore(store)
export default store
sagaMiddleware.run(rootSaga)