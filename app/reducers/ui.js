import * as types from '../actions/action-types'

const initialState = {
    visibleHeight: 0,
}

export default function ui(state = initialState, action) {
    switch(action.type) {
        case types.SET_UI_PROP:
            return Object.assign({}, state, {
                [action.prop]: action.value,
            })

        default:
            return state
    }
}
