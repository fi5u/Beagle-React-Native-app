import * as types from './action-types'

// Action creators related to the "websites" domain are defined here, they must
// have a type attribute and then possible payload that the reducer needs to execute
// the action / alter the application state

export const toggleSetting = (setting) => {
    return {
        type: types.TOGGLE_SETTING,
        payload: {
            setting
        }
    };
}
