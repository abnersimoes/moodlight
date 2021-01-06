import {combineReducers} from 'redux'
import nav from './nav'
import colors from './colors'
import loop from './loop'
import blackout from './blackout'
import saturate from './saturate'

const reducers = combineReducers({
  nav,
  colors,
  loop,
  blackout,
  saturate,
})

export type RootState = ReturnType<typeof reducers>

export default reducers
