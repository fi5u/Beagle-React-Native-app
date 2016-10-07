import _ from 'lodash'
import * as types from '../actions/action-types'

const initialState = {
    websites: [{
        id: 0,
        title: 'The first ABC title'
    }]
};

export default function websites(state = initialState, action = {}) {
    switch(action.type) {
        case types.ADD_NEW_WEBSITE:
            // Increment the previous id or set to 0
            const newID = state.websites.length ? state.websites[state.websites.length - 1].id + 1 : 0
            return {
                ...state,
                websites: [...state.websites, {
                    id: newID,
                    title: 'New abc site'
                }]
            };

        case types.REMOVE_WEBSITE:
            const { payload: { id } } = action;
            const index = _.findIndex(state.websites, (o) => {
                return o.id === id;
            });
            return {
                ...state,
                websites: [
                    ...state.websites.slice(0, index),
                    ...state.websites.slice(index + 1)
                ]
            };

        default:
            return state;
    }
}
