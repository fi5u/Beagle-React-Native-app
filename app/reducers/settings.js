import * as types from '../actions/action-types'

const initialState = {
    settings: {
    }
};

export default function settings(state = initialState, action = {}) {
    switch(action.type) {
        case types.TOGGLE_SETTING:
            const { payload: { setting } } = action;
            return {
                ...state,
                settings: {
                    ...state.settings,
                    [setting]: !state.settings[setting]
                }
            };

        default:
            return state;
    }
}
