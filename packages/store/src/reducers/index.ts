import {combineReducers} from 'redux'
import colors from './colors'
import blackout from './blackout'

const reducers = combineReducers({
  colors,
  blackout,
})

export type RootState = ReturnType<typeof reducers>

export default reducers
