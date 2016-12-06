import * as types from './action-types'

export function setUIProp(prop, value) {
    return {
        type: types.SET_UI_PROP,
        prop,
        value,
    }
}
