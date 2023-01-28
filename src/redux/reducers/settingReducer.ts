import { SET_ACTIVE_TAB } from '../actionTypes/settingActionTypes'
import { TABS } from '../../constants'

const initialState = {
    activeTab: TABS.description,
    currentPage: 1,
    rowsPerPage: 5,
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
    default: return state
    }
}