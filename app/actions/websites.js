import * as types from './action-types'

// Action creators related to the "websites" domain are defined here, they must
// have a type attribute and then possible payload that the reducer needs to execute
// the action / alter the application state

export const addNewWebsite = (website) => {
    return {
        type: types.ADD_NEW_WEBSITE,
        payload: {
            website
        }
    };
}

export const removeWebsite = (id) => {
    return {
        type: types.REMOVE_WEBSITE,
        payload: {
            id
        }
    };
}

export const checkAutoUrl = (url) => {
    return {
        type: types.CHECK_AUTO_URL,
        payload: {
            url
        }
    };
}

export const showWebsiteEditModal = () => {
    return {
        type: types.SHOW_WEBSITE_EDIT_MODAL
    };
}

export const hideWebsiteEditModal = () => {
    return {
        type: types.HIDE_WEBSITE_EDIT_MODAL
    };
}

export const updateWebsiteModalValue = (key, value) => {
    return {
        type: types.UPDATE_WEBSITE_MODAL_VALUE,
        payload: {
            key,
            value
        }
    };
}

export const setModalInputMode = (mode) => {
    return {
        type: types.SET_MODAL_INPUT_MODE,
        payload: {
            mode
        }
    };
}
