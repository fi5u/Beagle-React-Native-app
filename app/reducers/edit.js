import * as types from '../actions/action-types'

const initialState = {
    isEditShowing: false,
    isEditFrozen: false,
    editMode: 'auto',
    previousEditMode: 'auto',
    editId: null,
    editValues: {
        url: '',
        template: '',
        title: '',
        divider: '',
    },
    editMessage: '',
    editMessageStatus: 'error',
    invalidField: '',
}

export default function websites(state = initialState, action) {
    switch(action.type) {
        case types.ADD_NEW_TEMPLATE:
            return Object.assign({}, state, {
                isEditShowing: true,
                editMode: state.previousEditMode,
                editValues: initialState.editValues,
                editId: null,
            })

        case types.EDIT_WEBSITE:
            return Object.assign({}, state, {
                isEditShowing: true,
                editMode: 'custom',
                editId: action.id,
                editValues: action.website,
            })

        case types.SET_EDIT_MODE:
            return Object.assign({}, state, {
                editMode: action.mode,
                previousEditMode: action.mode,
            })

        case types.UPDATE_EDIT_VALUE:
            return Object.assign({}, state, {
                editValues: {
                    ...state.editValues,
                    [action.name]: action.value,
                },
                invalidField: '',
                editMessage: '',
            })

        case types.CLOSE_EDIT:
        case types.SAVE_WEBSITE:
            return Object.assign({}, state, {
                isEditShowing: false,
                isEditFrozen: false,
                editMessage: '',
            })

        case types.REQUEST_TEMPLATE:
            return Object.assign({}, state, {
                isEditFrozen: true,
                editMessage: '',
            })

        case types.RECEIVE_TEMPLATE_ERROR:
            return Object.assign({}, state, {
                editMessage: action.message || 'Ooops, something went wrong!',
                editMessageStatus: 'error',
                isEditFrozen: false,
            })

        case types.SET_INVALID_FIELD:
            return Object.assign({}, state, {
                invalidField: action.fieldName,
                editMessage: action.fieldName === 'template' ? 'Should contain the placeholder [?]' : null,
                editMessageStatus: 'error',
            })

        default:
            return state
    }
}
