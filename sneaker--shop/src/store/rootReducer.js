import {combineReducers} from 'redux'
import sneakerReducer from './sneakerRecuder'

const rootReducer = combineReducers({
    sneakers: sneakerReducer,
})

export default rootReducer;