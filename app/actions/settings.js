import * as types from './action-types'

export const toggleSetting = (setting) => {
    return {
        type: types.TOGGLE_SETTING,
        payload: {
            setting
        }
    };
}
