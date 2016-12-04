import * as types from '../actions/action-types'

const initialState = {
    byWebsiteId: {},
    allQueries: [],
    queriedWebsite: null,
    currentValue: '',
}

export default function query(state = initialState, action) {
    switch(action.type) {
        case types.ACTIVATE_QUERY:
            return Object.assign({}, state, {
                queriedWebsite: action.id,
                currentValue: '',
            })

        case types.DEACTIVATE_QUERY:
            return Object.assign({}, state, {
                queriedWebsite: null,
            })

        case types.UPDATE_QUERY_VALUE:
            return Object.assign({}, state, {
                currentValue: action.newValue,
            })

        case types.QUERY_SENT:
            const byWebsiteId = Object.assign({}, state.byWebsiteId, {
                [state.queriedWebsite]: (state.byWebsiteId[state.queriedWebsite] || []).concat(state.currentValue),
            });
            return Object.assign({}, state, {
                byWebsiteId: byWebsiteId,
                allQueries: state.allQueries.concat(state.currentValue),
                queriedWebsite: null,
                currentValue: '',
            })

        case types.ADD_NEW_TEMPLATE:
            return Object.assign({}, state, {
                queriedWebsite: null,
                currentValue: '',
            })

        default:
            return state
    }
}
