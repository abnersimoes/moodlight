import {combineReducers} from 'redux'
import colors from './colors'
import blackout from './blackout'
import saturate from './saturate'

const reducers = combineReducers({
  colors,
  blackout,
  saturate,
})

export type RootState = ReturnType<typeof reducers>

export default reducers
