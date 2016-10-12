import _ from 'lodash'
import * as types from '../actions/action-types'

const initialState = {
    websites: [],
    editModal: {
        isShowing: false,
        isFrozen: false,
        mode: 'auto',
        values: {
            url: '',
            template: '',
            title: '',
            divider: '',
        }
    }
};

export default function websites(state = initialState, action = {}) {
    switch(action.type) {
        case types.ADD_NEW_WEBSITE:
            const { payload: { website } } = action;
            // Increment the previous id or set to 0
            const newID = state.websites.length ? state.websites[state.websites.length - 1].id + 1 : 0;
            return {
                ...state,
                websites: [...state.websites, {
                    id: newID,
                    ...website
                }],
                editModal: {
                    ...state.editModal,
                    isShowing: false,
                    values: initialState.editModal.values
                }
            };

        case types.REMOVE_WEBSITE:
            const { payload: { id } } = action;
            const index = _.findIndex(state.websites, (o) => {
                return o.id === id;
            });
            return {
                ...state,
                websites: [
                    ...state.websites.slice(0, index),
                    ...state.websites.slice(index + 1)
                ]
            };

        case types.CHECK_AUTO_URL:
            const { payload: { url } } = action;
            alert('checking ' + url);
            return state; // TODO: check url

        case types.SHOW_WEBSITE_EDIT_MODAL:
            return {
                ...state,
                editModal: {
                    ...state.editModal,
                    isShowing: true
                }
            };

        case types.HIDE_WEBSITE_EDIT_MODAL:
            return {
                ...state,
                editModal: {
                    ...state.editModal,
                    isShowing: false
                }
            };

        case types.UPDATE_WEBSITE_MODAL_VALUE:
            const { payload: { key, value } } = action;
            return {
                ...state,
                editModal: {
                    ...state.editModal,
                    values: {
                        ...state.editModal.values,
                        [key]: value
                    }
                }
            };

        case types.SET_MODAL_INPUT_MODE:
            const { payload: { mode } } = action;
            return {
                ...state,
                editModal: {
                    ...state.editModal,
                    mode: mode
                }
            };

        default:
            return state;
    }
}
