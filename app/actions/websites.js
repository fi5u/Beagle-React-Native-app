import * as types from './action-types'

// Action creators related to the "websites" domain are defined here, they must
// have a type attribute and then possible payload that the reducer needs to execute
// the action / alter the application state

export const addNewWebsite = () => {
    return {
        type: types.ADD_NEW_WEBSITE
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
