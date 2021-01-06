import {applyMiddleware, createStore} from 'redux'
import thunkMiddleware, {ThunkMiddleware} from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducers, {RootState} from './reducers'
import {Actions} from './types'

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware as ThunkMiddleware<RootState, Actions>)))

export default store
