import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import rootRecuder from './rootReducer'

const middleware = applyMiddleware(thunk, logger);

const store = createStore(rootRecuder,middleware);

export default store;