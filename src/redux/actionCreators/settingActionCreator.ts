import { SET_ACTIVE_TAB, SET_CURRENT_PAGE } from '../actionTypes/settingActionTypes'

export const setActiveTab = (activeTab: string) => ({
    type: SET_ACTIVE_TAB,
    activeTab,
})

export const setCurrentPage = (newPage: number) => ({
    type: SET_CURRENT_PAGE,
    newPage,
})
