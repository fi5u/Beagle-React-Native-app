import * as types from './action-types'

export function addNewTemplate() {
    return {
        type: types.ADD_NEW_TEMPLATE,
    }
}

export function removeWebsite(id) {
    return {
        type: types.REMOVE_WEBSITE,
        id,
    }
}
