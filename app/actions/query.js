import * as types from './action-types'

export function activateQuery(id) {
    return {
        type: types.ACTIVATE_QUERY,
        id,
    }
}

export function deactivateQuery() {
    return {
        type: types.DEACTIVATE_QUERY,
    }
}

export function updateQueryValue(newValue) {
    return {
        type: types.UPDATE_QUERY_VALUE,
        newValue,
    }
}

export function startQuery(website) {
    return (dispatch, getState) => {
        return dispatch(querySent(website))
    }
}

function querySent(website) {
    return {
        type: types.QUERY_SENT,
        website,
    }
}
