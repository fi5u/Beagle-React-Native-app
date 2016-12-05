import * as types from './action-types'

export function editWebsite(website) {
    return {
        type: types.EDIT_WEBSITE,
        id: website.id,
        website,
    }
}

export function setEditMode(mode) {
    return {
        type: types.SET_EDIT_MODE,
        mode,
    }
}

export function updateEditValue(name, value) {
    return {
        type: types.UPDATE_EDIT_VALUE,
        name,
        value,
    }
}

export function closeEdit() {
    return {
        type: types.CLOSE_EDIT,
    }
}

export function fetchTemplate(url) {
    return (dispatch, getState) => {
        return dispatch(processFetchTemplate(url))
    }
}

function processFetchTemplate(url) {
    return dispatch => {
        const fetchParams = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                url: url
            })
        }
        dispatch(requestTemplate(url))
        return fetch('https://beagle-utils.herokuapp.com/gettemplateurl', fetchParams)
            .then(response => response.json())
            .then(json => dispatch(receiveTemplate(json)))
            .catch(error => {
                /* TODO: log error */
                console.log(error)
            })
    }
}

function requestTemplate(url) {
    return {
        type: types.REQUEST_TEMPLATE,
        url,
    }
}

function receiveTemplate(response) {
    if(response.status === 'success' && response.template) {
        return {
            type: types.SAVE_WEBSITE,
            template: response.template,
        }
    }
    return {
        type: types.RECEIVE_TEMPLATE_ERROR,
        message: response.reason,
    }
}

export function saveWebsite(website) {
    console.log('>>>>>> edit.js website = ');
    console.log(website);
    if(website.id) {
        return {
            type: types.UPDATE_WEBSITE,
            website,
        }
    }
    return {
        type: types.SAVE_WEBSITE,
        website,
    }
}
