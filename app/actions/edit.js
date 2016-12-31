import Sanitize from 'sanitize-filename'
import * as types from './action-types'
import RNFetchBlob from 'react-native-fetch-blob'

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
        return fetch('http://localhost:5000/gettemplateurl', fetchParams)
        //return fetch('https://beagle-utils.herokuapp.com/gettemplateurl', fetchParams)
            .then(response => response.json())
            .then(json => dispatch(receiveTemplate(json, dispatch)))
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

function receiveTemplate(response, dispatch) {
    if(response.status !== 'success' || !response.template) {
        return {
            type: types.RECEIVE_TEMPLATE_ERROR,
            message: response.reason,
        }
    }
    else if(response.template.faviconUrl) {
        let dirs = RNFetchBlob.fs.dirs
        let dir = Sanitize(response.template.title) || new Date().getTime()
        RNFetchBlob
            .config({
                fileCache : true,
                path : `${dirs.DocumentDir}/${dir}/${response.template.faviconUrl.split('/').pop()}`,
            })
            .fetch('GET', response.template.faviconUrl)
            .then(res => {
                response.template.iconPath = res.path()
                dispatch(receiveTemplateSuccess(response))
            }, error => {
                console.log('Favicon save failed!')
                console.log(error)
                dispatch(receiveTemplateSuccess(response))
            })
    }
    else {
        dispatch(receiveTemplateSuccess(response))
    }
}

function receiveTemplateSuccess(response) {
    return {
        type: types.SAVE_WEBSITE,
        website: response.template,
    }
}

export function saveWebsite(website) {
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

export function setInvalidField(fieldName) {
    return {
        type: types.SET_INVALID_FIELD,
        fieldName,
    }
}
