import { SET_ACTIVE_TAB, SET_CURRENT_PAGE } from '../actionTypes/settingActionTypes'
import { TABS } from '../../constants'

const initialState = {
    activeTab: TABS.description,
    currentPage: 1,
    rowsPerPage: 4,
}

export const settingsReducer = (state = initialState, action: any) => {
    switch(action.type) {
    case SET_ACTIVE_TAB: {
        const { activeTab } = action
        return ({
            ...state,
            activeTab,
        })
    }
    case SET_CURRENT_PAGE: {
        const { newPage } = action
        return ({
            ...state,
            currentPage: newPage,
        })
    }
    default: return state
    }
}