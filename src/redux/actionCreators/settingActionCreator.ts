import { SET_ACTIVE_TAB } from '../actionTypes/settingActionTypes'

export const setActiveTab = (activeTab: string) => ({
    type: SET_ACTIVE_TAB,
    activeTab,
})