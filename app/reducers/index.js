import { combineReducers } from 'redux'
import edit from './edit'
import ui from './ui'
import query from './query'
import websites from './websites'

export default combineReducers({
    edit,
    ui,
    query,
    websites,
})
