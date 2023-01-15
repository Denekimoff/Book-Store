import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from '@redux-saga/core'
import { all } from 'redux-saga/effects'

const sagaMiddleware = createSagaMiddleware()
function* rootSaga () {
    yield all([

    ])
}
const rootReducer = combineReducers({

})

export default createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)