import _ from 'lodash'
import * as types from '../actions/action-types'

const initialState = {
    byId: {
        '0': {
            id: 0,
            url: 'www.abc.com',
            template: 'www.abc.com/[?]',
            title: 'Abc',
            divider: '+',
        }
    },
    allIds: [0],
}

export default function websites(state = initialState, action) {
    switch(action.type) {
        case types.SAVE_WEBSITE:
            let websiteId = action.website.id
            if(websiteId === null) {
                websiteId = state.allIds.length ? _.max(state.allIds) + 1 : 0
            }
            return Object.assign({}, state, {
                byId: Object.assign({}, state.byId, {
                    [websiteId]: {
                        ...action.website,
                        ...{
                            id: websiteId,
                        }
                    }
                }),
                allIds: state.allIds.indexOf(websiteId) === -1 ? state.allIds.concat(websiteId) : state.allIds,
            })

        case types.REMOVE_WEBSITE:
            return Object.assign({}, state.byId, {
                byId: _.omit(state.allIds, action.id),
                allIds: [
                    ...state.allIds.slice(0, state.allIds.indexOf(action.id)),
                    ...state.allIds.slice(state.allIds.indexOf(action.id) + 1)
                ]
            })

        default:
            return state
    }
}
