import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from '@redux-saga/core'
import { all } from 'redux-saga/effects'
import { watcherBooks } from './actionCreators/bookActionCreator'
import { booksReducer } from './reducers/bookReducer'
import { settingsReducer } from './reducers/settingReducer'

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

export default createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)