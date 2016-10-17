import _ from 'lodash'
import * as types from '../actions/action-types'

const initialState = {
    websites: [{
        id: 0,
        template: 'http://abc/[?]',
        title: 'Abc',
        divider: '+',
    }, {
        id: 1,
        template: 'http://def/[?]',
        title: 'Def',
        divider: '+',
    }, {
        id: 2,
        template: 'http://hij/[?]',
        title: 'Hij',
        divider: '+',
    }],
    editModal: {
        isShowing: false,
        isFrozen: false,
        mode: 'auto',
        previousMode: 'auto',
        values: {
            id: null,
            url: '',
            template: '',
            title: '',
            divider: '',
        }
    },
    query: {
        id: null,
        value: ''
    }
};

export default function websites(state = initialState, action = {}) {
    switch(action.type) {
        case types.ADD_NEW_WEBSITE:
            const { payload: { websiteNew } } = action;
            // Increment the previous id or set to 0
            const websiteID = state.websites.length ? state.websites[state.websites.length - 1].id + 1 : 0;
            return {
                ...state,
                websites: [...state.websites, {
                    id: websiteID,
                    ...websiteNew
                }],
                editModal: {
                    ...state.editModal,
                    isShowing: false,
                    values: initialState.editModal.values
                }
            };

        case types.UPDATE_WEBSITE:
            const { payload: { websiteUpdate } } = action;
            const indexUpdate = _.findIndex(state.websites, (o) => {
                return o.id === websiteUpdate.id;
            });
            return {
                ...state,
                websites: [
                    ...state.websites.slice(0, indexUpdate),
                    websiteUpdate,
                    ...state.websites.slice(indexUpdate + 1)
                ],
                editModal: {
                    ...state.editModal,
                    isShowing: false,
                    values: initialState.editModal.values,
                }
            }

        case types.EDIT_WEBSITE:
            const { payload: { idEdit } } = action;
            return {
                ...state,
                editModal: {
                    ...state.editModal,
                    isShowing: true,
                    mode: 'custom',
                    values: state.websites.find(function (o) { return o.id === idEdit; })
                }
            };
            return state;

        case types.REMOVE_WEBSITE:
            const { payload: { idRemove } } = action;
            const index = _.findIndex(state.websites, (o) => {
                return o.id === idRemove;
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
                    isShowing: true,
                    mode: state.editModal.previousMode,
                }
            };

        case types.HIDE_WEBSITE_EDIT_MODAL:
            return {
                ...state,
                editModal: {
                    ...state.editModal,
                    isShowing: false,
                    values: initialState.editModal.values,
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
                    mode: mode,
                    previousMode: mode,
                }
            };

        case types.UPDATE_QUERY_VALUE:
            const { payload: { valueQuery } } = action;
            return {
                ...state,
                query: {
                    ...state.query,
                    value: value,
                }
            }

        case types.SUBMIT_QUERY:
            // TODO: submit the query
            return state;

        case types.ACTIVATE_QUERY:
            const { payload: { idQuery } } = action;
            return {
                ...state,
                query: {
                    ...state.query,
                    value: '',
                    id: state.query.id !== idQuery ? idQuery : null,
                }
            }

        default:
            return state;
    }
}
