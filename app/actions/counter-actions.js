import * as types from './action-types'

// Action creators related to the "websites" domain are defined here, they must
// have a type attribute and then possible payload that the reducer needs to execute
// the action / alter the application state
/*export const addWebsite = (website) => {
    return {
        type: ADD_WEBSITE
    };
}*/



export function increment() {
    return {
        type: types.INCREMENT
    };
}

export function decrement() {
    return {
        type: types.DECREMENT
    };
}
