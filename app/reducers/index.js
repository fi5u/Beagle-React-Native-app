import { combineReducers } from 'redux'
import edit from './edit'
import query from './query'
import websites from './websites'

export default combineReducers({
    edit,
    query,
    websites,
})
