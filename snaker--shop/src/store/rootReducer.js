import {combineReducers} from 'redux'
import snakerReducer from './snakerRecuder'

const rootReducer = combineReducers({
    snakers: snakerReducer,
})

export default rootReducer;